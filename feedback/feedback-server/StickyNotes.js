class StickyNotes {
    constructor(size) {
        this.size = size;
        this.grid = [];
        this.createGrid(this.size);
    }

    createGrid() {
        for (let i = 0; i < this.size; i++) {
            this.grid.push([]);
            this.grid[i].push(new Array(this.size));
            for (let j = 0; j < this.size; j++) {
                this.grid[i][j] = {};
                this.grid[i][j].id = `${i}${j}`;
            }
        }
    }

    generateColor() {
        return "hsl(" + 360 * Math.random() + ',' +
            (25 + 70 * Math.random()) + '%,' + 
            (85 + 10 * Math.random()) + '%)';
    }

    updateNote(x, y, feedback) {
        for (let i = 0; i < this.size; i++) {
            for (let j = 0; j < this.size; j++) {
                if (i === x && y === j) {
                    this.grid[i][j].feedback = feedback;
                    this.grid[i][j].color = this.generateColor();
                }
            }
        }
    }

    get notes() {


        return this.grid;
    }
}

export default StickyNotes;