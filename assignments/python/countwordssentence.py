def count_words(sentence):
    words = sentence.split()
    num_words = len(words)
    return num_words

sentence = input("enter the sentence: ")
num_words = count_wordsmu(sentence)
print("Number of words:", num_words)
