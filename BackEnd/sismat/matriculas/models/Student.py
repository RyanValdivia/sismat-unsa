from django.db import models
from django.contrib.auth.models import User
import uuid

# Create your models here.

class Student(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    cui = models.CharField(max_length=8, unique=True)
    names = models.CharField(max_length=100)
    lastnames = models.CharField(max_length=100)
    email = models.EmailField()
    status = models.BooleanField(default=True)
    
    user = models.OneToOneField(User, on_delete=models.CASCADE, null=True, blank=True)
    
    created_by = models.ForeignKey(User, related_name='created_%(class)s_set' , on_delete=models.SET_NULL, null=True)
    modified_by = models.ForeignKey(User, related_name='modified_%(class)s_set', on_delete=models.SET_NULL, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        app_label = 'matriculas'
    
    def save(self, *args, **kwargs):
        self.names = self.names.upper()
        self.lastnames = self.lastnames.upper()
        super(Student, self).save(*args, **kwargs)

    def __str__(self):
        return f"{self.lastnames} {self.names}"