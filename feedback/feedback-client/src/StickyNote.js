class StickyNotes {
    constructor() {
        this.size = 3;
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
        return `#${Math.floor(Math.random() * 16777215).toString(16)}`
    }

    listGrid() {
        for (let i = 0; i < this.size; i++) {
            console.log(i, this.grid[i]);
        }
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
}

let grid = new StickyNotes();
grid.updateNote(0, 2, 'ceva frumos');
grid.updateNote(0, 0, 'primul din lista');
grid.updateNote(2, 2, 'ultim');
grid.listGrid();