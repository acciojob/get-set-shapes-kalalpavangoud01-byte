//complete this code
class Rectangle {
	         constructor(width, height) {
				 this._width = width;
				 this._height = height;
			 }
	    
            get width() {
				return this._width;
				
			}

	         get height() {
				 return this._height;
			 }

	          getarea() {
				   return this.width * this.height;
			  }

	           class Square extends Rectangale {
				   constructor(side) {
				        super(side, side);
				   
				   }

	                getPerimeter() {
						return 4 * this.width;
					}
					
			   }

               window.Rectangle = Rectangle;
               window.Square = Square;
       

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
