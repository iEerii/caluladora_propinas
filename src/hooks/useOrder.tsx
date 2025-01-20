import { useState } from "react";
import { OrderItem } from "../types";

const useOrder = () => {
    const [order, setOrder] = useState<OrderItem[]>([]);
    
    const addItem = () => {
        console.log('Agregando...')
    }

    return {
        addItem
    };
}
 
export default useOrder;