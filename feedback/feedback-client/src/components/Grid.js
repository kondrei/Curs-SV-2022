import Note from "./Note";

const Grid = (props) => {

    // console.log(props.grid[1][1]);


    // grid.map((element, index) => {
    //     console.log(element)
    // })
    return (
        <div className="grid">
            <Note />
            <Note />
            <Note />
            <Note />
            <Note />
        </div>
    )
}

export default Grid;