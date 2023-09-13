def prime_factors(n):
    factors = []
    divisor = 2

    while n > 1:
        if n % divisor == 0:
            factors.append(divisor)
            n //= divisor
        else:
            divisor += 1

    return factors

# Take input from the user for a number
num = int(input("Enter a number: "))

factors = prime_factors(num)
print("Prime factors of", num, "are:", factors)
