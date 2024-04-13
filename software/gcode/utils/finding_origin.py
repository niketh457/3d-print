import fullcontrol.geometry as fg

def centre(plane: list):
    x = 0
    y = 0
    z = 0

    no_of_points = len(plane)

    for point in plane:
        x += point[0]
        y += point[1]
        z += point[2]

    return [x/no_of_points, y/no_of_points, z/no_of_points]
