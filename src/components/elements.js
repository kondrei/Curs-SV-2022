import { useEffect, useState } from "react";
import Square from "./square";
import { v4 as uuidv4 } from "uuid";

const Elements = () => {
  const randomColor = () =>
    "#" + (Math.random().toString(16) + "000000").substring(2, 8);
  const [elements, setElements] = useState([]);
  const [color, setColor] = useState(randomColor());

  const changeColor = (e) => {
    setColor(e.target.value);
  };

  const addElements = () => {
    const newElement = [...elements];
    newElement.push({
      id: uuidv4(),
      color:
        elements.length === 0
          ? color
          : `${elements[elements.length - 1].color} , ${color}`
    });

    setElements(newElement);
  };

  useEffect(() => {
    setColor(randomColor());
  }, [elements]);

  const remove = (id) => {
    const remainingElements = elements.filter((element) => element.id !== id);
    setElements(remainingElements);
  };

  return (
    <div className="card elements">
      <div className="controls">
        <input type="color" value={color} onChange={changeColor} />
        <input type="button" value="Add" onClick={addElements} />
      </div>
      {elements.map((element) => (
        <Square
          key={element.id}
          id={element.id}
          color={element.color}
          remove={remove}
        />
      ))}
    </div>
  );
};

export default Elements;
