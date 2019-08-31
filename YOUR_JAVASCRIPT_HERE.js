// Write your JS here
//Final changes
//Final Final changes ability to select random enemy pic

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

//enemy image

const enemiesImage =[

    "https://media.wired.com/photos/59331aa6aef9a462de985569/master/pass/copyright-troll.jpg",

    "https://shop.bbc.com/media/catalog/product/cache/2/image/1200x1200/9df78eab33525d08d6e5fb8d27136e95/2/0/20386-silver-dalek-ornament_large.jpg",

    "http://images.buystarwarscostumes.com/products/10008/1-1/authentic-darth-vader-costume.jpg",

    "https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters_opt/p-the-simpsons-harry-shearer-ned-flanders.jpg",

    "https://cdn.shopify.com/s/files/1/2529/5140/products/frozen-elsa-portrait-collection-diamond-painting-kit-ytg-official-store-classic-20x30cm-8x12-in-square-5_1024x1024.jpg?v=1557777161",

    "https://i.cbc.ca/1.4048391.1490905218!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/the-teletubbies.jpg"

];


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


//change pic of enemy
function newEnemy(){

    const dispEnemy = document.querySelector("#enemy");
    dispEnemy.src = enemiesImage[Math.floor(Math.random()*enemiesImage.length)];
    
}
    
    const changeEnemyPic = document.querySelector("#changeEnemy");
    changeEnemyPic.addEventListener("click", newEnemy);
    

//remove enemy when clicked on

const removeEnemy = document.querySelector("#enemy");
removeEnemy.addEventListener("click", ()=>removeEnemy.parentNode.removeChild(removeEnemy));




