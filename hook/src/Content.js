import { memo } from 'react'

function Content({ onIncrese }) { // memo dùng toán tử === khi props thay đổi thì re-render

    console.log('re-render');

    return (
        <div>
            <button onClick={onIncrese}>Click me!</button>
        </div>
    )
}

export default memo(Content); // dùng memo để tránh re-render lại component không cần thiết
