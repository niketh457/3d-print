import os
from matplotlib.pylab import f
from utils import get_vertices, splitter,plotter
import fullcontrol as fc
from stl import mesh
import numpy as np
from utils.gcode_generator import generate_gcode

# TODO: UNCOMMENT BELOW LINE
splitter.preprocess()

stl_files_directory = 'stl_file'

for i, file in enumerate(os.listdir(stl_files_directory)):
    file_path = os.path.join(stl_files_directory, file)
    
    generate_gcode(file_path,file)
    plotter.plot_gcode(file_path,file)

    os.remove(file_path)

    



