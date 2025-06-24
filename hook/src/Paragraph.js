import React, { useContext } from 'react'
import { ThemeContext } from './UseContextHook';

function Paragraph() {
    const context = useContext(ThemeContext);

    return (
        <div className={context.theme}>
            Ipsum is simply dummy text of the printing and typesetting industry.
            <br />
            Ipsum has been the industry's standard dummy text ever since the 1500s
        </div>
    )
}

export default Paragraph
