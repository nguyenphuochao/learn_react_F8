import React, { use, useState } from 'react'
import Product from '../components/Product'

const products = [
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
]

function Home() {

    const handleAddToCart = (id) => {
        let cart = [];

        if (localStorage.getItem('cart')) {
            cart = JSON.parse(localStorage.getItem('cart'));
        }

        // update qty cart
        for (var i = 0; i < cart.length; i++) {
            if (cart[i].id === id) {
                cart[i].qty += 1;
                localStorage.setItem('cart', JSON.stringify(cart));
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
    }

    return (
        <div className="container mt-2 mb-2">
            <div className="row">
                {
                    products.map(product =>
                        <div key={product.id} className="col-md-3 mt-4">
                            <Product product={product} handleAddToCart={handleAddToCart} />
                        </div>
                    )
                }

            </div>
        </div>
    )
}

export default Home
