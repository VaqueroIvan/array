let arreglo: string[] = new Array(5);
arreglo[0] = "20";
arreglo[1] = "14";
arreglo[2] = "8";
arreglo[3] = "0";
arreglo[4] = "5";
console.log(arreglo);

function Calculatrice(a, b, op) {
  switch (op) {
    case "+":
      return a + b;
      break;
    case "-":
      return a - b;
      break;
    case "*":
      return a * b;
      break;
    case "/":
      return a / b;
      break;
  }
}
console.log(Calculatrice(5, 5, "*"));
