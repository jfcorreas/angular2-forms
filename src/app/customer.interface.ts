// customer.interface.ts

export interface Customer {
    name: string; // required field with minimum 5 characters
    addresses: Address[]; // user can have one or more addresses
    paymentMethod: {
        type: string; // must be either 'bank' or 'card'
        card: {
            cardNo: string; // must be visa, master, amex
            cardHolder: string;
            expiry: string; // must be format MM/YY
        },
        bank: {
            accountNo: string;
            accountHolder: string;
            routingNo: string;
        }
    }
}

export interface Address {
    street: string;  // required field
    postcode: string;
}
