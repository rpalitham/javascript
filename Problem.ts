/**
 * The Liskov substitution principle, helps to ensure that modifying one aspect of our system does not affect other elements negatively.
 * 
 * According to the Liskov substitution principle, subclasses should be interchangeable with their base classes. 
 * This indicates that, assuming that class B is a subclass of class A, we should be able to present an object of class B to any
 * method that expects an object of type A without worrying that the method may produce strange results.
 */

class Rectangle {
    public height: number;
    public width: number;

    public constructor(width: number, height: number) {
        this.height = height;
        this.width = width;
    }

    public setWidth(width: number): void {
        this.width = width
    }

    public setHeight(height: number): void {
        this.height = height
    }

    public getArea(): number {
        return this.width * this.height
    }
}

class Sqaure extends Rectangle {
    public setWidth(width:number): void{
        this.width = width;
        this.height = width;
    }

    public setHeight(height:number): void{
        this.width = height;
        this.height = height;
    }

}


// This function should be working only to objects of rectangle, hence square is also a rectangle, 
// so increasing width of a square causing increase the height as well. 
function increaseRectangleWidth(rectangle: Rectangle){
    rectangle.setWidth(rectangle.width + 1)
}

/**
 * The above function is breaking the Liskov substitution principle, essentially the problem is that our subclass of square is not actually
 * compatible with the every function that we're using for our rectangle.
 * Our Square cannot be substituted in place of rectangle, so now we are failing the liskov substitution Principle.
 */

const rectangle1 = new Rectangle(5, 4);
const rectangle2 = new Rectangle(3, 3);
const square = new Sqaure(3, 3);

increaseRectangleWidth(rectangle2); // (4, 3) -> 12
increaseRectangleWidth(square); // (4, 4) -> 16 

/**
 * According to the above classes every sqaure is a rectangle.
 * According to Liskov Substitution principle, rectangle2 and square should return the same output.
 * But if we use increseRectangleWidth function that is only intended to rectangle by passing square and rectangle it should return similar output. 
 * But In square class we were increasing height along with width. So the ouput of square class is different as it is breaking the liskov substitution principle.
 */

console.log("Area of a rectangle1 is ", rectangle1.getArea());
console.log("Area of a rectangle2 is ", rectangle2.getArea());
console.log("Area of a Square is ", square.getArea())