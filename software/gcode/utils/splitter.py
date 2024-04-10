import os
import trimesh

# software/gcode/stl_files

def preprocess():
  path = os.getcwd()
  parent_path = os.path.abspath(os.path.join(path, os.pardir))
  file_path = os.path.join(parent_path,'software','gcode','stl_files','uploaded_file.stl')
  save_dir = os.path.join(parent_path,'software','gcode','stl_files')
  print(file_path)
  mesh = trimesh.load(file_path)
  disconnected = mesh
  try:
    disconnected = mesh.split(only_watertight=False)
  except:
    disconnected = [mesh]

  for i, component in enumerate(disconnected):
    print(i)
    # trimesh.Trimesh(component.vertices, component.faces).export(f"stl_files/object_{i}.stl")
    trimesh.Trimesh(component.vertices, component.faces).export(os.path.join(save_dir,f'object_{i}.stl'))

  os.remove(file_path)
