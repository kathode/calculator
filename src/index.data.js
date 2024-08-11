export const buttonType = {
  sign: "sign",
  clear: "clear",
  equate: "equate",
  number: "number",
  operation: "operation",
  percentage: "percentage",
};

export const buttons = [
  [
    { name: "AC", fill: "fill-one", type: "clear" },
    { name: "+/-", fill: "fill-one", type: "sign" },
    { name: "%", fill: "fill-one", type: "percentage" },
    { name: "÷", fill: "fill-one", type: "operation" },
  ],

  [
    { name: "7", fill: "fill-one", type: "number" },
    { name: "8", fill: "fill-one", type: "number" },
    { name: "9", fill: "fill-one", type: "number" },
    { name: "×", fill: "fill-one", type: "operation" },
  ],

  [
    { name: "4", fill: "fill-one", type: "number" },
    { name: "5", fill: "fill-one", type: "number" },
    { name: "6", fill: "fill-one", type: "number" },
    { name: "-", fill: "fill-one", type: "operation" },
  ],

  [
    { name: "1", fill: "fill-one", type: "number" },
    { name: "2", fill: "fill-one", type: "number" },
    { name: "3", fill: "fill-one", type: "number" },
    { name: "+", fill: "fill-one", type: "operation" },
  ],

  [
    { name: "0", fill: "fill-two", type: "number" },
    { name: ".", fill: "fill-one", type: "number" },
    { name: "=", fill: "fill-one", type: "equate" },
  ],
];
