class Ray {
	constructor(theta, renderDistance) {
		this.dir = {
			x:renderDistance*Math.cos(-theta),
			y:renderDistance*Math.sin(-theta)
		}
	}
	draw(characterPos) {
		let T = [1]
		let t
		MAP.boundaries.forEach(boundary => {
			let d = (this.dir.x)*(boundary.y1-boundary.y2)-(boundary.x1-boundary.x2)*(this.dir.y)
			let u = ((this.dir.x)*(boundary.y1-characterPos.y)-(boundary.x1-characterPos.x)*(this.dir.y))/d
			if (u>=0 && u<=1) {
				t = ((boundary.x1-characterPos.x)*(boundary.y1-boundary.y2)-(boundary.x1-boundary.x2)*(boundary.y1-characterPos.y))/d
				// If in render distance
				if (t>=0 && t<=1)
					T.push(t)
			}
		})

		let scale = Math.min.apply(null, T)
		// Draw light beam
		context.beginPath()
		context.moveTo(characterPos.x, characterPos.y)
		context.lineTo(characterPos.x+scale*this.dir.x,characterPos.y+scale*this.dir.y)
		context.strokeStyle = "white"
		context.lineWidth = 1
		context.stroke()
	}
}

class Candle {
	constructor(lightBeams, renderDistance) {
		this.rays = []
		for (let i=0; i<lightBeams; i++)
			this.rays.push(new Ray(2*i*Math.PI/lightBeams, renderDistance))
	}
}