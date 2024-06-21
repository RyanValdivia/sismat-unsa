from django.http import Http404
from django.shortcuts import render
from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status
from matriculas.models.Course import Course
from .serializers import CourseSerializer

# Create your views here.

class CourseListCreate(generics.ListCreateAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer

class CourseDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer
        