max = 0
index = 0

for i in range(9):
    A = int(input())
    if A > max:
        max = A
        index = i + 1

print(max)
print(index)