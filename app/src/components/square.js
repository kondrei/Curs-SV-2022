const Square = (props) => {

    const remove = () => {
        props.remove(props.id);
    };

    return (
        <div className="square" style={{
            backgroundImage: `linear-gradient(to right, ${props.color})`
        }}>
            <button onClick={remove}>X</button>
        </div>
    );
}

export default Square;