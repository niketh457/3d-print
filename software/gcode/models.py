from django.db import models
from django.utils import timezone
import os
# Create your models here.

class Token_access(models.Model):
    username = models.CharField(max_length=1000)
    email = models.EmailField()
    token = models.CharField(max_length=1000)
    def __str__(self) -> str:
        return str(Token_access.username)
    
def upload_to(instance,filename):
    print(filename)
    now = timezone.now()
    base,extension = os.path.splitext(filename.lower())
    return f"uploaded_file.stl"

# def file_path(instance,filename):
#     print(os.path.join('gcode/static/files/',instance.rollNumber,filename))
#     return os.path.join('gcode/static/files/',instance.rollNumber,filename)

class upload_stlfile(models.Model):
    file_name = models.CharField(max_length=1000)
    file = models.FileField("uploaded_file",upload_to=upload_to,blank=True)

class gcode_files(models.Model):
    user = models.ForeignKey("Token_access",on_delete=models.CASCADE)
    file_path = models.FilePathField()

class download_Files(models.Model):
    file_name = models.TextField(max_length=1000)
    directory = models.FilePathField()
