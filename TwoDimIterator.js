var TwoDimMove = {
    done: 0,
    x: 1,
    y: 2,
    both: 3,
};

function twoDimIterator(xCount, yCount) {
    var xWeight = Math.abs(xCount) + 1;
    var yWeight = Math.abs(yCount) + 1;
    return {
        x:0, y:0,
        xWeight: xWeight, yWeight: yWeight,
        xNextWeightedValue: yWeight,
        yNextWeightedValue: xWeight,
        finalWeightedValue: xWeight * yWeight,
        xIncrement: (xCount >= 0) ? 1 : -1,
        yIncrement: (yCount >= 0) ? 1 : -1,
        next: function next() {
            if(this.xNextWeightedValue < this.yNextWeightedValue) {
                this.x += this.xIncrement;
                this.xNextWeightedValue += this.yWeight;
                return TwoDimMove.x;
            }
            if(this.xNextWeightedValue > this.yNextWeightedValue) {
                this.y += this.yIncrement;
                this.yNextWeightedValue += this.xWeight;
                return TwoDimMove.y;
            }
            if(this.xNextWeightedValue == this.finalWeightedValue) {
                return TwoDimMove.done;
            }

            this.x += this.xIncrement;
            this.y += this.yIncrement;
            this.xNextWeightedValue += this.yWeight;
            this.yNextWeightedValue += this.xWeight;
            return TwoDimMove.both;
        }
    };
}
/*
TODO: implement the tests in another file
function show(x,y) {
    var iterator = twoDimIterator(x,y);
    while (iterator.next() != 0) {
        console.log("[" + x + "," + y + "] " + iterator.x + "," + iterator.y);
    }
    console.log("Case DONE!!!!");
}
show(1,2);
show(1, 3);
show(1, 4);
show(1, 5);
show(5,8);
show(-1,1);
show(-1,2);
*/
