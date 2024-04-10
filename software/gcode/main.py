import os
from matplotlib.pylab import f
from .utils import get_vertices, splitter,plotter
import fullcontrol as fc
# from stl import mesh
import numpy as np
from .utils.gcode_generator import generate_gcode

def main(actual_file_name,token):
    # TODO: UNCOMMENT BELOW LINE
    splitter.preprocess()
    path = os.getcwd()
    parent_path = os.path.abspath(os.path.join(path, os.pardir))
    stl_files_directory = os.path.join(parent_path,'software','gcode','stl_files')

    for i, file in enumerate(os.listdir(stl_files_directory)):
        if file == ".DS_Store":
            continue
        print(file)
        file_path = os.path.join(stl_files_directory, file)
        
        generate_gcode(file_path,file,actual_file_name,token)
        plotter.plot_gcode(file_path,file)

        os.remove(file_path)

    



