export type Orders={
    id?:number,
    customerName?:string,
    email?:string,
    phone?:number,
    itemName?:string,
    orderDate?:Date,
    price?:number,
    quantity?:number,
    address?:{
        houseNo?:string,
        streetName?:string,
        zipCode?:number
    }
}