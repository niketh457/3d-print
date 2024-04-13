from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.decorators import APIView,authentication_classes, permission_classes
from rest_framework.authentication import SessionAuthentication,TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .serializers import UserSerializer,StlFileSerializer
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from rest_framework import status
from .models import Token_access
from rest_framework.parsers import MultiPartParser,FormParser
from django.shortcuts import get_object_or_404
from django.core.files import File
from .main import main
import os
# Create your views here.
class login(APIView):
    def post(self, request ):
        user = get_object_or_404(User, email = request.data['email'])
        if not user.check_password(request.data['password']):
            return Response({"details":"Not found"},status=status.HTTP_404_NOT_FOUND)
        token , created = Token.objects.get_or_create(user=user)
        serializer = UserSerializer(instance=user)
        return Response({"token":token.key,"user":serializer.data})
    
class signup(APIView):
    def post(self,request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            user = User.objects.get(username = request.data['username'])
            user.set_password(request.data['password'])
            user.save()
            token = Token.objects.create(user=user)
            token_save = Token_access.objects.create(username= request.data['username'],email = request.data['email'],token=token.key)
            token_save.save()
            return Response({"token": token.key,"user":serializer.data})
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
     
# @authentication_classes([SessionAuthentication,TokenAuthentication])
# @permission_classes([IsAuthenticated])
class gcode(APIView):
    authentication_classes = [SessionAuthentication,TokenAuthentication]
    permission_classes = [IsAuthenticated]
    def get(self,request):
        print(request.data)
        return Response("passed for {}".format(request.user.email))
    
class stl_file(APIView):
    parser_classes = [MultiPartParser,FormParser]
    # permission_classes = [IsAuthenticated]
    def post(self,request,format=None):
        print(request.data)
        serialzer = StlFileSerializer(data=request.data)
        if serialzer.is_valid():
            serialzer.save()
            main(request.data['file_name'],request.data['token'])
            return Response(serialzer.data,status=status.HTTP_200_OK)
        return Response(serialzer.errors,status=status.HTTP_400_BAD_REQUEST)
    
class gcode_file(APIView):
    def get(self,request):
        print("request.data ",request.data)
        print(request.query_params.get('file_name'))
        file_name = request.query_params.get('file_name')
        path = os.path.join('gcode','gcode_files',file_name)
        print(path)
        list_dir = os.listdir(path)
        last_response = {}
        for i,p in enumerate(list_dir):
            p = os.path.join(path,p)
            f = open(p,'r')
            file = File(f)

            a = file.read()
            last_response[i] = a
            os.remove(p)
        
        # print(os.listdir(path))
        # os.remove(os.listdir(path))
        return Response(last_response,status=status.HTTP_200_OK)

            

        


# from django.core.files.storage import default_storage

# class stl_file(APIView):
#     parser_classes = [MultiPartParser, FormParser]

#     def post(self, request, format=None):
#         file_obj = request.FILES.get('file')
#         print(file_obj)
#         if file_obj:
#             # file_path = default_storage.save(file_obj.name, file_obj)
#             file_path = default_storage.save('uploaded_file.stl', file_obj)
#             file_path = 'uploaded_file.stl'
#             return Response({'file_path': file_path}, status=status.HTTP_200_OK)
#         return Response({'error': 'No file provided'}, status=status.HTTP_400_BAD_REQUEST)
