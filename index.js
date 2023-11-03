//Some part of the code was developed with the help of GPT-4
const findRoots = (a, b, c) => {
    // Calculate the discriminant
    const discriminant = b * b - 4 * a * c;
  
    // Check if discriminant is positive, negative or zero
    if (discriminant > 0) {
      const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
      const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
      return { root1, root2 };
    } else if (discriminant === 0) {
      // When discriminant is zero (1 real root)
      const root = -b / (2 * a);
      return { root };
    } else {
      // When discriminant is negative (complex roots)
      const realPart = -b / (2 * a);
      const imaginaryPart = Math.sqrt(-discriminant) / (2 * a);
      return { 
        root1: { real: realPart, imaginary: imaginaryPart },
        root2: { real: realPart, imaginary: -imaginaryPart }
      };
    }
  };
  
  // Example usage:
  const roots = findRoots(1, -3, 2); // For equation x^2 - 3x + 2 = 0
  console.log(roots); // Should log { root1: 2, root2: 1 } to the console
  