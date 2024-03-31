from utils.plotter import plot_gcode
import os

# splitter.preprocess()


for i, file in enumerate(os.listdir('stl_file')):
    file_path = os.path.join('stl_file', file)
    plot_gcode(file_path,file)