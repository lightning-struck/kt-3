interface Logger {
	log(message: string): void
}

interface Position {
	x: number
	y: number
}

interface Angle {
	angle: number
}

class LogToConsole implements Logger {
	log(message: string): void {
		console.log(message)
	}
}

class Plotter {
	private logger: Logger

	constructor(logger: Logger) {
		this.logger = logger
	}

	drawLine(start: Position, end: Position, color: string): void {
		this.logger.log(
			`Чертим линию из (${start.x}, ${start.y}) в (${end.x}, ${end.y}) используя ${color} цвет.`
		)
	}

	movePenUp(): void {
		this.logger.log('Поднимаем каретку')
	}

	movePenDown(): void {
		this.logger.log('Опускаем каретку')
	}

	rotate(angle: Angle): void {
		const { angle: rotationAngle } = angle
		this.logger.log(`Поворачиваем на ${rotationAngle} градусов`)
	}
}

class LineColor {
	static BLACK = 'черный'
	static RED = 'красный'
	static GREEN = 'зелёный'
}

const logger = new LogToConsole()
const plotter = new Plotter(logger)

const startPosition: Position = { x: 0, y: 0 }
const endPosition: Position = { x: 100, y: 0 }
const color: string = LineColor.GREEN
plotter.drawLine(startPosition, endPosition, color)

plotter.movePenUp()
plotter.rotate({ angle: 120 })
plotter.movePenDown()

endPosition.x = 50
endPosition.y = 87
plotter.drawLine(startPosition, endPosition, color)

plotter.movePenUp()
plotter.rotate({ angle: 120 })
plotter.movePenDown()

endPosition.x = 0
endPosition.y = 0
plotter.drawLine(startPosition, endPosition, color)

plotter.movePenUp()
plotter.rotate({ angle: 120 })
plotter.movePenDown()
