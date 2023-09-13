def count_words_and_letters(sentence):
    words = sentence.split()
    num_words = len(words)
    num_letters = sum(len(word) for word in words)
    return num_words, num_letters

sentence = input("enter the sentence: ")
num_words, num_letters = count_words_and_letters(sentence)
print("Number of words:", num_words)
print("Number of letters:", num_letters)
