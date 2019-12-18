/*
Alternative zur Class expression

class Account {
    get email() {
        return this._email;
    }

    set email(value) {
        this._email = value;
    }

    get password() {
        return this._password;
    }

    set password(value) {
        this._password = value;
    }
    constructor(email, password){
        this._email = email;
        this._password = password;
    }
}

class Address {
    get firstname() {
        return this._firstname;
    }

    set firstname(value) {
        this._firstname = value;
    }

    get lastname() {
        return this._lastname;
    }

    set lastname(value) {
        this._lastname = value;
    }

    get address() {
        return this._address;
    }

    set address(value) {
        this._address = value;
    }

    get city() {
        return this._city;
    }

    set city(value) {
        this._city = value;
    }

    get zip() {
        return this._zip;
    }

    set zip(value) {
        this._zip = value;
    }
    constructor(firstname, lastname, address, city, zip){
        this._firstname = firstname;
        this._lastname = lastname;
        this._address = address;
        this._city = city;
        this._zip = zip;
    }
}


class Order {
    // constructor(orderid, account, address){
    //     this.orderid = orderid;
    //     this._account = account;
    //     this._address = address;
    // }
    constructor(orderid, account){
        this.orderid = orderid;
        this._account = account;
    }

}

export function index(req,res) {
    let new_account = new Account(req.body.email.toLowerCase(),
        req.body.password.toLowerCase());

    let new_order = new Order(generateOrderId(), new_account);
    console.log(new_order);
    return res.json({message: "We received your order!"});
}
*/

    export function index(req, res) {
    const order ={
        orderid: generateOrderId(),
        email: req.body.email.toLowerCase(),
        password: req.body.password.toLowerCase(),
        address: req.body.address.toLowerCase(),
        city: req.body.city.toLowerCase(),
        zip: req.body.zip.toLowerCase(),
        numOfTickets: req.body.numOfTickets.toLowerCase()
    };
    //log on the server
    console.log(order);
    return res.json({message: "We received your order!", id: order.orderid});
}

function generateOrderId() {
    return Math.floor(Math.random()*100).toString()+'-'
        +Math.floor(Math.random()*100).toString();
}
