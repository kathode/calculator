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

  static generateUI() {
    const app = document.querySelector(".app");

    const container = document.createElement("div");
    container.className = "calculator";
    app.appendChild(container);

    const displayContainer = document.createElement("div");
    displayContainer.className = "display-container";
    container.appendChild(displayContainer);

    const displayValue = document.createElement("div");
    displayValue.className = "display-value";
    displayValue.textContent = "0";
    displayContainer.appendChild(displayValue);

    const buttonContainer = document.createElement("div");
    buttonContainer.className = "button-container";
    container.appendChild(buttonContainer);

    const buttons = [
      [
        { name: "AC", fill: 1, color: "#626261" },
        { name: "+/-", fill: 1, color: "#626261" },
        { name: "%", fill: 1, color: "#626261" },
        { name: "÷", fill: 1, color: "#FF9F0A" },
      ],

      [
        { name: "7", fill: 1, color: "#7C7C7B" },
        { name: "8", fill: 1, color: "#7C7C7B" },
        { name: "9", fill: 1, color: "#7C7C7B" },
        { name: "×", fill: 1, color: "#FF9F0A" },
      ],

      [
        { name: "4", fill: 1, color: "#7C7C7B" },
        { name: "5", fill: 1, color: "#7C7C7B" },
        { name: "6", fill: 1, color: "#7C7C7B" },
        { name: "-", fill: 1, color: "#FF9F0A" },
      ],

      [
        { name: "1", fill: 1, color: "#7C7C7B" },
        { name: "2", fill: 1, color: "#7C7C7B" },
        { name: "3", fill: 1, color: "#7C7C7B" },
        { name: "+", fill: 1, color: "#FF9F0A" },
      ],

      [
        { name: "0", fill: 2, color: "#7C7C7B" },
        { name: ".", fill: 1, color: "#7C7C7B" },
        { name: "=", fill: 1, color: "#FF9F0A" },
      ],
    ];

    for (const rows of buttons) {
      const row = document.createElement("div");
      row.className = "calculator-button-row";

      for (const config of rows) {
        const button = document.createElement("div");
        button.textContent = config.name;
        button.className = "calculator-button";
        button.style.background = config.color;
        button.style.width = `${25 * config.fill}%`;
        row.appendChild(button);
      }
      buttonContainer.appendChild(row);
    }
  }
}

Calculator.generateUI();

module.exports = Calculator;
