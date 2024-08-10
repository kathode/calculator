class Calculator {
  static add(firstValue, secondValue) {
    return firstValue + secondValue;
  }

  static subtract(firstValue, secondValue) {
    return firstValue - secondValue;
  }

  static multiply(firstValue, secondValue) {
    return firstValue * secondValue;
  }

  static divide(firstValue, secondValue) {
    if (secondValue === 0) {
      throw new Error("Division by zero is not allowed.");
    }
    return firstValue / secondValue;
  }

  static operate(firstValue, secondValue, operation) {
    if (typeof firstValue !== "number" || typeof secondValue !== "number") {
      throw new Error("Both values must be numbers.");
    }

    switch (operation) {
      case "+":
        return Calculator.add(firstValue, secondValue);
      case "-":
        return Calculator.subtract(firstValue, secondValue);
      case "*":
        return Calculator.multiply(firstValue, secondValue);
      case "/":
        return Calculator.divide(firstValue, secondValue);
      default:
        throw new Error("Invalid operation.");
    }
  }
}

module.exports = Calculator;
