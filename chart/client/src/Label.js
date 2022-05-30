const Label = ({ name, value }) => {
    return (
        <div className="label">
            <div className="icon" style={{ opacity: value / 100 }}></div>
            <div className="text"><strong>{name}</strong>: {value}%</div>
        </div>
    )
}

export default Label;