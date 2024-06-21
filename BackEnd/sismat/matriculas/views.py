from django.http import Http404
from django.shortcuts import render
from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status
from matriculas.models.Course import Course, Laboratory
from matriculas.models.Inscription import Inscription, InscriptionLab
from matriculas.models.Student import Student
from matriculas.models.Teacher import Teacher
from matriculas.models.Workload import Workload, WorkloadLab
from .serializers import CourseSerializer, LaboratorySerializer, InscriptionSerializer, InscriptionLabSerializer, StudentSerializer, TeacherSerializer, WorkloadSerializer, WorkloadLabSerializer

# Create your views here.

class CourseListCreate(generics.ListCreateAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer

class CourseDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer

class LaboratoryDetail(generics.RetrieveUpdateAPIView):
    queryset = Laboratory.objects.all()
    serializer_class = LaboratorySerializer
        
class InscriptionDetail(generics.RetrieveUpdateAPIView):
    queryset = Inscription.objects.all()
    serializer_class = InscriptionSerializer

class InscriptionLabDetail(generics.RetrieveUpdateAPIView):
    queryset = InscriptionLab.objects.all()
    serializer_class = InscriptionLabSerializer

class StudentDetail(generics.RetrieveUpdateAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer

class TeacherDetail(generics.RetrieveUpdateAPIView):
    queryset = Teacher.objects.all()
    serializer_class = TeacherSerializer

class WorkloadDetail(generics.RetrieveUpdateAPIView):
    queryset = Workload.objects.all()
    serializer_class = WorkloadSerializer

class WorkloadLabDetail(generics.RetrieveUpdateAPIView):
    queryset = WorkloadLab.objects.all()
    serializer_class = WorkloadLabSerializer


class InscriptionListCreate(generics.ListCreateAPIView):
    queryset = Inscription.objects.all()
    serializer_class = InscriptionSerializer

class InscriptionLabListCreate(generics.ListCreateAPIView):
    queryset = InscriptionLab.objects.all()
    serializer_class = InscriptionSerializer

class StudentListCreate(generics.ListCreateAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer

class TeacherListCreate(generics.ListCreateAPIView):
    queryset = Teacher.objects.all()
    serializer_class = TeacherSerializer

class WorkloadListCreate(generics.ListCreateAPIView):
    queryset = Workload.objects.all()
    serializer_class = WorkloadSerializer

class WorkloadLabListCreate(generics.ListCreateAPIView):
    queryset = WorkloadLab.objects.all()
    serializer_class = WorkloadLabSerializer


