from django.urls import path
from .views import CourseDetail, CourseListCreate

urlpatterns = [
    path('courses/', CourseListCreate.as_view(), name='course-list-create'),
    path('courses/<uuid:pk>/', CourseDetail.as_view(), name='course-detail')
]

