def custom_sort(item):
    # First sort based on the third element (index 2)
    # Then sort based on the first element (index 0)
    # Then sort based on the second element (index 1)
    return (item[2], item[0], item[1])

# Example list with dimensions (n, 3)
list_with_dimensions = [(1, 2, 3), (2, 3, 1), (3, 1, 2), (2, 1, 3)]

# Sort the list using the custom key function
sorted_list = sorted(list_with_dimensions, key=custom_sort)
