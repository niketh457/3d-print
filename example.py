import stl_reader
import fullcontrol as fc
import numpy as np
from stl import mesh
import trimesh
import math
# import pymesh
# vertices, indices = stl_reader.read("object.stl")

# vertices = trimesh.load("./object.stl")
# vertices = list(vertices.vertices)
# vertices = pymesh.load_mesh('object.stl')
# vertices = vertices.vertices

cuboid = mesh.Mesh.from_file("./object.stl")
# #print(cuboid.vectors)
points = np.around(np.unique(cuboid.vectors.reshape([int(cuboid.vectors.size/3), 3]), axis=0),2)
# #print(points.shape)
# #print(vertices.shape)
# #print(vertices)
def sort_vertices(vertices):
  """
  Sorts a list of vertices based on their z-coordinate.

  Args:
      vertices: A list of lists, where each inner list represents a vertex with 3 coordinates (x, y, z).

  Returns:
      A new list of vertices sorted by their z-coordinate in ascending order.
  """
  return sorted(vertices, key=lambda vertex: vertex[2])

# Example usage
# vertices = [[1, 2, 3], [4, 5, 1], [7, 8, 2]]
# vertices = np.array(vertices)
# vertices = [[0,0,3],[0,1,3],[1,0,3],[1,1,3],[0,0,4],[0,1,4],[1,0,4],[1,1,4],[0,0,5],[0,1,5],[1,0,5],[1,1,5]]
vertices = sort_vertices(points)
vertices = sort_vertices(vertices)
#print(np.array(vertices))
# #print(vertices)

length = len(vertices)
threshold_value = 0.25
plane = []
addplane = []
new_vertices = []
sorted(vertices,key=lambda vertex:vertex[2])
i=0
while i<length:
    #print(i,len(vertices))
    if len(plane)==0 or vertices[i][2]==plane[0][2]:
        #print(i,vertices[i])
        plane.append(vertices[i])
    elif len(plane)!=0 and vertices[i][2]!=plane[0][2]:
        if i==0 :
            for p in plane:
                new_vertices.append(p)
        else :
            z = vertices[i][2]
            #print("z and i",z,i,plane[0][2])
            if z-plane[0][2]>threshold_value:
                val = (z-plane[0][2])/threshold_value
                val =  math.ceil(val)
                #print("Value of val is",val)
                for j in range(0,val-1):
                    addplane.append([])
                for p in plane:
                    for j in range(0,val-1):
                        point = []
                        point.append(p[0])
                        point.append(p[1])
                        point.append(p[2]+threshold_value*(j+1))
                        addplane[j].append(point)
                for k,p in enumerate(addplane):
                    #print(k)
                    for point in p:
                        #print(point,'\n')
                        pass
            for p in addplane:
                for point in p:
                    vertices.insert(i,point)
                    i+=1
                    length+=1
                    
            for p in addplane:
                for point in p:
                    new_vertices.append(point)
            plane.clear()
            #print(i,len(vertices),length)
            #print(vertices)
            plane.append(vertices[i+1])
            addplane.clear()
            #print("**********************************************")
            #print(i)
            #print(plane)
            #print(addplane)
            #print("**********************************************")
    i+=1

#print(np.array(vertices))

steps = []
for point in vertices:
        steps.append(fc.Point(x=point[0],y=point[1],z=point[2]))



gcode = fc.transform(steps,'gcode')
# #print(gcode)
with open('cube.txt','w') as f:
    f.write(gcode)