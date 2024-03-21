import trimesh
import numpy as np  

def get_vertices(file_path):
    mesh = trimesh.load(file_path)
    return np.array(mesh.vertices)
