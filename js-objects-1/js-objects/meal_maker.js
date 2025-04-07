const menu = {
    _meal: '',
    _price: 0,
    set meal(mealToCheck){
        if(typeof mealToCheck === 'string'){
            this._meal = mealToCheck;
        }
    },
    set price(priceToCheck){
        if(typeof priceToCheck === 'number'){
            this._price = priceToCheck;
        }
    },
    get todaysSpecial(){
        if ((this._meal && this._price)){
            console.log(`Todays special is ${this._meal} for $${this._price}`);
        }
        else {
            console.log("Meal or price was not set correctly");
        }
    }
    
};

menu.meal = 'chocobanana';
menu.price = 15;
menu.todaysSpecial;
console.log(menu);