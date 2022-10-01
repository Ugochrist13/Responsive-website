function House(){
    this.inside = function(){
        console.log("I am inside");
    }
    this.outside = function(){
        console.log("I am outside");
    }
}

House.prototype.name ="Christian"

const house = new House()
console.log(house)
console.log(house.inside())
console.log(house.outside())
console.log(house.name)

