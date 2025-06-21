import { useMemo, useRef, useState } from 'react'

function UseMemoHook() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [products, setProducts] = useState([]);

    const nameRef = useRef();

    const handleSubmit = () => {
        setProducts([...products, {
            name,
            price: +price
        }]);

        // reset input
        setName('');
        setPrice('');

        // focus input
        nameRef.current.focus();
    }

    // dùng useMemo khi nào products thay đổi mới tính toán lại
    const total = useMemo(() => {
        console.log('Tính toán lại..');
        const result = products.reduce((total, product) => total + product.price, 0);
        return result;
    }, [products]);

    return (
        <div>
            <input
                ref={nameRef} // dùng ref để focus
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Enter name..." />
            <br />

            <input
                value={price}
                onChange={e => setPrice(e.target.value)}
                placeholder="Enter price..." />
            <br />

            <button onClick={handleSubmit}>Add</button>
            <br />

            Total : {total}

            <ul>
                {
                    products.map((product, index) => (
                        <li key={index}>{product.name} - {product.price}</li>
                    ))
                }
            </ul>

        </div>
    )
}

export default UseMemoHook
