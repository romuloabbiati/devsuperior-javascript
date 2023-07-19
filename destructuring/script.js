const obj = {
    id: 53,
    date: "2021-10-20",
    items: [
        {
            description: "Celular",
            price: 1499.99,
            quantity: 1
        },
        {
            description: "Mouse",
            price: 100.0,
            quantity: 2
        }
    ],
    client: {
        name: "Maria Red",
        email: "maria@gmail.com",
        active: true
    }
}

// OBJECT DESTRUCTURING

const { id, client } = obj;

console.log(id);
console.log(client);

// function subtotal(item) {
//     return item.price * item.quantity;
// }

function subtotal({price, quantity}) {
    return price * quantity;
}

console.log(subtotal(obj.items[1]));

function total({items}) {
    let sum = 0;
    items.forEach(item => {
        sum += item.price * item.quantity;
    });
    return sum;
}

console.log(total(obj));

// ARRAY DESTRUCTURING

const [item1, item2] = obj.items;
console.log(item1);
console.log(item2);