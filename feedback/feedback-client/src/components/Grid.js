import Note from "./Note";

const Grid = ({ grid, get_element }) => {

    const selectElement = (e) => {
        e.stopPropagation();
        if (e.target.className === 'note selected') {
            e.target.classList.remove('selected');
            get_element('');
        } else {
            get_element(e.target.id);
            const notes = document.getElementsByClassName('note');
            for (let i = 0; i < notes.length; i++) {
                notes[i].classList.remove('selected');
            }
            e.target.classList.add('selected');
        }
    };
    let feedbackElements;
    let style;
    if (grid) {
        feedbackElements = grid.map((row, indexX) => {
            return (
                row.map((item, indexY) => {
                    return (
                        <Note key={`${indexX}${indexY}`}
                            feedback={item.feedback}
                            id={item.id}
                            color={item.color}
                            onClick={selectElement}
                        />
                    )
                }))
        });

        style = { gridTemplateColumns: `repeat(${grid.length}, 1fr)` };
    }

    return (
        <div className="grid"
            style={style}>
            {feedbackElements}

        </div>
    );
};

export default Grid;