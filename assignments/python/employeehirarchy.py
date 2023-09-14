class Employee:
    def __init__(self, name, employee_id):
        self.name = name
        self.employee_id = employee_id

    def display_info(self):
        print(f"Employee ID: {self.employee_id}")
        print(f"Name: {self.name}")

class Manager(Employee):
    def __init__(self, name, employee_id, department):
        super().__init__(name, employee_id)
        self.department = department

    def display_info(self):
        super().display_info()
        print(f"Department: {self.department}")
        print("Role: Manager")

class Developer(Employee):
    def __init__(self, name, employee_id, programming_language):
        super().__init__(name, employee_id)
        self.programming_language = programming_language

    def display_info(self):
        super().display_info()
        print(f"Programming Language: {self.programming_language}")
        print("Role: Developer")

# Creating instances of the classes
manager = Manager("John Doe", "M123", "Engineering")
developer = Developer("Jane Smith", "D456", "Python")

manager.display_info()
print("\n")
developer.display_info()
