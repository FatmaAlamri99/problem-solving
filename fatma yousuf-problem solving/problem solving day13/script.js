function A(array,number,sum,x,s)

    {

        if (x > number)

        {

            return;

        }

        if (x == number)

         {

            s.add(sum);

            return;

        }

        A(array, number, sum + array[x], x + 1, s);

        A(array, number, sum, x + 1, s);

    }

   

    function output(array,number)

    {

        let s=new Set();

        A(array,number,0,0,s);

        let y=[...s]

        y.sort(function(a,b){return a-b;})

 

        for (let [key, value] of y.entries())

        console.log(value)

    }

   

    let array=[1,2];

    let number = array.length;

    output(array,number);