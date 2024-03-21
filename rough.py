import numpy as np

def process_3d_array(vertices, d):
    """
    Processes a 2D array of 3D vertices, adding points for missing z values.

    Args:
        vertices: A NumPy array where each row is a tuple (x, y, z).
        d: The offset value to add to existing z values.

    Returns:
        A new NumPy array with potentially added vertices.
    """

    if not isinstance(vertices, np.ndarray):
        raise TypeError("Input array must be a NumPy array")

    z_values = np.unique(vertices[:, 2])  # Extract unique z values initially
    new_vertices = vertices.copy()  # Start with a copy of the original array


    for z in sorted(z_values)[:-1]:  # Iterate up to the second-highest z value
        # Create a list to store all z values including intermediate ones
        z_range = np.arange(z, z + d + 0.1, d)  # Include upper bound with 0.1 offset

        # Filter existing points for the current z value
        existing_points = vertices[vertices[:, 2] == z]

        for new_z in z_range:
            if new_z not in z_values:
                # Add new points for missing z values
                new_vertices = np.vstack([new_vertices, existing_points + [0, 0, new_z]])

    return new_vertices


# Example usage
vertices = np.array([(1, 2, 1), (4, 5, 2)])
d = 0.1

print(vertices)
processed_vertices = (process_3d_array(vertices.copy(), d))
print(processed_vertices)
