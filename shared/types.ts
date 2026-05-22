import {JSX} from "react";

export interface MenuItemTypes {
    name: string;
    link?: string;
    icon: JSX.Element;
    subMenu?: { name: string; link: string }[];
    brands?: string[];
    images?: string[];
}
export interface StoreReducerTypes {
    cart: {
        cartItems: [];
    };
}