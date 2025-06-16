import React, { useEffect, useState } from "react";

const SumNoButton = () => {
    const [soA, setSoA] = useState('');
    const [soB, setSoB] = useState('');
    const [result, setResult] = useState(0);

    useEffect(() => {
        setResult(Number(soA) + Number(soB));
    }, [soA, soB])

    return (
        <React.Fragment>
            <div className="form-group">
                <label>Nhập số A: </label>
                <input name="soA" onChange={e => setSoA(e.target.value)} placeholder="Nhập số A" className="form-control" />
            </div>

            <div className="form-group">
                <label>Nhập số B: </label>
                <input name="soB" onChange={e => setSoB(e.target.value)} placeholder="Nhập số B" className="form-control" />
            </div>

            <div className="form-group">
                <label>Tổng là : </label>
                <input disabled className="form-control" value={result} />
            </div>
        </React.Fragment>
    )
}

export default SumNoButton;