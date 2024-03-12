import trimesh

def get_vertices(file_path) -> trimesh.caching.TrackedArray:
    mesh = trimesh.load(file_path)
    return (mesh.vertices)
