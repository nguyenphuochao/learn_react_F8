import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Product from './components/Product';
import { useState } from 'react';
import Cart from './components/Cart';


function App() {
    // data from API
    const fakeData = [
        {
            id: 1,
            name: "iPhone X",
            price: 2500000,
            image: "https://cdn.tgdd.vn/Products/Images/42/329149/iphone-16-pro-max-sa-mac-thumb-1-600x600.jpg",
            desc: "Thông tin sản phẩm"
        },
        {
            id: 2,
            name: "iPhone 11",
            price: 3500000,
            image: "https://cdn.tgdd.vn/Products/Images/42/329143/iphone-16-pro-titan-trang.png",
            desc: "Thông tin sản phẩm"
        },
        {
            id: 3,
            name: "iPhone 12",
            price: 4500000,
            image: "https://cdn.tgdd.vn/Products/Images/42/329135/iphone-16-pink-600x600.png",
            desc: "Thông tin sản phẩm"
        },
        {
            id: 4,
            name: "iPhone 13",
            price: 5500000,
            image: "https://cdn.tgdd.vn/Products/Images/42/240259/iPhone-14-plus-thumb-xanh-600x600.jpg",
            desc: "Thông tin sản phẩm"
        },
        {
            id: 5,
            name: "iPhone 14",
            price: 6500000,
            image: "https://cdn.tgdd.vn/Products/Images/42/303891/iphone-15-plus-vang-126gb-thumb-600x600.jpg",
            desc: "Thông tin sản phẩm"
        },
        {
            id: 6,
            name: "iPhone 15",
            price: 7500000,
            image: "https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-xanh-la-new-2-600x600.jpg",
            desc: "Thông tin sản phẩm"
        },
        {
            id: 7,
            name: "iPhone 16",
            price: 8500000,
            image: "https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-xanh-la-new-2-600x600.jpg",
            desc: "Thông tin sản phẩm"
        },
        {
            id: 8,
            name: "iPhone 17",
            price: 9500000,
            image: "https://cdn.tgdd.vn/Products/Images/42/334864/iphone-16e-white-thumb-600x600.jpg",
            desc: "Thông tin sản phẩm"
        }
    ];

    let cart = [];

    if(localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
    }

    const handleAddToCart = (index) => {
        if(cart[index] == fakeData[index]) {
            alert('Sản phẩm ' + cart[index].name + ' đã tồn tại')
            return
        }
        cart.push(fakeData[index]);
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    return (
        <>
            <Header />

            <div className="container mt-2 mb-2">
                <div className="row">

                    {
                        fakeData.map((item, index) =>
                            <div key={item.id} className="col-md-3 mt-4">
                                <Product item={item} index={index} handleAddToCart={handleAddToCart} />
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
