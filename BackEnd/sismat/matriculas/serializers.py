from rest_framework import serializers

from .models.Course import Course, Laboratory

        
class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = ['id', 'code', 'name', 'hasLaboratory', 'status', 'year', 'semester']
        