from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Token_access,upload_stlfile

class UserSerializer(serializers.ModelSerializer):
    class Meta(object):
        model = User
        fields = ['id','username','password','email']

class TokenSerializer(serializers.ModelSerializer):
    class Meta(object):
        model = Token_access
        fields = ['username','email','token']

class StlFileSerializer(serializers.ModelSerializer):
    class Meta(object):
        model = upload_stlfile
        fields = ['file_name', 'file']

    # def save(self, *args, **kwargs):
    #     print("save")
    #     print(self)
    #     instance = super().save(*args, **kwargs)
    #     print("Hello" , instance.file)
    #     if instance.file:
    #         instance.file.delete()
    #     return instance

