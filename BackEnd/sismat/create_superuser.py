# create_superuser.py

import os
import django
from django.contrib.auth.models import User

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'tu_proyecto.settings')
django.setup()

# Configura las credenciales del superusuario
SUPERUSER_USERNAME = os.getenv('DJANGO_SUPERUSER_USERNAME', 'admin')
SUPERUSER_EMAIL = os.getenv('DJANGO_SUPERUSER_EMAIL', '')
SUPERUSER_PASSWORD = os.getenv('DJANGO_SUPERUSER_PASSWORD', '1234')

# Crea el superusuario solo si no existe
if not User.objects.filter(username=SUPERUSER_USERNAME).exists():
    User.objects.create_superuser(
        username=SUPERUSER_USERNAME,
        email=SUPERUSER_EMAIL,
        password=SUPERUSER_PASSWORD
    )
