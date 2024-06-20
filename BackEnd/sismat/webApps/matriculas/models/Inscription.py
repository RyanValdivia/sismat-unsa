from django.db import models
from django.contrib.auth.models import User
from .Student import Student
from .Workload import Workload, WorkloadLab
import uuid

# Create your models here.

class Inscription(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    workload = models.ForeignKey(Workload, on_delete=models.CASCADE)
    
    created_by = models.ForeignKey(User, related_name='created_%(class)s_set' , on_delete=models.SET_NULL, null=True)
    modified_by = models.ForeignKey(User, related_name='modified_%(class)s_set', on_delete=models.SET_NULL, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.student.lastnames} {self.student.names} - {self.workload.course.name} {self.workload.group}"
    
class InscriptionLab(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    workload = models.ForeignKey(WorkloadLab, on_delete=models.CASCADE)
    
    created_by = models.ForeignKey(User, related_name='created_%(class)s_set' , on_delete=models.SET_NULL, null=True)
    modified_by = models.ForeignKey(User, related_name='modified_%(class)s_set', on_delete=models.SET_NULL, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.student.lastnames} {self.student.names} - {self.workload.laboratory.name} {self.workload.group}"