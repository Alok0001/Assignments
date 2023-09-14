#base class
class Shape:
    def __init__(self,color):
        self.color = color

    def area(self):
        pass

# derived class
class Circle(Shape):
    def __init__(self,color,radius):
        super().__init__(color)
        self.radius = radius

    def area(self):
        return 3.14159 * self.radius **2

class Rectangle(Shape):
    def __init__(self,color,width,height):
        super().__init__(color)
        self.width = width
        self.height = height

    def area(self):
        return self.width * self.height

#creating objects
circle = Circle("red",5)
rectangle = Rectangle("blue",10, 20)

# printing
print(f"area of cricle {circle.color} circle: {circle.area():.2f} square units")
print(f"area of rectangle {rectangle.color} circle: {rectangle.area()} square units")
