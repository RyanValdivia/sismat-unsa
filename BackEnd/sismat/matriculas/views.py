from django.shortcuts import render
from rest_framework_simplejwt.views import TokenRefreshView
from rest_framework import generics
from rest_framework.views import APIView
from django.contrib.auth import authenticate
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.response import Response
from matriculas.models.Course import Course, Laboratory
from matriculas.models.Inscription import Inscription, InscriptionLab
from matriculas.models.Student import Student
from matriculas.models.Teacher import Teacher
from matriculas.models.Workload import Workload, WorkloadLab
from rest_framework.permissions import IsAuthenticated
from .serializers import (
    CourseSerializer,
    LaboratorySerializer,
    InscriptionSerializer,
    InscriptionLabSerializer,
    StudentSerializer,
    TeacherSerializer,
    WorkloadSerializer,
    WorkloadLabSerializer,
)

# Create your views here.

class CustomTokenView(APIView):
    permission_classes = []
    def post(self, request, *args, **kwargs):
        username = request.data.get('username')
        password = request.data.get('password')
        user = authenticate(request, username=username, password=password)
        
        if user is not None:
            try:
                student = Student.objects.get(user=user)
                student_id = student.id
            except Student.DoesNotExist:
                student_id = None
                
            refresh = RefreshToken.for_user(user)
            return Response({
                'refresh': str(refresh),
                'access': str(refresh.access_token),
                'user_id': user.id,
                'student_id': student_id,
            })
        else:
            return Response({'detail': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
        
class CustomTokenRefresh(TokenRefreshView):
    permission_classes = []

    def post(self, request, *args, **kwargs):
        response = super().post(request, *args, **kwargs)
        if response.status_code != status.HTTP_200_OK:
            return Response({'detail': 'Invalid refresh token'}, status=status.HTTP_400_BAD_REQUEST)
        return response

class CourseListCreate(generics.ListCreateAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer
    permission_classes = [IsAuthenticated]


class CourseDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer
    permission_classes = [IsAuthenticated]


class LaboratoryListCreate(generics.ListCreateAPIView):
    queryset = Laboratory.objects.all()
    serializer_class = LaboratorySerializer
    permission_classes = [IsAuthenticated]


class LaboratoryDetail(generics.RetrieveUpdateAPIView):
    queryset = Laboratory.objects.all()
    serializer_class = LaboratorySerializer
    permission_classes = [IsAuthenticated]


class InscriptionListCreate(generics.ListCreateAPIView):
    queryset = Inscription.objects.all()
    serializer_class = InscriptionSerializer
    permission_classes = [IsAuthenticated]


class InscriptionDetail(generics.RetrieveUpdateAPIView):
    queryset = Inscription.objects.all()
    serializer_class = InscriptionSerializer
    permission_classes = [IsAuthenticated]


class InscriptionLabListCreate(generics.ListCreateAPIView):
    queryset = InscriptionLab.objects.all()
    serializer_class = InscriptionSerializer
    permission_classes = [IsAuthenticated]


class InscriptionLabDetail(generics.RetrieveUpdateAPIView):
    queryset = InscriptionLab.objects.all()
    serializer_class = InscriptionLabSerializer
    permission_classes = [IsAuthenticated]


class StudentListCreate(generics.ListCreateAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer
    permission_classes = []


class StudentDetail(generics.RetrieveUpdateAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer
    permission_classes = [IsAuthenticated]


class TeacherListCreate(generics.ListCreateAPIView):
    queryset = Teacher.objects.all()
    serializer_class = TeacherSerializer
    permission_classes = [IsAuthenticated]


class TeacherDetail(generics.RetrieveUpdateAPIView):
    queryset = Teacher.objects.all()
    serializer_class = TeacherSerializer
    permission_classes = [IsAuthenticated]


class WorkloadListCreate(generics.ListCreateAPIView):
    queryset = Workload.objects.all()
    serializer_class = WorkloadSerializer
    permission_classes = [IsAuthenticated]


class WorkloadDetail(generics.RetrieveUpdateAPIView):
    queryset = Workload.objects.all()
    serializer_class = WorkloadSerializer
    permission_classes = [IsAuthenticated]


class WorkloadLabListCreate(generics.ListCreateAPIView):
    queryset = WorkloadLab.objects.all()
    serializer_class = WorkloadLabSerializer
    permission_classes = [IsAuthenticated]


class WorkloadLabDetail(generics.RetrieveUpdateAPIView):
    queryset = WorkloadLab.objects.all()
    serializer_class = WorkloadLabSerializer
    permission_classes = [IsAuthenticated]
