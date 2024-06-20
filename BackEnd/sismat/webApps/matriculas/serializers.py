from rest_framework import serializers

from .models.Student import Student
from .models.Teacher import Teacher
from .models.Course import Course, Laboratory
from .models.Workload import Workload, WorkloadLab
from .models.Inscription import Inscription, InscriptionLab

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ['id', 'cui', 'names', 'lastnames', 'email', 'status']
    
class TeacherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Teacher
        fields = ['id', 'email', 'names', 'lastnames', 'status']
        
class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = ['id', 'code', 'name', 'hasLaboratory', 'status', 'year', 'semester']
        
class LaboratorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Laboratory
        fields = ['id', 'course_id', 'name', 'status', 'year', 'semester']
        
class WorkloadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Workload
        fields = ['id', 'course_id', 'teacher_id', 'theory_hours', 'practice_hours', 'status']
        
class WorkloadLabSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkloadLab
        fields = ['id', 'laboratory_id', 'teacher_id', 'hours', 'status']
        
class InscriptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Inscription
        fields = ['id', 'student_id', 'course_id', 'status']
        
class InscriptionLabSerializer(serializers.ModelSerializer):
    class Meta:
        model = InscriptionLab
        fields = ['id', 'student_id', 'laboratory_id', 'status']

