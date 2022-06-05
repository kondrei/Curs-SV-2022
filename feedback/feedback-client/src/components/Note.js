const Note = ({ feedback, id, color, ...onClick }) => {
    return (
        <div className="note"
            id={id}
            style={{ backgroundColor: color }}
            {...onClick}>
            <span>Id: {id}</span>
            {feedback ? feedback : "No feedback, click to add one!"}
        </div>
    )
}

export default Note;