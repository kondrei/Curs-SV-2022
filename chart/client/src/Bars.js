const Bars = ({ name, value }) => {
    return (
        <div>
            <div className="bar tooltip" style={{ background: `rgba(0,0,0,${value / 100})`, height: `${Number(value) + 100}px`, transform: 'scaleY(1)' }}>
                <span className="tooltiptext">{name}</span>
            </div>
            <div className="text">{value}%</div>
        </div >
    )
}

export default Bars;