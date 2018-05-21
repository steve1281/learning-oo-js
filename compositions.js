function mixin(target, ...sources)
{
    Object.assign(target, ...sources);
}

const canEat = {
    eat: function() {
        this.hunger--;
        console.log("eating")
    }
};
const canWalk = {
    walk: function() {
        console.log("walking")
    }
};
const canSwim = {
    swim: function() {
        console.log("swimming");
    }
}

function Person2() {

}
mixin(Person2.prototype, canEat, canWalk);

function GoldFish() {

}
mixin(GoldFish.prototype, canEat, canSwim);

const person2 = new Person2();
console.log(person2);
const goldfish = new GoldFish();
console.log(goldfish);
