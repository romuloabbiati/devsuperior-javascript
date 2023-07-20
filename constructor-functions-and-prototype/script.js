const p1 = {
    name: "Computer",
    price: 1500.00,
    quantity: 2
}

const Product = function(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
}

Product.prototype.total = function() {
    return this.price * this.quantity;
}

Product.prototype.add = function(amount) {
    this.quantity += amount;
}

Product.prototype.remove = function(amount) {
    if(this.quantity >= amount) {
        return this.quantity -= amount;
    }
}

Product.prototype.label = function() {
    return "Info: " + this.name + ", " + this.price.toFixed(2);
}

const p2 = new Product('Monitor', 200.00, 10);

const p3 = new Product('Mouse', 20.00, 20);