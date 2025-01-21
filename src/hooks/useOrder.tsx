import { useState } from "react";
import { MenuItem, OrderItem } from "../types";

const useOrder = () => {
    const [order, setOrder] = useState<OrderItem[]>([]);
    const [tip, setTip] = useState(0);
    
    const addItem = ( item : MenuItem) => {

        const itemExist = order.find(orderItem => orderItem.id === item.id)

        if(itemExist) {
            const uptdatedOrder = order.map(orderItem => orderItem.id === item.id ? 
                {...orderItem, quantity: orderItem.quantity + 1} 
                : 
                orderItem
            )
            setOrder(uptdatedOrder)
        } else {
            const newItem = {...item, quantity: 1}
            setOrder([...order, newItem]);
        }
    }

    const removeItem = (id: MenuItem['id']) => {
        setOrder(order.filter(item => item.id !== id))
    }

    return {
        order,
        tip,
        setTip,
        addItem,
        removeItem
    };
}
 
export default useOrder;
