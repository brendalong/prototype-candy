//  let Candy = function(name){
// 	this.name = name;
// 	this.sugar = true;
	
// };

// let Lollipop = function(name){
// 	this.name = name;
// 	this.hasStick = true;
// }

// Lollipop.prototype = new Candy("Lollipop");


// Candy.prototype.wrapper = function(value){
// 	this.singlewrap = value;
// 	return this.singlewrap;
// };

// let dumdum = new Lollipop("DumDum");
// console.log("dumdum suger:", dumdum.sugar, "hasStick:", dumdum.hasStick);


// let Mint = function(){
// 	this.chewy = false;
// };

// Mint.prototype = new Candy("Mint");

// let tictac = new Mint();

// //try without first
// tictac.wrapper(false);
// console.log("tictacwrapper", tictac.singlewrap);


///////////// Object Create /////////////////////////
var Candy = {
    showfeature: function () {
        console.log(this.feature + "!");
    },
    sugar: {value: true}
};

var Lollipop = Object.create(Candy, {
    name: { value: "Original Pops" },
    feature: { value: "taste great" },
    hasStick: {value: true},
    wrapper: { 
        value: function (val) {
        	this.singlewrap = val;
            return this.singlewrap;
        }
    }
});

Lollipop.showfeature();


var mint = Object.create(Candy, {
    flavor: { value: "wintergreen" },
    slogan: {
        value: function () {
            console.log(this.name + " freshens your breath!");
        }
    },
    chewey: {value: false}
});

var tictac = Object.create(mint, {
    name: { value: "Tic Tac" },
    feature: { value: "small and powerful" }
});

var dumdum = Object.create(Lollipop, {
	name: {value: "Dum Dum"},
	slogan: {
		value: function (){
			console.log(this.name, " the orginal pops");
		}
	}
})

var tootsipop = Object.create(Lollipop, {
	name: {value: "tootsipop"},
	slogan: {
		value: function (){
			console.log(this.name, " howmany licks to the center?");
		}
	}
})


dumdum.slogan();
dumdum.showfeature();
tootsipop.slogan();
