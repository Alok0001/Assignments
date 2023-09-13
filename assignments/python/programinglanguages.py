# set of programming languages
pls= {"c++","java","python","scala"}

#adding a new language
pls.add("c")

#removing a language
pls.remove("java")

#check if python is there
print("if the 'python is there or not:","python" in pls)

pls_language = {"java","python","xml","html"}

print("intersection of both sets:",pls.intersection(pls_language))


