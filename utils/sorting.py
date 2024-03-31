def sort_vertices(vertices):
  """
  Sorts a list of vertices based on their z-coordinate.

  Args:
      vertices: A list of lists, where each inner list represents a vertex with 3 coordinates (x, y, z).

  Returns:
      A new list of vertices sorted by their z-coordinate in ascending order.
  """
  return sorted(vertices, key=lambda vertex: vertex[2])

def sort_by_x(vertices):
    """
    Sorts a list of vertices based on their x-coordinate.
    
    Args:
        vertices: A list of lists, where each inner list represents a vertex with 3 coordinates (x, y, z).
    
    Returns:
        A new list of vertices sorted by their x-coordinate in ascending order.
    """
    return sorted(vertices, key=lambda vertex: vertex[0])

def sort_by_angle(vertices):
    """
    Sorts a list of PolarPoint objects based on their angle attribute.
    
    Args:
        vertices: A list of PolarPoint objects with angle attribute.
    
    Returns:
        A new list of PolarPoint objects sorted by their angle in ascending order.
    """
    return sorted(vertices, key=lambda vertex: (vertex.angle))