class Client {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

}

class Order {
  client: string;
  form_payment: string;
  discount: number;
  items: Item[];

  constructor(client: string, form_payment: string, discount: number, items: Item[] ) {
    this.client = client;
    this.form_payment = form_payment;
    this.discount = discount;
    this.items = items;
  }
  
  calculatesTotal(): number {
    const total = this.items.reduce((prev, curr) => curr.price + prev, 0)
    return total;
  }

  calculateDiscount() {
    const totalDiscount = this.calculatesTotal() - (this.calculatesTotal() * this.discount);
    return totalDiscount;
  }
}

class Item {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price; 
  }
}

const client1 = new Client('Jessica');
console.log(client1)

const item1 = new Item('Café', 2);
const item2 = new Item('Leite', 5);
const item3 = new Item('Bolacha', 3);

const order1 = new Order(client1.name, 'Card', 0.3, [item1, item2, item3]);
console.log(order1.calculateDiscount());