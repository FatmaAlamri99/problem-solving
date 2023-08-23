
function Leaders( arr, size)

{

    for (let i = 0; i < size; i++)

    {
        let z;

        for (z = i+1; z < size; z++)

        {
            if (arr[i] <=arr[z])
            break;

            
        }   
        if (z == size) 

            console.log(arr[i] + " ");

  }

}


        let arr = [ 16, 17, 4, 3, 5, 2 ];

        let n = arr.length;

 
        Leaders(arr, n);