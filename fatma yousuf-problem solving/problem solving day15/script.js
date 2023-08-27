function evaluateP(exp) {
    const stack = [];
   
    for (let i = 0; i < exp.length; i++) {
      const char = exp[i];
   
      if (!isNaN(char)) {
        stack.push(Number(char));
      } else {
        const operand2 = stack.pop();
        const operand1 = stack.pop();
   
        switch (char) {
          case '*':
            stack.push(operand1 * operand2);
            break;
          case '/':
            stack.push(operand1 / operand2);
            break;
          case '+':
            stack.push(operand1 + operand2);
            break;
          case '-':
            stack.push(operand1 - operand2);
            break;
        }
      }
    }
   
    return stack.pop();
   }
   
   const exp = "231*+9-";
   const result = evaluateP(exp);
   
   console.log(result);