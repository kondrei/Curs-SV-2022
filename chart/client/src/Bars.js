const Bars = ({ value }) => {
    return (
        <div >
            <div className="bar" style={{ opacity: value / 100, height: `${Number(value) + 100}px`, transform: 'scaleY(1)' }}></div>
            <div className="text">{value}%</div>
        </div >
    )
}

export default Bars;