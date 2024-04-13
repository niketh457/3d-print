from django.contrib import admin
from django.urls import path,re_path
from gcode import views

urlpatterns = [
    path('login',views.login.as_view()), 
    path('signup',views.signup.as_view()),
    path('gcode',views.gcode.as_view()),
    path('stl',views.stl_file.as_view()),
    # re_path(r'download/(?P<file_name>.+)$',views.gcode_file.as_view())
    path('download/',views.gcode_file.as_view()),
]