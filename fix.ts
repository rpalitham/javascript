class Shape {
    getArea() { }
}


class RectangleShape extends Shape {
    height: number;
    width: number;

    constructor(width: number, height: number) {
        super();
        this.height = height;
        this.width = width;
    }

    setWidth(width: number): void {
        this.width = width;
    }

    setHeight(height: number): void {
        this.height = height
    }

    getArea(): number {
        return this.height * this.width
    }
}

class SquareShape extends Shape {
    height: number;
    width: number;

    constructor(width: number, height: number) {
        super();
        this.height = height;
        this.width = width;
    }

    public setHeight(height: number): void {
        this.height = height;
        this.width = height;
    }

    public setWidth(width: number): void {
        this.height = width;
        this.width = width
    }
}

function increaseRectangleShapeWidth(rectangle: Rectangle) {
    rectangle.setWidth(rectangle.width + 1)
}


const rectangleShape1 = new Rectangle(5, 4);
const rectangleShape2 = new Rectangle(2, 2);
const squareShape = new SquareShape(2, 2);

increaseRectangleWidth(rectangle2);
// increaseRectangleWidth(squareShape) // This will throw a warning because we cannot pass square object to a function which accepts Rectangle.


