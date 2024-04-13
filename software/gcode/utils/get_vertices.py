import trimesh

def get_vertices(file_path):
    mesh = trimesh.load(file_path)
    return list(mesh.vertices)
