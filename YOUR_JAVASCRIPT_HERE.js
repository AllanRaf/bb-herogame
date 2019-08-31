// Write your JS here
//Final changes

const hero = {

    name: "James",
    heroic: true,
    inventory: [],
    health: 10,
    weapon: {

            type: "stone",
            damage: 2
    }

};

//enemy's credentials

const enemy = {

    health: 10,
    attack: 3

};

function rest(userHero){

    if (userHero.health === 10){

        alert("Your health level is already at 10!");

    }else{

        userHero.health = 10;
        hero.health = 10;
        displayStats();

        return userHero;

    }
    

}

const addWeapon = {

    type: "dagger", 
    damage: 2

};

function pickUpItem(userHero, addWeapon){

    userHero.inventory.push(addWeapon);

    //delete 

}

function equipWeapon(userHero){

   if(userHero.inventory.length === 0){

     //alert("nothing in the inventory");

   }else{

    userHero.weapon = userHero.inventory[0];
    displayStats();

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

addDagger.addEventListener("click", (event)=> {
    
    event.preventDefault();
    pickUpItem(hero, addWeapon);
    //remove dagger from image
    addDagger.parentNode.removeChild(addDagger);

}
    );


//equip hero with first item in inventory array

const equipWithWeapon = document.querySelector("#bag");

equipWithWeapon.addEventListener("click", (event)=>{
    
    event.preventDefault();
    equipWeapon(hero);
});


function displayStats(){

    //hero's stats
    const dispName = document.querySelector("#showName");
    dispName.innerText = hero.name;

    const showHealth = document.querySelector("#showHealth");
    showHealth.innerText = hero.health;

    const showWeaponType = document.querySelector("#showWeaponType");
    showWeaponType.innerText = hero.weapon.type;

    const showWeaponDamage = document.querySelector("#showWeaponDamage");
    showWeaponDamage.innerText = hero.weapon.damage;

    //enemy's stats
    const dispEnemyHealth = document.querySelector("#showEnemyHealth");
    dispEnemyHealth.innerText = enemy.health;

}

displayStats();

//change the hero's name

function changeName(){

    const newName = prompt("What would you like the new name to be?");
    
    if(newName !=""){

        hero.name=newName;
        const dispName = document.querySelector("#showName");
        dispName.innerText = hero.name;

    }

}



const nameChange = document.querySelector("#changeName");
nameChange.addEventListener('click', (event)=>{
    
    event.preventDefault();
    changeName();
    
    });





//fight button
function fight(userHero, theEnemy){

    userHero.health -= theEnemy.attack;

    theEnemy.health -= userHero.weapon.damage;

    if(userHero.health<1){

        alert("You are dead, the enemy remains undefeated!");

    }else if(theEnemy.health<1){

        alert("Congratulations! You have beaten the enemy and reign supreme!");

    }

    displayStats();

}

const updateFight = document.querySelector("#fightEnemy");

updateFight.addEventListener("click", (event)=>{

    event.preventDefault();
    fight(hero, enemy);
})

//remove enemy when clicked on

const removeEnemy = document.querySelector("#enemy");
removeEnemy.addEventListener("click", ()=>removeEnemy.parentNode.removeChild(removeEnemy));




