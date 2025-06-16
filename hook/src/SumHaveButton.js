import React, { useState } from "react";

const SumHaveButton = () => {
    const [soA, setSoA] = useState('');
    const [soB, setSoB] = useState('');
    const [result, setResult] = useState(0);

    const handleSubmit = () => {
        setResult(Number(soA) + Number(soB));
    }

    return (
        <React.Fragment>
            <div className="form-group">
                <label>Nhập số A: </label>
                <input onChange={e => setSoA(e.target.value)} placeholder="Nhập số A" className="form-control" />
            </div>

            <div className="form-group">
                <label>Nhập số B: </label>
                <input onChange={e => setSoB(e.target.value)} placeholder="Nhập số B" className="form-control" />
            </div>

            <div className="form-group">
                <label>Tổng là : </label>
                <input disabled className="form-control" value={result} />
            </div>

            <button onClick={() => handleSubmit()}>Tính tổng</button>
        </React.Fragment>
    )
}

export default SumHaveButton;