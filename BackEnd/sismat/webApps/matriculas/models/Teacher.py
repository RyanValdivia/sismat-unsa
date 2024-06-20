from django.db import models
from django.contrib.auth.models import User
import uuid

# Create your models here.

class Teacher(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    email = models.EmailField()
    names = models.CharField(max_length=100)
    lastnames = models.CharField(max_length=100)
    status = models.BooleanField(default=True)
    
    created_by = models.ForeignKey(User, related_name='created_%(class)s_set' , on_delete=models.SET_NULL, null=True)
    modified_by = models.ForeignKey(User, related_name='modified_%(class)s_set', on_delete=models.SET_NULL, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)
    
    def save(self, *args, **kwargs):
        self.names = self.names.upper()
        self.lastnames = self.lastnames.upper()
        super(Teacher, self).save(*args, **kwargs)

    def __str__(self):
        return f"{self.names} {self.lastnames}"