class Vehicle:
    def __init__(self, make, model):
        self.make = make
        self.model = model

class Car(Vehicle):
    def __init__(self, make, model, num_doors):
        super().__init__(make, model)
        self.num_doors = num_doors

    def start_engine(self):
        print(f"{self.make} {self.model}'s engine is started.")

class Motorcycle(Vehicle):
    def __init__(self, make, model, has_sidecar):
        super().__init__(make, model)
        self.has_sidecar = has_sidecar

    def rev_engine(self):
        print(f"{self.make} {self.model}'s engine is revved.")

# Creating instances of the classes
my_car = Car("Toyota", "Camry", 4)
my_motorcycle = Motorcycle("Harley-Davidson", "Sportster", False)

my_car.start_engine()
my_motorcycle.rev_engine()

