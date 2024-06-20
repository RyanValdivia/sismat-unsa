from django.db import models
from django.contrib.auth.models import User
import uuid
from .Teacher import Teacher
from .Course import Course, Laboratory

GROUPS = [
    "A", "B", "C", "D", "E"
]

# Create your models here.

class Workload(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    group = models.CharField(choices=[(group, group) for group in GROUPS], default="A", max_length=1)
    capacity = models.PositiveIntegerField()
    year = models.IntegerField()
    semester = models.IntegerField()
    
    teacher = models.ForeignKey(Teacher, on_delete=models.SET_NULL, null=True)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    
    created_by = models.ForeignKey(User, related_name='created_%(class)s_set' , on_delete=models.SET_NULL, null=True)
    modified_by = models.ForeignKey(User, related_name='modified_%(class)s_set', on_delete=models.SET_NULL, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)

    def save(self, *args, **kwargs):
        if self.course:
            self.year = self.course.year
            self.semester = self.course.semester
        super().save(*args, **kwargs)
        
    def __str__(self):
        return f"{self.course.name} {self.group} - Profesor: {self.teacher.lastnames} {self.teacher.names}"

class WorkloadLab(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    group = models.CharField(choices=[(group, group) for group in GROUPS], default="A", max_length=1)
    capacity = models.PositiveIntegerField()
    year = models.IntegerField()
    semester = models.IntegerField()
    
    teacher = models.ForeignKey(Teacher, on_delete=models.CASCADE)
    laboratory = models.ForeignKey(Laboratory, on_delete=models.CASCADE)
    
    created_by = models.ForeignKey(User, related_name='created_%(class)s_set' , on_delete=models.SET_NULL, null=True)
    modified_by = models.ForeignKey(User, related_name='modified_%(class)s_set', on_delete=models.SET_NULL, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)

    def save(self, *args, **kwargs):
        if self.laboratory:
            self.year = self.laboratory.year
            self.semester = self.laboratory.semester
        super().save(*args, **kwargs)
        
    def __str__(self):
        return f"{self.laboratory.name} {self.group} - Profesor: {self.teacher.lastnames} {self.teacher.names}"