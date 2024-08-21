function CartItem({brand, name, price}) {
    return (
        <div>
            <div>
                {brand}
            </div>
            <div>
                {name}
            </div>
            <div>
                {price}
            </div>
        </div>
        
    );
}

export default CartItem;