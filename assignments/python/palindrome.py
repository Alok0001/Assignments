def palindrome(word):
    word = word.lower() # converts word to lower case
    return word == word[::-1]

print("enter the word to check if it is a palindrome or not:")
word = input("")
if palindrome(word):
    print(f"{word} is a palindrome")
else:
    print(f"{word} is not a palindrome")

