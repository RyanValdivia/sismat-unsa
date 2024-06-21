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
    
    teacher_id = models.ForeignKey(Teacher, on_delete=models.SET_NULL, null=True)
    course_id = models.ForeignKey(Course, on_delete=models.CASCADE)
    
    created_by = models.ForeignKey(User, related_name='created_%(class)s_set' , on_delete=models.SET_NULL, null=True)
    modified_by = models.ForeignKey(User, related_name='modified_%(class)s_set', on_delete=models.SET_NULL, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)

    def save(self, *args, **kwargs):
        if self.course_id:
            self.year = self.course_id.year
            self.semester = self.course_id.semester
        super().save(*args, **kwargs)
        
    def __str__(self):
        return f"{self.course_id.name} {self.group} - Profesor: {self.teacher_id.lastnames} {self.teacher_id.names}"

class WorkloadLab(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    group = models.CharField(choices=[(group, group) for group in GROUPS], default="A", max_length=1)
    capacity = models.PositiveIntegerField()
    year = models.IntegerField()
    semester = models.IntegerField()
    
    teacher_id = models.ForeignKey(Teacher, on_delete=models.CASCADE)
    laboratory_id = models.ForeignKey(Laboratory, on_delete=models.CASCADE)
    
    created_by = models.ForeignKey(User, related_name='created_%(class)s_set' , on_delete=models.SET_NULL, null=True)
    modified_by = models.ForeignKey(User, related_name='modified_%(class)s_set', on_delete=models.SET_NULL, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)

    def save(self, *args, **kwargs):
        if self.laboratory_id:
            self.year = self.laboratory_id.year
            self.semester = self.laboratory_id.semester
        super().save(*args, **kwargs)
        
    def __str__(self):
        return f"{self.laboratory_id.name} {self.group} - Profesor: {self.teacher_id.lastnames} {self.teacher_id.names}"