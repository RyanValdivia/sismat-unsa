from rest_framework import serializers

import random, string

from django.contrib.auth.models import User
from django.core.mail import send_mail
from django.conf import settings

from .models.Course import Course, Laboratory
from .models.Inscription import Inscription, InscriptionLab
from .models.Student import Student
from .models.Teacher import Teacher
from .models.Workload import Workload, WorkloadLab


class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = [
            "id",
            "code",
            "name",
            "hasLaboratory",
            "theory_hours",
            "credits",
            "status",
            "year",
            "semester",
            "prerequisites"
        ]


class LaboratorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Laboratory
        fields = ["id", "course_id", "name", "status", "year", "semester"]


class InscriptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Inscription
        fields = [
            "id",
            "student_id",
            "workload_id",
            "status",
            "course_status",
            "nro_matricula",
        ]


class InscriptionLabSerializer(serializers.ModelSerializer):
    class Meta:
        model = InscriptionLab
        fields = [
            "id",
            "student_id",
            "workload_id",
            "status",
            "course_status",
            "nro_matricula",
        ]


class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ["id", "cui", "names", "lastnames", "email", "status"]
        
    def create(self, validated_data):
        email = validated_data["email"]
        if User.objects.filter(email=email).exists():
            raise serializers.ValidationError("El correo ya está registrado.")
        else:
            username = "".join(random.choices(string.ascii_letters, k=8))
            password = "".join(random.choices(string.digits, k=8))
            user = User.objects.create_user(username=username, password=password, email=email)
            estudiante = Student.objects.create(user=user, **validated_data)
            
            self.send_email_with_credentials(email, username, password)
            
            return estudiante
    
    def send_email_with_credentials(self, to_email, username, password):
        subject = 'Tus credenciales de acceso'
        message = f'Tu usuario es: {username}\nTu contraseña es: {password}'
        email_from = settings.EMAIL_HOST_USER
        recipient_list = [to_email]
        send_mail(subject, message, email_from, recipient_list)

class TeacherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Teacher
        fields = ["id", "email", "names", "lastnames", "status"]


class WorkloadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Workload
        fields = [
            "id",
            "group",
            "capacity",
            "year",
            "semester",
            "teacher_id",
            "course_id",
        ]


class WorkloadLabSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkloadLab
        fields = [
            "id",
            "group",
            "capacity",
            "year",
            "semester",
            "teacher_id",
            "laboratory_id",
        ]
