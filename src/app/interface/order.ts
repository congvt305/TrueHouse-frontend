export interface Order {
    id: number;
    customer_name: string;
    customer_phone: string;
    checkin?: string;
    checkout?: string;
    status?: string;
    house_id: string;
    created_at?:string
}
