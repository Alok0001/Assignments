def merge_sorted_lists(list1, list2):
    return sorted(list1 + list2)

# Take input from the user for two sorted lists
list1 = [int(item) for item in input("Enter elements of the first sorted list separated by spaces: ").split()]
list2 = [int(item) for item in input("Enter elements of the second sorted list separated by spaces: ").split()]

merged = merge_sorted_lists(list1, list2)
print("Merged sorted list:", merged)

