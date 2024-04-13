import trimesh
import os

mesh = trimesh.load('../stl_files/uploaded_file.stl')
disconnected = mesh.split(only_watertight=False)
print(disconnected)