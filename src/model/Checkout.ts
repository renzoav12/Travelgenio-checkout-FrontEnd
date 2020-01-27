import { RoomGuest } from "../components/Checkout/Rooms/Room/Room";
import { ProductProps } from "../components/Checkout/Product/Product";

export interface CheckoutError {
    exists: boolean;
    code?: string;
    message?: string
}

export interface Checkout {
    guests: Array<RoomGuest>;
    productId: string;
    product: ProductProps;
    loading: boolean;
    roomsLoading: boolean;
    error: CheckoutError;
}
