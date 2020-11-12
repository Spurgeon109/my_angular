def calc(a, b, op):
    if op == '+': return a + b
    elif op == '-': return abs(a - b)
    elif op == '*': return a * b
    elif op == '/': return a / b
    
while True:
    a = int(input())
    b = int(input())
    op = input()
    print(calc(a, b, op))
    print("Do you want to terminate (0/1)")
    c = int(input())
    if c == 0: break