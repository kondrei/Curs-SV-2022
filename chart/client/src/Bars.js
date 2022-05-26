const Bars = ({ name, value }) => {
    return (
        <div >
            <div className="bar" style={{ opacity: value / 100, height: `${value}px` }}></div>
            <div className="text">{value}%</div>
        </div>
    )
}

export default Bars;