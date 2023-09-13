def reverse(name):
    return name[:: -1]
my_name = input("enter the string: ")
mystring = reverse(my_name)

print("reversed string",mystring)
