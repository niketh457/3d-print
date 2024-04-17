import trimesh
import os

mesh = trimesh.load('../stl_files/uploaded_file.stl')
print(mesh)

path = os.getcwd()
print(os.path.abspath(os.path.join(path, os.pardir)))