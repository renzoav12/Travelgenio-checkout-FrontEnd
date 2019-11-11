import { RoomGuest } from "../components/Checkout/Guest/Guest";

export interface CheckoutError {
    exists: boolean;
    code?: string;
    message?: string
}

export interface Checkout {
    guests: Array<RoomGuest>;
    loading: boolean;
    error: CheckoutError;
}
