# import fullcontrol as fc
import numpy as np
from stl import mesh

def get_vertices(file_path):
    obj = mesh.Mesh.from_file(file_path)
    points = np.around(np.unique(obj.vectors.reshape([int(obj.vectors.size/3), 3]), axis=0),2)
    return points