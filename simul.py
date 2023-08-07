import numpy as np

# Coefficients and constants for 3x3
coefficients3x3 = np.array([
    [2, 1, -1],
    [1, -3, 2],
    [3, 2, -5]
])
constants3x3 = np.array([5, -8, 1])

# Solve 3x3 system
solution3x3 = np.linalg.solve(coefficients3x3, constants3x3)

print("Solution for 3x3:")
print("x =", solution3x3[0])
print("y =", solution3x3[1])
print("z =", solution3x3[2])

# Coefficients and constants for 2x2
coefficients2x2 = np.array([
    [2, 1],
    [1, -3]
])
constants2x2 = np.array([5, -8])

# Solve 2x2 system
solution2x2 = np.linalg.solve(coefficients2x2, constants2x2)

print("Solution for 2x2:")
print("x =", solution2x2[0])
print("y =", solution2x2[1])

# Coefficients and constants for 5x5
coefficients5x5 = np.array([
    [2, 1, -1, 3, -4],
    [1, -3, 2, 1, -2],
    [3, 2, -5, 2, 1],
    [-1, 4, 1, -3, 0],
    [2, -1, 3, -2, 1]
])
constants5x5 = np.array([5, -8, 1, 7, -3])

# Solve 5x5 system
solution5x5 = np.linalg.solve(coefficients5x5, constants5x5)

print("Solution for 5x5:")
print("x =", solution5x5[0])
print("y =", solution5x5[1])
print("z =", solution5x5[2])
print("w =", solution5x5[3])
print("v =", solution5x5[4])

