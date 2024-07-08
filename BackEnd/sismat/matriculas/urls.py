from django.urls import path
from .views import (
    CourseDetail,
    CourseListCreate,
    StudentDetail,
    StudentListCreate,
    TeacherDetail,
    TeacherListCreate,
    WorkloadDetail,
    WorkloadListCreate,
    LaboratoryDetail,
    LaboratoryListCreate,
    InscriptionDetail,
    InscriptionListCreate,
    InscriptionLabDetail,
    InscriptionLabListCreate,
    loadIndex
)

urlpatterns = [
    path("courses/", CourseListCreate.as_view(), name="course-list-create"),
    path("courses/<uuid:pk>/", CourseDetail.as_view(), name="course-detail"),
    path("students/", StudentListCreate.as_view(), name="student-list-create"),
    path("students/<uuid:pk>/", StudentDetail.as_view(), name="student-detail"),
    path("teachers/", TeacherListCreate.as_view(), name="teacher-list-create"),
    path("teachers/<uuid:pk>/", TeacherDetail.as_view(), name="teacher-detail"),
    path("workloads/", WorkloadListCreate.as_view(), name="workload-list-create"),
    path("workloads/<uuid:pk>/", WorkloadDetail.as_view(), name="workload-detail"),
    path("laboratories/", LaboratoryListCreate.as_view(), name="laboratory-list-create"),
    path("laboratories/<uuid:pk>/", LaboratoryDetail.as_view(), name="laboratory-detail"),
    path("inscriptions/", InscriptionListCreate.as_view(), name="inscription-list-create"),
    path("inscriptions/<uuid:pk>/", InscriptionDetail.as_view(), name="inscription-detail"),
    path("inscriptionslab/", InscriptionLabListCreate.as_view(), name="inscriptionlab-list-create"),
    path("inscriptionslab/<uuid:pk>/", InscriptionLabDetail.as_view(), name="inscriptionlab-detail"),
    path("", loadIndex, name="index")
]
