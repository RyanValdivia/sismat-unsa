from django.db import models
from django.contrib.auth.models import User
import uuid

# Create your models here.

YEARS = [(1, "Primero"), (2, "Segundo"), (3, "Tercero"), (4, "Cuarto"), (5, "Quinto")]

SEMESTERS = [
    (1, "Primer Semestre"),
    (2, "Segundo Semestre"),
    (3, "Tercer Semestre"),
    (4, "Cuarto Semestre"),
    (5, "Quinto Semestre"),
    (6, "Sexto Semestre"),
    (7, "Séptimo Semestre"),
    (8, "Octavo Semestre"),
    (9, "Noveno Semestre"),
    (10, "Décimo Semestre"),
]

class Course(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    code = models.CharField(max_length=7, unique=True)
    name = models.CharField(max_length=255)
    theory_hours = models.DecimalField(max_digits=4, decimal_places=2)
    credits = models.IntegerField()
    hasLaboratory = models.BooleanField(default=False)
    status = models.BooleanField(default=True)
    year = models.IntegerField(choices=YEARS, default=1)
    semester = models.IntegerField(choices=SEMESTERS, default=1)
    
    prerequisites = models.ManyToManyField('self', symmetrical=False, blank=True, related_name='prerequisites_%(class)s_set')
    
    created_by = models.ForeignKey(User, related_name='created_%(class)s_set' , on_delete=models.SET_NULL, null=True)
    modified_by = models.ForeignKey(User, related_name='modified_%(class)s_set', on_delete=models.SET_NULL, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        app_label = 'matriculas'
    
    def save(self, *args, **kwargs):
        self.name = self.name.upper()
        super(Course, self).save(*args, **kwargs)

    def __str__(self):
        return f"{self.code} - {self.name}"
    
class Laboratory(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    course_id = models.ForeignKey(Course, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    status = models.BooleanField(default=True)
    year = models.IntegerField(choices=YEARS, default=1)
    semester = models.IntegerField(choices=SEMESTERS, default=1)
    
    created_by = models.ForeignKey(User, related_name='created_%(class)s_set' , on_delete=models.SET_NULL, null=True)
    modified_by = models.ForeignKey(User, related_name='modified_%(class)s_set', on_delete=models.SET_NULL, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)
    
    def save(self, *args, **kwargs):
        self.name = self.name.upper()
        super(Course, self).save(*args, **kwargs)
    
    def __str__(self):
        return f"{self.name} - Laboratorio"


