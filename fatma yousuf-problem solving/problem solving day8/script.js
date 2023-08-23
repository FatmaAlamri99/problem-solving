

class Node

{

    constructor()

    {

        this.data = 0;

        this.next = null;

    }

}


function reverseNumber(y, z)

{

    var temp = y;

    var count = 1;

    while (count < z)

    {

        temp = temp.next;

        count++;

    }

 

    var joint_point = temp.next;

    temp.next = null;

 

    var prev = null;

    var current = y;

    var next;

    while (current != null)

    {

        next = current.next;

        current.next = prev;

        prev = current;

        current = next;

    }

 

    y = prev;

    current = y;

 

    while (current.next != null)

    {

        current = current.next;

    }

 

    current.next = joint_point;

    return y;

}

 

 

function push( y, newData)

{

    var newNode = new Node();

    newNode.data = newData;

    newNode.next = (y);

    (y) = newNode;

    return y;

}

 

function printList( head)

{

    var temp = head;

    while (temp != null)

    {

        console.log(temp.data);

        temp = temp.next;

    }

}

 

var head = null;

head = push(head, 3);

head = push(head, 4);

head = push(head, 5);

head = push(head, 2);

head = push(head, 1);

 

var z = 2

head = reverseNumber(head, z)

 

printList(head)

console.log(head)