import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Product from './components/Product';
import { useEffect, useState } from 'react';
import products from './services/product';

function App() {

    const [totalCart, setTotalCart] = useState(0);
    const [qty, setQty] = useState(1);
    const [items, setItems] = useState(products);

    let cart = [];

    if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
    }

    const handleAddToCart = (id) => {
        for (let index = 0; index < cart.length; index++) {
            if (cart[index].id === id) {
                alert(`Sản phảm ${cart[index].name} đã tồn tại`)
                return
            }
        }

        const index = products.findIndex(item => item.id === id);

        const object = {
            ...products[index],
            qty: 1
        };

        cart.push(object);
        localStorage.setItem("cart", JSON.stringify(cart));
        cartTotal();
    }

    const handleDeleteCart = (id) => {
        const index = cart.findIndex(item => item.id === id);
        const newCart = cart;
        newCart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(newCart));
        cartTotal();
    }

    const handleChangeQty = (e, id) => {
        const newQty = Number(e.target.value);
        const updateQty = cart.map(item =>
            item.id === id ? { ...item, qty: newQty } : item
        );
        localStorage.setItem("cart", JSON.stringify(updateQty));
        e.target.value = newQty;
        setQty(newQty);
    }

    // Hàm tính tổng số lượng giỏ hàng
    function cartTotal() {
        let total = 0;
        for (let i = 0; i < cart.length; i++) {
            total += Number(cart[i].qty)
        }

        setTotalCart(total);
    }

    // Ham search
    const handleSearchForm = (search) => {
        if(search !== '') {
            const products = products.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
            // setItems(products);
            console.log(products);
        }
    }

    useEffect(() => {
        cartTotal();
        // eslint-disable-next-line
    }, [qty])

    return (
        <>
            <Header totalCart={totalCart} handleDeleteCart={handleDeleteCart} handleChangeQty={handleChangeQty} handleSearchForm={handleSearchForm} />

            <div className="container mt-2 mb-2">
                <div className="row">

                    {
                        products.map(item =>
                            <div key={item.id} className="col-md-3 mt-4">
                                <Product item={item} handleAddToCart={handleAddToCart} />
                            </div>
                        )
                    }

                </div>
            </div>

            <Footer />
        </>
    );
}

export default App;
