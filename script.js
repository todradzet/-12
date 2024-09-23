
let age = Number(prompt("Enter your age:"));
let movieType = prompt("Enter movie type (regular or 3D):").toLowerCase();
let timeOfDay = prompt("Enter time of day (matinee or evening):").toLowerCase();
let hasDiscount = confirm("Do you have a discount ticket?"); 


let ticketPrice = 0;

switch (true) {
    case age < 10:
        ticketPrice = 5;
        break;
    case age >= 10 && age <= 65:
        ticketPrice = 15;
        break;
    case age > 65:
        ticketPrice = 10;
        break;
}


switch (movieType) {
    case "3d":
        ticketPrice += 5;  
        break;
}

switch (timeOfDay) {
    case "evening":
        ticketPrice += 5;  
        break;
}

if (hasDiscount) {
   
    ticketPrice -= Math.min(ticketPrice * 0.25, 5);
}


console.log(`The price of the ticket for you is: ${ticketPrice} GEL.`);
