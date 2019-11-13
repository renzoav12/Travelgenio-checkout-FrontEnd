import { RoomGuest } from "../components/Checkout/Rooms/Room/Room";
import { Order } from "../components/Checkout/Checkout";

export interface CheckoutError {
    exists: boolean;
    code?: string;
    message?: string
}

export interface Checkout {
    guests: Array<RoomGuest>;
    order: Order;
    loading: boolean;
    error: CheckoutError;
}
