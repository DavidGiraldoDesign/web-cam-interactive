class Point {

    x = Number;
    y = Number;
    diameter = Number;
    h = 100;
    s = 100;
    b = 100;

    constructor(x, y, diameter) {
        this.h=100;
        this.s=100;
        this.b=100;

        this.x = x;
        this.y = y;

        this.diameter = diameter;
    };

    render() {
        noStroke();
        fill(this.h,this.s,this.b);
        ellipse(this.x, this.y, this.diameter, this.diameter);
    };

    getX() {
        return this.x;
    };


    getY() {
        return this.y;
    };
    getH() {
        return this.h;
    };

    setColor(hsbArray){
        this.h=hsbArray[0];
        this.s=hsbArray[1];
        this.b=hsbArray[2];
    }
};