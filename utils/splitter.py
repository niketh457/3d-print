import os
import trimesh

def preprocess():
  file_path = os.path.join('stl_file', 'uploaded_stl.stl')
  mesh = trimesh.load(file_path)
  disconnected = mesh.split(only_watertight=False)

  for i, component in enumerate(disconnected):
    trimesh.Trimesh(component.vertices, component.faces).export(f"stl_file/object_{i}.stl")

  os.remove(file_path)
