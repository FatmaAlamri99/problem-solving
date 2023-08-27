function Post(e) {

    const stack = [];

 

    const ope = {

        '+': (x, y) => x + y,

        '-': (x, y) => x - y,

        '*': (x, y) => x * y,

        '/': (x, y) => x / y

    };

 

    for (let x = 0; x < e.length; x++) {

        const n = e[x];

        if (!isNaN(n)) {

            stack.push(parseFloat(n));

        } else if (ope[n]) {

            const operandx = stack.pop();

            const operandy = stack.pop();

            const result = ope[n](operandx, operandy);

            stack.push(result);

        }

    }

 

    return stack.pop();

}

 

const Exp = "231*+9-";

console.log(Post(Exp));