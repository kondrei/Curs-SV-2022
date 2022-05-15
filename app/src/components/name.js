import { useState } from 'react';
const Name = () => {
    const [color, setColor] = useState(false);

    const changeName = () => {
        setColor(!color);
    }

    return (
        <div className="card">
            <h2 className={color ? 'name' : ''} onClick={changeName}>Andrei Dan</h2>
            <br />
            {color && <p className='mesaj'>Numele este colorat</p>}
        </div>
    );
}

export default Name;