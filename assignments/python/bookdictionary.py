# creating a dictionary of books and there authors
Book = {
    "Adventures of Tom Sawyer": "Mark Twain",
    "Agni Veena": "Kazi Nasrul Islam",
    "Ancient Mariner":"Coleridge",
    "Benu Hr": "Lewis Wallace",
}
#adding a book
Book["Arthashastra"] = "Kautilya"

#updating a book
Book["Benu Hr"]= "Jake"

print("each book and there auther:")
for key,value in Book.items():
    print(f"book is:{key} and auther is:{value}")
