from django.contrib import admin
from .models.Student import Student
from .models.Teacher import Teacher
from .models.Course import Course, Laboratory
from .models.Workload import Workload, WorkloadLab
from .models.Inscription import Inscription, InscriptionLab

# Register your models here.

class BaseModelAdmin(admin.ModelAdmin):
    def save_model(self, request, obj, form, change):
        if not change:
            obj.created_by = request.user
        obj.modified_by = request.user
        obj.save()
        
class StudentAdmin(BaseModelAdmin):
    fields = ['cui', 'names', 'lastnames', 'email', 'status']
    
class TeacherAdmin(BaseModelAdmin):
    fields = ['email', 'names', 'lastnames', 'status']
    
class CourseAdmin(BaseModelAdmin):
    fields = ['code', 'name', 'theory_hours', 'credits', 'hasLaboratory', 'status', 'year', 'semester', 'prerequisites']
    
class LaboratoryAdmin(BaseModelAdmin):
    fields = ['course_id', 'name', 'status', 'year', 'semester']
    
class WorkloadAdmin(BaseModelAdmin):
    fields = ['group', 'capacity', 'teacher_id', 'course_id']
    
class WorkloadLabAdmin(BaseModelAdmin):
    fields = ['group', 'capacity', 'teacher_id', 'laboratory_id']
    
class InscriptionAdmin(BaseModelAdmin):
    fields = ['student_id', 'workload_id', 'status', 'course_status', 'nro_matricula']
    readonly_fields = ['course_status', 'nro_matricula']

class InscriptionLabAdmin(BaseModelAdmin):
    fields = ['student_id', 'workload_id', 'status']
    readonly_fields = ['course_status', 'nro_matricula']
    

# Registrando modelos

admin.site.register(Student, StudentAdmin)

admin.site.register(Teacher, TeacherAdmin)

admin.site.register(Course, CourseAdmin)

admin.site.register(Laboratory, LaboratoryAdmin)

admin.site.register(Workload, WorkloadAdmin)

admin.site.register(WorkloadLab, WorkloadLabAdmin)

admin.site.register(Inscription, InscriptionAdmin)

admin.site.register(InscriptionLab, InscriptionLabAdmin)
