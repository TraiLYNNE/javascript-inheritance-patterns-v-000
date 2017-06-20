// simple shape initialization values
function Shape(sides, x, y) {
    this.sides = sides;
    this.x = x;
    this.y = y;
}

// Quad
function Quadrilateral(x, y, sideOneLength, sideTwoLength, sideThreeLength, sideFourLength) {
    // call the parent class 
    Shape.call(this, 4, x, y);
    
    // set quad values
    this.sideOneLength = sideOneLength;
    this.sideTwoLength = sideTwoLength;
    this.sideThreeLength = sideThreeLength;
    this.sideFourLength = sideFourLength;
}

// set Quad prototype
Quadrilateral.prototype = Object.create(Shape.prototype);

// set Quad constructor
Quadrilateral.prototype.constructor = Quadrilateral;

// Extend Quad Behavior
Quadrilateral.prototype.perimeter = function() {
    return this.sideOneLength + this.sideTwoLength + this.sideThreeLength + this.sideFourLength;
};

//Rect
function Rectangle(x, y, width, height) {
    // call the parent class
    Quadrilateral.call(this, x, y, width, height, width, height);
    
    // set rectangle values
    this.width = width;
    this.height = height;
}

// set Rectangle prototype
Rectangle.prototype = Object.create(Quadrilateral.prototype);

// set Rectangle constructor
Rectangle.prototype.constructor = Rectangle;


// extend rectangle behavior
Rectangle.prototype.area = function() {
    return this.width * this.height;
};

// Square
function Square(x, y, length) {
    // call parent class
    Rectangle.call(this, x, y, length, length);
    
    // set square properties
    this.length = length;
}

// set Square prototype
Square.prototype = Object.create(Rectangle.prototype);

// set Square constructor
Square.square.constructor = Square;

// instantiate objects
var rect = new Rectangle(1, 0, 5, 3);
var shape = new Shape(3, 2, 2);
var sqr = new Square(1, 1, 3);


// extend shape behavior
Shape.prototype.move = function() {
    this.x = x;
    this.y = y;
};

Shape.prototype.position = function() {
    return(this.x + ", " + this.y);
};

// iterate over all properties
for (var prop in rect) {
    console.log("rect." + prop + " = " + rect[prop]);
}

// iterate over unique instance properties
for (var prop in rect) {
    if (rect.hasOwnProperty(prop)) {
        console.log("rect." + prop + " = " + rect[prop]);
    }
}

// Make calls
sqr.length; //defined in square
sqr.width; //inherited from Rectangle
sqr.sideOneLength; // inherited from Quad
sqr.position(); // inherited from Shape
sqr.move(2, 3); // inherited from Shape
sqr.position(); 
sqr.area(); // inherited from Rectangle
sqr.perimeter(); //inherited from Quad