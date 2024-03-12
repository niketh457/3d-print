import os

from matplotlib.pylab import f
from utils import splitter, vertices
import fullcontrol as fc

# splitter.preprocess()

stl_files_directory = 'stl_file'

for i, file in enumerate(os.listdir(stl_files_directory)):
    file_path = os.path.join(stl_files_directory, file)

    co_ordinates = vertices.get_vertices(file_path= file_path)

    


file_path = os.path.join(stl_files_directory, 'object_0.stl')

print((vertices.get_vertices(file_path).shape))

