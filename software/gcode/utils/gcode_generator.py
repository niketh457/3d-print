import fullcontrol as fc
import math
from . import get_vertices, finding_origin, sorting as sortinng
import fullcontrol.geometry as fg
import os
from ..models import gcode_files 

def generate_gcode(file_path,file_name,actual_file_name,token):
    points = get_vertices.get_vertices(file_path)
    vertices = sortinng.sort_vertices(points)

    length = len(vertices)
    threshold_value = 0.2
    plane = []
    addplane = []
    new_vertices = []
    steps = []
    req=0

    while req < length:
        
        if len(plane) == 0 or vertices[req][2] == plane[0][2]:
            plane.append(vertices[req])
        elif len(plane) != 0 and vertices[req][2] != plane[0][2]:
            if req == 0 :
                for p in plane:
                    new_vertices.append(p)
            else :
                z = vertices[req][2]

                if z-plane[0][2] > threshold_value:

                    val = (z-plane[0][2])/threshold_value
                    val =  math.ceil(val)

                    for j in range(0,val-1):
                        addplane.append([])
                    for p in plane:
                        for j in range(0,val-1):
                            point = []
                            point.append(p[0])
                            point.append(p[1])
                            point.append(p[2]+threshold_value*(j+1))

                            if j == 0:
                                point.append(-1)

                            addplane[j].append(point)

                polar_vertices = []

                origin = finding_origin.centre(plane)

                for vertex in plane:
                    polar_vertex = fg.point_to_polar(fc.Point(x=vertex[0],y=vertex[1],z=vertex[2])
                                                    ,fc.Point(x=origin[0],y=origin[1],z=origin[2])
                                                    )

                    polar_vertices.append(polar_vertex)

                polar_vertices = sortinng.sort_by_angle(polar_vertices)

                for q, polar_point in enumerate(polar_vertices):
                    if q == 0:
                        steps.extend(fc.travel_to(fc.polar_to_point(fc.Point(x = origin[0], y = origin[1], z = origin[2])
                                    ,polar_point.radius,polar_point.angle)))

                    steps.append(fc.polar_to_point(fc.Point(x = origin[0], y = origin[1], z = origin[2])
                                ,polar_point.radius,polar_point.angle)
                                )
                steps.append(fc.polar_to_point(fc.Point(x = origin[0], y = origin[1], z = origin[2])
                                ,polar_vertices[0].radius,polar_vertices[0].angle)
                                )
                for k,p in enumerate(addplane):
                    for point in p:
                        vertices.insert(req,point)
                        req+=1
                        length+=1
                        polar_vertices = []

                    origin = finding_origin.centre(addplane[k])

                    for q, vertex in enumerate(addplane[k]):

                        polar_vertex = fg.point_to_polar(fc.Point(x = vertex[0], y = vertex[1], z = vertex[2])
                                                        ,fc.Point(x = origin[0], y = origin[1], z = origin[2])
                                                        )

                        polar_vertices.append(polar_vertex)

                    polar_vertices = sortinng.sort_by_angle(polar_vertices)

                    for q, polar_point in enumerate(polar_vertices):
                        if q == 0:
                            steps.extend(fc.travel_to(fc.polar_to_point(fc.Point(x = origin[0], y = origin[1], z = origin[2])
                                                    ,polar_point.radius,polar_point.angle)))

                        steps.append(fc.polar_to_point(fc.Point(x = origin[0], y = origin[1], z = origin[2])
                                                    ,polar_point.radius,polar_point.angle)
                                                    )
                    steps.append(fc.polar_to_point(fc.Point(x = origin[0], y = origin[1], z = origin[2])
                                ,polar_vertices[0].radius,polar_vertices[0].angle)
                                )

                plane.clear()
                if req+1 >= len(vertices):
                    break
                vertices[req+1] = list(vertices[req+1])
                vertices[req+1].append(-1)
                plane.append(vertices[req+1])
                addplane.clear()
        req+=1


    gcode = fc.transform(steps,'gcode')
    path = os.getcwd()
    parent_path = os.path.abspath(os.path.join(path, os.pardir))
    curent_dir,ext = os.path.splitext(actual_file_name.lower())
    gcode_files_directory = os.path.join(parent_path,'software','gcode','gcode_files',curent_dir)
    
    print(gcode_files_directory)
    if not (os.path.exists(gcode_files_directory)):
        os.mkdir(gcode_files_directory)
    with open(os.path.join(gcode_files_directory,f'gcode_{file_name.split(".")[0]}.txt'),'w') as f:
        f.write(gcode)


    # fc.transform(steps,'plot')