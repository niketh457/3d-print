import os
from matplotlib.pylab import f
from utils import splitter, vertices
import fullcontrol as fc
from stl import mesh
import numpy as np

# TODO: UNCOMMENT BELOW LINE
# splitter.preprocess()

co_ordinates = []

stl_files_directory = 'stl_file'

for i, file in enumerate(os.listdir(stl_files_directory)):
    file_path = os.path.join(stl_files_directory, file)
    # co_ordinates.append(vertices.get_vertices(file_path= file_path))
    

    
# file_path = os.path.join(stl_files_directory, 'object_0.stl')
# print((vertices.get_vertices(file_path).shape))

def sort_vertices(vertices):
  """
  Sorts a list of vertices based on their z-coordinate.

  Args:
      vertices: A list of lists, where each inner list represents a vertex with 3 coordinates (x, y, z).

  Returns:
      A new list of vertices sorted by their z-coordinate in ascending order.
  """
  return sorted(vertices, key=lambda vertex: vertex[2])

for i, file in enumerate(os.listdir(stl_files_directory)):
        print(file)
        file_path = os.path.join(stl_files_directory, file)
        object = mesh.Mesh.from_file(file_path)
        # print(object.vectors)
        points = np.around(np.unique(object.vectors.reshape([int(object.vectors.size/3), 3]), axis=0),2)
        points = np.array(points)
        points = sort_vertices(points)
        steps = []
        for point in points: 
            steps.append(fc.Point(x=point[0],y=point[1],z=point[2]))
        gcode = fc.transform(steps,'gcode')
        with open(f'./gcode_files/gcode_{file.split(".")[0]}.txt','w') as f:
            f.write(gcode)



