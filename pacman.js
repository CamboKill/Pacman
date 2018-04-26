function Pacman() {
	this.x = 48.5;
    this.y = 47.5;

    this.img = new Image();
	this.img.src = "sprite.png";

    this.column = 0;
	this.row = 0;
	this.frameWidth = 32;
	this.frameHeight = 32;
	this.counter = 0;
	this.delay = 1;


    this.back = function() {
		this.row = 3;
		this.counter++;
		if(this.counter > this.delay){
			this.counter = 0;
			this.column++;
			if(this.column > 6){
				this.column = 0;
			}
		}
	}
	this.forward = function(){
		this.row = 1;
		this.counter++;
		if(this.counter > this.delay){
			this.counter = 0;
			this.column++;
			if(this.column > 6){
				this.column = 0;
			}
		}
	}
	this.right = function(){
		this.row = 0;
		this.counter++;
		if(this.counter > this.delay){
			this.counter = 0;
			this.column++;
			if(this.column > 6){
				this.column = 0;
			}
		}
	}
	this.left = function(){
		this.row = 2;
		this.counter++;
		if(this.counter > this.delay){
			this.counter = 0;
			this.column++;
			if(this.column > 6){
				this.column = 0;
			}
		}
	}

    this.draw = function(ctx) {
    	ctx.drawImage(this.img, this.column*this.frameWidth, this.row*this.frameHeight, this.frameWidth, this.frameHeight, this.x-16.5, this.y-15.5, 32, 32)
    };
}