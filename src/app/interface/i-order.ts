export interface IOrder {
    customer_name: string,
    customer_phone: number,
    checkin: string,
    checkout: string,
    totalPrice: number,
    house_id: number,
    user_id: number,
    date?: any
}
