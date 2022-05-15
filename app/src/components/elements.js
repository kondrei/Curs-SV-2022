import { useEffect, useState } from 'react'
import Square from './square';
import { v4 as uuidv4 } from 'uuid';

const Elements = () => {

    const [elements, setElements] = useState([]);
    const [color, setColor] = useState('#' + (Math.random().toString(16) + "000000").substring(2, 8));
    const [gradient, setGradient] = useState([]);

    const changeColor = (e) => {
        setColor(e.target.value);
    }

    const addElements = () => {
        const neweElement = [...elements]
        neweElement.push({
            id: uuidv4(),
            color: color
        });
        setElements(neweElement);
    }

    useEffect(() => {
        setGradient(elements.map(element => element.color));
        setColor('#' + (Math.random().toString(16) + "000000").substring(2, 8));
    }, [elements]);

    const remove = (id) => {
        const remainingElements = elements.filter((element) => element.id !== id);
        setElements(remainingElements);
    }

    return (
        <div className='card elements'>
            <div className="controls">
                <input type="color" value={color} onChange={changeColor} />
                <input type="button" value="Add" onClick={addElements} />
            </div>
            {elements.map((element) => (
                <Square key={element.id} id={element.id} color={gradient} remove={remove} />
            ))}
        </div>
    );
}

export default Elements;