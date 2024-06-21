# Generated by Django 5.0.6 on 2024-06-20 23:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('matriculas', '0003_course_prerequisites'),
    ]

    operations = [
        migrations.AddField(
            model_name='inscription',
            name='course_status',
            field=models.IntegerField(choices=[(1, 'Matriculado'), (2, 'Aprobado'), (3, 'Reprobado'), (4, 'Retirado')], default=1),
        ),
        migrations.AddField(
            model_name='inscription',
            name='nro_matricula',
            field=models.PositiveIntegerField(default=1, editable=False),
        ),
    ]
