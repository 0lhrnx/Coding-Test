a = input()

b = list(map(int, a.split()))

result = 0
for c in b:
    result += c * c
   
print(result % 10)