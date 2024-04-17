# import stl_reader
from cmath import polar
import fullcontrol as fc
import numpy as np
from stl import mesh
import trimesh
import math
from fullcontrol.geometry.move import move
from utils import vertices, finding_origin, sortinng
import fullcontrol.geometry as fg
# import pymesh
# vertices, indices = stl_reader.read("object.stl")

# vertices = trimesh.load("./object.stl")
# vertices = list(vertices.vertices)
# vertices = pymesh.load_mesh('object.stl')
# vertices = vertices.vertices

# cuboid = mesh.Mesh.from_file("stl_file\object_0.stl")
# #print(cuboid.vectors)
points = vertices.get_vertices("stl_file/object_0.stl")
# #print(points.shape)
# #print(vertices.shape)
# #print(vertices)

# Example usage
# vertices = [[1, 2, 3], [4, 5, 1], [7, 8, 2]]
# vertices = np.array(vertices)
# points = [[0,0,4],[0,1,4],[1,0,4],[1,1,4],[0,0,5],[0,1,5],[1,0,5],[1,1,5]]
vertices = sortinng.sort_vertices(points)
#print(np.array(vertices))
# #print(vertices)

length = len(vertices)
threshold_value = 0.25
plane = []
addplane = []
new_vertices = []
steps = []
i=0
while i<length:
    #print(i,len(vertices))
    vertices[i] = list(vertices[i])
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

                        if j==0:
                            point.append(-1)

                        addplane[j].append(point)
                for k,p in enumerate(addplane):
                    #print(k)
                    for point in p:
                        #print(point,'\n')
                        pass

            polar_vertices = []

            origin = finding_origin.centre(plane)

            for vertex in plane:
                polar_vertex = fg.point_to_polar(fc.Point(x=vertex[0],y=vertex[1],z=vertex[2]),fc.Point(x=origin[0],y=origin[1],z=origin[2]))

                polar_vertices.append(polar_vertex)

            polar_vertices = sortinng.sort_by_angle(polar_vertices)
            
            for moveto,polar_point in enumerate(polar_vertices):
                if moveto==0:
                    steps.extend(fc.travel_to(fc.polar_to_point(fc.Point(x=origin[0],y=origin[1],z=origin[2]),polar_point.radius,polar_point.angle)))
                steps.append(fc.polar_to_point(fc.Point(x=origin[0],y=origin[1],z=origin[2]),polar_point.radius,polar_point.angle))
            steps.append(fc.polar_to_point(fc.Point(x=origin[0],y=origin[1],z=origin[2]),polar_vertices[0].radius,polar_vertices[0].angle))
            for k,p in enumerate(addplane):
                for point in p:
                    vertices.insert(i,point)
                    i+=1
                    length+=1
                    polar_vertices = []

                origin = finding_origin.centre(addplane[k])

                for vertex in addplane[k]:
                    polar_vertex = fg.point_to_polar(fc.Point(x=vertex[0],y=vertex[1],z=vertex[2]),fc.Point(x=origin[0],y=origin[1],z=origin[2]))

                    polar_vertices.append(polar_vertex)

                polar_vertices = sortinng.sort_by_angle(polar_vertices)

                for moveto,polar_point in enumerate(polar_vertices):
                    if moveto==0:
                        steps.extend(fc.travel_to(fc.polar_to_point(fc.Point(x=origin[0],y=origin[1],z=origin[2]),polar_point.radius,polar_point.angle)))
                    steps.append(fc.polar_to_point(fc.Point(x=origin[0],y=origin[1],z=origin[2]),polar_point.radius,polar_point.angle))
                steps.append(fc.polar_to_point(fc.Point(x=origin[0],y=origin[1],z=origin[2]),polar_vertices[0].radius,polar_vertices[0].angle))
                
                    
            # for p in addplane:
            #     for point in p:
            #         new_vertices.append(point)
            plane.clear()
            #print(i,len(vertices),length)
            #print(vertices)
            vertices[i+1] = list(vertices[i+1])
            vertices[i+1].append(-1)
            plane.append(vertices[i+1])
            addplane.clear()
            #print("**********************************************")
            #print(i)
            #print(plane)
            #print(addplane)
            #print("**********************************************")
    i+=1

#print(np.array(vertices))


# for point in vertices:
#         if len(point)==4:
#             # move_steps = fc.travel_to(fc.point(x=point[0],y=point[1],z = point[2]))

#             # for step in move_steps:
#             #     steps.append(step)
#             steps.extend(fc.travel_to(fc.Point(x=point[0],y=point[1],z = point[2])))
#         else:
#             steps.append(fc.Point(x=point[0],y=point[1],z=point[2]))



# gcode = fc.transform(steps,'gcode')
# # #print(gcode)
# with open('cube.txt','w') as f:
#     f.write(gcode)
print(vertices)
fc.transform(steps,'plot')