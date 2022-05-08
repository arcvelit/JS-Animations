class Boundary {
	constructor(P1, P2) {
		this.x1 = P1.x 
		this.y1 = P1.y
		this.x2 = P2.x
		this.y2 = P2.y
	}
	draw() {
		context.beginPath()
		context.moveTo(this.x1, this.y1)
		context.lineTo(this.x2, this.y2)
		context.strokeStyle = "white"
		context.lineWidth = 5
		context.stroke()
	}
}

class GameMap {
	constructor() {
		this.boundaries = []
	}
	addWall(coords, width, height) {
		this.boundaries.push(new Boundary({x:coords.x,y:coords.y},{x:coords.x+width,y:coords.y}))
		this.boundaries.push(new Boundary({x:coords.x,y:coords.y},{x:coords.x,y:coords.y+height}))
		this.boundaries.push(new Boundary({x:coords.x+width,y:coords.y},{x:coords.x+width,y:coords.y+height}))
		this.boundaries.push(new Boundary({x:coords.x,y:coords.y+height},{x:coords.x+width,y:coords.y+height}))
	}
}

