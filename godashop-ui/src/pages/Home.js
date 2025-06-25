import { useContext, useEffect, useState } from 'react'
import Product from '../components/Product'
import { CartContext } from '../context/CartContext';
import products from '../services/products';

function Home() {
    const [goToTop, setGoToTop] = useState(false);

    const context = useContext(CartContext);

    const handleAddToCart = (id) => {
        context.setTotalCart(context.totalCart + 1);

        let cart = [];

        if (localStorage.getItem('cart')) {
            cart = JSON.parse(localStorage.getItem('cart'));
        }

        // update qty cart
        for (var i = 0; i < cart.length; i++) {
            if (cart[i].id === id) {
                cart[i].qty += 1;
                localStorage.setItem('cart', JSON.stringify(cart));
                context.setCartItems(cart);
                context.setTotal(() => {
                    const total = cart.reduce((total, product) => total + product.price * product.qty, 0);
                    return total;
                })
                return;
            }
        }

        // add new cart
        const index = products.findIndex(product => product.id === id);

        const objectProduct = {
            id: products[index].id,
            name: products[index].name,
            price: products[index].price,
            image: products[index].image,
            qty: 1
        }

        cart.push(objectProduct);
        localStorage.setItem('cart', JSON.stringify(cart));
        context.setCartItems(cart);
        context.setTotal(() => {
            const total = cart.reduce((total, product) => total + product.price * product.qty, 0);
            return total
        })
    }

    useEffect(() => {
        function handleScroll() {
            setGoToTop(window.scrollY > 200);
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div className="mt-2 mb-4">
            <div className="row">
                {
                    products.map(product =>
                        <div key={product.id} className="col-md-3 col-sm-6 col-6 mt-4">
                            <Product product={product} handleAddToCart={handleAddToCart} />
                        </div>
                    )
                }

            </div>

            <button style={{
                position: 'fixed',
                bottom: '20px',
                right: '20px',
                display: goToTop ? 'block' : 'none'
            }}>Go to top</button>
        </div>
    )
}

export default Home
