export class Player {
    constructor(name, socketId) {
        this.name = name
        this.tour = 0
        this.socketId = socketId
    }

    tour () {
        this.tour = this.tour + 1
    }
}