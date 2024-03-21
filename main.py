import os
# from matplotlib.pylab import f
from utils import splitter, vertices, sortinng
import fullcontrol as fc
from stl import mesh
import numpy as np

# TODO: UNCOMMENT BELOW LINE
# splitter.preprocess()

co_ordinates = []

stl_files_directory = 'stl_file'

def process_3d_array(vertices, d):
    """
    Processes a 2D array of 3D vertices, adding points for missing z values.

    Args:
        vertices: A NumPy array where each row is a tuple (x, y, z).
        d: The offset value to add to existing z values.

    Returns:
        A new NumPy array with potentially added vertices.
    """

    if not isinstance(vertices, np.ndarray):
        raise TypeError("Input array must be a NumPy array")

    z_values = np.unique(vertices[:, 2])  # Extract unique z values efficiently
    new_vertices = vertices.copy()  # Start with a copy of the original array

    for z in z_values[:-1]:  # Iterate up to the second-highest z value
        if z + d not in z_values:
            # Efficiently create new points using broadcasting
            new_vertices = np.vstack([new_vertices, vertices[vertices[:, 2] == z] + [0, 0, d]])

    return new_vertices


for i, file in enumerate(os.listdir(stl_files_directory)):
        print(file)
        file_path = os.path.join(stl_files_directory, file)
        object = mesh.Mesh.from_file(file_path)
        # print(object.vectors)
        # points = np.around(np.unique(object.vectors.reshape([int(object.vectors.size/3), 3]), axis=0),2)

        points = vertices.get_vertices(file_path)
        points = list(points)
        print(len(points))

        points = np.array(points)




        new_vertices = process_3d_array(points, 0.001)
        print(len(list(new_vertices)))

        
        # steps 


        # gcode = fc.transform(steps,'gcode')
        # with open(f'./gcode_files/gcode_{file.split('.')[0]}.txt','w') as f:
        #     f.write(gcode)



