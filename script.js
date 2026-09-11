//complete this code
class Rectangle {
	         constructor(width, height) {
				 this.width = width;
				 this._height = height;
			 }
	    
            get width() {
				return this._width;
				
			}

	         get height() {
				 return this._height;
			 }

	          get area() {
				   return this._width * this._height;
			  }

	           class square extends rectangale {
				   constructor(side) {
				        super(side, side);
				   
				   }

	                getperimeter() {
						return 4 * this._width;
					}
					
			   }
       

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
