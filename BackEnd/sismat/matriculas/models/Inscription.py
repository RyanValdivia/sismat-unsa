from django.db import models
from django.contrib.auth.models import User
from .Student import Student
from .Workload import Workload, WorkloadLab
import uuid

# Create your models here.

STATUSES = [
    (1, "Matriculado"),
    (2, "Aprobado"),
    (3, "Reprobado"),
    (4, "Abandonado")
]

class Inscription(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    student_id = models.ForeignKey(Student, on_delete=models.CASCADE)
    workload_id = models.ForeignKey(Workload, on_delete=models.CASCADE)
    status = models.BooleanField(default=True)
    course_status = models.IntegerField(choices=STATUSES, default=1)
    nro_matricula = models.PositiveIntegerField(default=1, editable=False)
    
    created_by = models.ForeignKey(User, related_name='created_%(class)s_set' , on_delete=models.SET_NULL, null=True)
    modified_by = models.ForeignKey(User, related_name='modified_%(class)s_set', on_delete=models.SET_NULL, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        app_label = 'matriculas'
    
    def save(self, *args, **kwargs):
        
        course = self.workload_id.course_id
        prerequisites = course.prerequisites.all()
        
        for prereq in prerequisites:
            inscripciones = Inscription.objects.filter(student_id=self.student_id, workload_id__course_id=prereq)
            for inscripcion in inscripciones:
                if inscripcion.course_status != 2:
                    raise ValueError(f"El estudiante no ha completado el prerrequisito: {prereq.name}")
            
        inscripciones = Inscription.objects.filter(student_id=self.student_id, workload_id__course_id=self.workload_id.course_id)
        if inscripciones:
            
            for inscripcion in inscripciones.all():
                if inscripcion.course_status == 2 or 1:
                    raise ValueError(f"El estudiante ya se ha matriculado en ese curso: {inscripcion.workload_id.course_id}")
                if(inscripcion.exists() and inscripcion.course_status == 3 or 4):
                    self.nro_matricula += inscripcion.nro_matricula
                    inscripcion.delete()
                    
        if self.workload_id:
            if self.workload_id.capacity > 0:
                self.workload_id.capacity -= 1
                self.workload_id.save()
                
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.student_id.lastnames} {self.student_id.names} - {self.workload_id.course_id.name} {self.workload_id.group}"
    
class InscriptionLab(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    student_id = models.ForeignKey(Student, on_delete=models.CASCADE)
    workload_id = models.ForeignKey(WorkloadLab, on_delete=models.CASCADE)
    status = models.BooleanField(default=True)
    
    course_status = models.IntegerField(choices=STATUSES, default=1)
    nro_matricula = models.PositiveIntegerField(default=1, editable=False)
    
    created_by = models.ForeignKey(User, related_name='created_%(class)s_set' , on_delete=models.SET_NULL, null=True)
    modified_by = models.ForeignKey(User, related_name='modified_%(class)s_set', on_delete=models.SET_NULL, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        app_label = 'matriculas'
    
    def save(self, *args, **kwargs):        
        if self.workload_id:
            if self.workload_id.capacity > 0:
                self.workload_id.capacity -= 1
                self.workload_id.save()
        
        
                
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.student_id.lastnames} {self.student_id.names} - {self.workload_id.laboratory.name} {self.workload_id.group}"