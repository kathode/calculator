import { buttons, buttonType } from "./index.data";

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
      return NaN;
    }
    return firstValue / secondValue;
  }

  static operate(firstValue, secondValue, operation) {
    if (typeof firstValue !== "number" || typeof secondValue !== "number") {
      return "Both values must be numbers.";
    }

    switch (operation) {
      case "+":
        return Calculator.add(firstValue, secondValue);
      case "-":
        return Calculator.subtract(firstValue, secondValue);
      case "×":
        return Calculator.multiply(firstValue, secondValue);
      case "÷":
        return Calculator.divide(firstValue, secondValue);
      default:
        return firstValue;
    }
  }

  static generateCalculator() {
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

    let firstValue = 0;
    let secondValue = 0;
    let operation;
    let isCalculated = false;

    const onNumberClick = (currentValue, targetValue) => {
      if (currentValue !== 0) {
        if (!(currentValue.includes(".") && targetValue === ".")) {
          currentValue += targetValue;
        }
      }

      if (currentValue === 0 && targetValue === ".") {
        currentValue = "0.";
      }

      if (currentValue === 0) {
        currentValue = targetValue;
      }

      displayValue.textContent = currentValue;

      return currentValue;
    };

    const clearCalculator = () => {
      firstValue = 0;
      secondValue = 0;
      operation = undefined;
      isCalculated = false;
      displayValue.textContent = 0;
    };

    const getCalculation = (firstValue, secondValue, operation) => {
      if (firstValue && secondValue && operation) {
        let results = this.operate(Number(firstValue), Number(secondValue), operation);
        displayValue.textContent = Math.round(results * 100) / 100;

        return results;
      }
    };

    for (const rows of buttons) {
      const row = document.createElement("div");
      row.className = "calculator-button-row";

      for (const config of rows) {
        const button = document.createElement("div");

        const buttonClass = `calculator-button ${config.type} ${config.fill}`;
        button.textContent = config.name;
        button.className = buttonClass;

        button.addEventListener("mousedown", () => {
          if (config.type === buttonType.equate) {
            firstValue = getCalculation(firstValue, secondValue, operation);
            isCalculated = true;
          }

          if (isCalculated && config.type === buttonType.number) {
            clearCalculator();
          }

          if (config.type === buttonType.clear) {
            clearCalculator();
          }

          if (config.type === buttonType.operation) {
            if (isCalculated) {
              secondValue = 0;
              isCalculated = false;
            }

            if (operation && secondValue) {
              firstValue = getCalculation(firstValue, secondValue, operation);
              secondValue = 0;

              displayValue.textContent = firstValue;
            }

            operation = config.name;
          }

          if (!operation && config.type === buttonType.number) {
            firstValue = onNumberClick(firstValue, config.name);
          }

          if (operation && config.type === buttonType.number) {
            secondValue = onNumberClick(secondValue, config.name);
          }

          if (config.type === buttonType.sign) {
            firstValue = getCalculation(firstValue, -1, "×");
          }

          if (config.type === buttonType.percentage) {
            firstValue = getCalculation(firstValue, 100, "÷");
          }

          button.className = `${buttonClass} click`;
        });

        button.addEventListener("mouseup", () => (button.className = buttonClass));

        row.appendChild(button);
      }
      buttonContainer.appendChild(row);
    }
  }
}

Calculator.generateCalculator();
