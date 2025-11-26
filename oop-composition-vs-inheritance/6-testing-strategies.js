// 6. Testing Composition vs Inheritance

// Testing inheritance: Hard to isolate
class Calculator {
  add(a, b) { return a + b; }
  multiply(a, b) { return a * b; }
}

class AdvancedCalculator extends Calculator {
  power(base, exp) {
    return Math.pow(base, exp);
  }
}

// Testing: Can't easily test power() without add/multiply
const calc = new AdvancedCalculator();
// How to test power() in isolation?

// Testing composition: Easy to mock and isolate
function createAdvancedCalculator(calculator = { add: (a, b) => a + b }) {
  return {
    ...calculator,
    power(base, exp) {
      return Math.pow(base, exp);
    }
  };
}

// Testing: Can inject mock calculator
const mockCalc = { add: jest.fn((a, b) => a + b) };
const advanced = createAdvancedCalculator(mockCalc);

// Test power() without depending on add()
expect(advanced.power(2, 3)).toBe(8);
expect(mockCalc.add).not.toHaveBeenCalled();

/*
Edge Cases:
- Inheritance: Difficult to test abstract methods
- Composition: Easy dependency injection for testing
- Integration testing: Both can be tested end-to-end

Interview Tip: Composition makes unit testing easier by enabling dependency injection
Real-world: Use composition for testable, modular code; inheritance for stable hierarchies
*/
