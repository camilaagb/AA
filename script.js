$(document).ready(function() {
    console.log( "ready!" );
    
    changeMenu("coffeAndTea");

});

function changeMenu(type){

    switch (type) {
        case 'coffeAndTea':

            // JQUERY
            // $('#coffeAndTea').show();
            // $('#food').hide();
            // $('#drinks').hide();

            // JAVASCRIPT

            const coffeAndTeaElem = document.getElementById("coffeAndTea");
            coffeAndTeaElem.classList.remove('hide_menu');
            coffeAndTeaElem.classList.add('show_menu');

            const buttonCoffeAndTea = document.getElementById("buttonCoffeAndTea");
            buttonCoffeAndTea.classList.add('button_active');
            

            const coffeAndTeaElem1 = document.getElementById("drinks");
            coffeAndTeaElem1.classList.remove('show_menu');
            coffeAndTeaElem1.classList.add('hide_menu');

            const buttonFoods = document.getElementById("buttonFoods");
            buttonFoods.classList.remove('button_active');
            

            const coffeAndTeaElem2 = document.getElementById("foods");
            coffeAndTeaElem2.classList.remove('show_menu');
            coffeAndTeaElem2.classList.add('hide_menu');

            const buttonDrinks = document.getElementById("buttonDrinks");
            buttonDrinks.classList.remove('button_active');


            
            
            break;
        case 'foods':

            // JQUERY
            // $('#coffeAndTea').hide();
            // $('#food').show();
            // $('#drinks').hide();


            // JAVASCRIPT
            const foodsElem = document.getElementById("coffeAndTea");
            foodsElem.classList.remove('show_menu');
            foodsElem.classList.add('hide_menu');

            const buttonCoffeAndTea1 = document.getElementById("buttonCoffeAndTea");
            buttonCoffeAndTea1.classList.remove('button_active');
            

            const foodsElem1 = document.getElementById("drinks");
            foodsElem1.classList.remove('show_menu');
            foodsElem1.classList.add('hide_menu');

            const buttonDrinks1 = document.getElementById("buttonDrinks");
            buttonDrinks1.classList.remove('button_active');
            

            const foodsElem2 = document.getElementById("foods");
            foodsElem2.classList.remove('hide_menu');
            foodsElem2.classList.add('show_menu');

            const buttonFoods1 = document.getElementById("buttonFoods");
            buttonFoods1.classList.add('button_active');
            


            break;
        case 'drinks':

            // JQUERY
            // $('#coffeAndTea').hide();
            // $('#food').hide();
            // $('#drinks').show();

            // JAVASCRIPT
            const drinksElem = document.getElementById("coffeAndTea");
            drinksElem.classList.remove('show_menu');
            drinksElem.classList.add('hide_menu');

            const buttonCoffeAndTea2 = document.getElementById("buttonCoffeAndTea");
            buttonCoffeAndTea2.classList.remove('button_active');
            

            const drinksElem1 = document.getElementById("drinks");
            drinksElem1.classList.remove('hide_menu');
            drinksElem1.classList.add('show_menu');

            const buttonDrinks2 = document.getElementById("buttonDrinks");
            buttonDrinks2.classList.add('button_active');
            

            const drinksElem2 = document.getElementById("foods");
            drinksElem2.classList.remove('show_menu');
            drinksElem2.classList.add('hide_menu');

            const buttonFoods2 = document.getElementById("buttonFoods");
            buttonFoods2.classList.remove('button_active');

    }

}




// menu mobile


function menuShow() {

    let menuMobile = document.querySelector('.mobile-menu');

    if (menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src="./assets/icons8-cardápio-60.svg";
    }

    else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src="./assets/x.svg";
    }
}