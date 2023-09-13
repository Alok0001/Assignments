def find_intersection(list1, list2):
    return list(set(list1) & set(list2))

# Take input from the user for two lists
list1 = input("Enter elements of the first list separated by spaces: ").split()
list2 = input("Enter elements of the second list separated by spaces: ").split()

# Convert input strings to integer lists
list1 = [int(item) for item in list1]
list2 = [int(item) for item in list2]

intersection = find_intersection(list1, list2)
print("Intersection:", intersection)

