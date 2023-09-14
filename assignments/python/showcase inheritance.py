class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def introduce(self):
        return f"Hi, my name is {self.name} and I am {self.age} years old."

class Student(Person):
    def __init__(self, name, age, student_id):
        super().__init__(name, age)
        self.student_id = student_id

    def introduce(self):
        return f"Hi, I'm {self.name}, {self.age} years old, and my student ID is {self.student_id}."

class Teacher(Person):
    def __init__(self, name, age, subject):
        super().__init__(name, age)
        self.subject = subject

    def introduce(self):
        return f"Hello, I'm {self.name}, {self.age} years old, and I teach {self.subject}."

if __name__ == "__main__":
    person = Person("John", 30)
    student = Student("Alice", 20, "12345")
    teacher = Teacher("Mr. Smith", 40, "Mathematics")

    print(person.introduce())
    print(student.introduce())
    print(teacher.introduce())  
