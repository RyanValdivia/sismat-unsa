from rest_framework import serializers

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
