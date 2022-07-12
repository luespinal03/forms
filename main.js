let inputText = document.querySelector('#userInput');

let submitButton = document.querySelector('#submitButton');

let form = document.querySelector('form');

// Reference to checkboxes 
let pepperoniCheckbox = document.querySelector('#pepperoni');

let pineappleCheckbox = document.querySelector('#pineapple');

let sausageCheckbox = document.querySelector('#sausage');



// Reference to radio buttons 
let normalCrust = document.querySelector('#normal');
let thinCrust = document.querySelector('#thin');
let deepDishCrust = document.querySelector('#deep-dish');




// In order to grab the text from our input fields inside our forms, we use .value instead of .innerText

form.addEventListener('submit', function () {
    // prevents browser from refreshing when using 'submit' event
    event.preventDefault();

    // print out value of what user inputs in text box
    console.log(`Name for delivery: ${inputText.value}`);

    console.log("Toppings: ");
    // For checkboxes, use the .checked property
    console.log("Pepperoni: " + pepperoniCheckbox.checked)
    console.log("Pineapple: " + pineappleCheckbox.checked)
    console.log("Sausage: " + sausageCheckbox.checked)

    let crustType = ""
    //For radio buttons, ALSO use the .checked property
    if (normalCrust.checked === true) {
        crustType = "Normal";
    } else if (thinCrust.checked === true) {
        crustType = "Thin";
    } else if (deepDishCrust.checked === true) {
        crustType = "Deep Dish";
    }

    console.log("Crust Type: " + crustType);




    // RESET CHECKMARKS TO FALSE in order to clear them on submit
    pepperoniCheckbox.checked = false;
    pineappleCheckbox.checked = false;
    sausageCheckbox.checked = false;

    // reset normal to be the default after clicking submit
    normalCrust.checked = true; 


    if(inputText.value !== ''){
    alert(`You have successfully submitted an order for: ${inputText.value}`);
    } else {
        alert('Please input a name for delivery')
    }
     // clear submission text by setting value to empty string
     inputText.value = '';

});