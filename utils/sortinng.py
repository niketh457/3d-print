def sort_vertices(vertices):
  """
  Sorts a list of vertices based on their z-coordinate.

  Args:
      vertices: A list of lists, where each inner list represents a vertex with 3 coordinates (x, y, z).

  Returns:
      A new list of vertices sorted by their z-coordinate in ascending order.
  """
  return sorted(vertices, key=lambda vertex: vertex[2])