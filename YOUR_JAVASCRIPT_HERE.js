// Write your JS here

const hero = {

    name: "",
    heroic: true,
    inventory: [],
    health: 10,
    weapon: {

            type: "stone",
            damage: 2
    }

};

function rest(userHero){

    if (userHero.health === 10){

        alert("Your health level is already at 10!");

    }else{

        userHero.health = 10;
        hero.health = 10;

        return userHero;

    }
    

}

const addWeapon = {

    type: "dagger", 
    damage: 2

};

function pickUpItem(userHero, addWeapon){

    userHero.inventory.push(addWeapon);

}

function equipWeapon(userHero){

   if(userHero.inventory.length === 0){

     //alert("nothing in the inventory");

   }else{

    userHero.weapon = userHero.inventory[0];

   }

}

//restore health as inn img has been clicked!

const healthRest = document.querySelector("#inn");

healthRest.addEventListener("click", (event)=> {
    
    event.preventDefault();
    rest(hero);

});

//add dagger to inventory

const addDagger = document.querySelector("#dagger");
console.log("addDagger", addDagger);

addDagger.addEventListener("click", (event)=> {
    
    event.preventDefault();
    pickUpItem(hero, addWeapon);

}
    );


//equip hero with first item in inventory array

const equipWithWeapon = document.querySelector("#bag");

equipWithWeapon.addEventListener("click", (event)=>{
    
    event.preventDefault();
    equipWeapon(hero);
});
