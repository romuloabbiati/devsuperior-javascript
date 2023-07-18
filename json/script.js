const obj1 = {
    "name": "Computer",
    "price": 50.9,
    "due-date": "2025-04-15"
}

const obj2 = {
    name: "Computer",
    price: 50.9,
    "due-date": "2025-04-15"
}

const obj3 = {
    id: 53,
    date: "2023-10-20",
    items: [
        {
            description: "Mobile",
            price: 699.99,
            quantity: 1
        },
        {
            description: "Mouse",
            price: 39.90,
            quantity: 2
        }
    ],
    client: {
        name: "Maria Red",
        email: "maria@gmail.com",
        active: true
    }
}

console.log(obj1);
console.log(obj2);
console.log(obj3);
console.log(obj3.date);
console.log(obj3.items[1]);
console.log(obj3.client.name);
console.log(obj3.client);

console.log(``);

const txt = `{"name": "Computer", "price": 50.9, "due-date": "2025-04-15"}`;

console.log(txt);
console.log(typeof txt);

const obj = JSON.parse(txt);
console.log(obj);

const text = JSON.stringify(obj);
console.log(text);