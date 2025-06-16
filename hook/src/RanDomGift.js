import { useState } from "react";

const gifts = ["Iphone 11", "Iphone12", "Iphone 13", "Iphone 14"];

function RanDomGift() {
    const [gift, setGift] = useState();

    const handleRandomGift = () => {
        const index = Math.floor(Math.random() * gifts.length);
        setGift(gifts[index]);
    }

    return (
        <div>
            <h1>{gift || "Chưa có phần thưởng"}</h1>
            <button onClick={handleRandomGift}>Lấy thưởng</button>
        </div>
    )
}

export default RanDomGift