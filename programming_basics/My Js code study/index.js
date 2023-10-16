  // document.getElementById("count-el").innerText = 5

function increment() { 
     console.log("The button was clicked")    
}
 function countdown() {
    console.log(42)
 }

  countdown()

  let lap1 = 34
  let lap2 = 33
  let lap3 = 36

 
  function lapTime(){
   let totalTime = lap1 + lap2 + lap3
   console.log(totalTime)
  }

  lapTime()

  let lapsCompleted = 0


  function incrementLap(){
   lapsCompleted = lapsCompleted + 1
  }
    
  incrementLap()
  incrementLap()
  incrementLap()

  console.log(lapsCompleted)



//     let count = 0
//     function listenForClicksOnIncrementButton(){
//        let count = count + numberOfClicks 
//     }

//     function changeCountelToNumberOfClicks(){

//     }

//     function logoutAfterClick(){

//     }
//    logoutAfterClick()

let saveEl = document.getElementById("Save-el")
let countEl = document.getElementById("count-el")
 

console.log(saveEl)

console.log(countEl)

let count = 0 
function increment(){
     count = count + 1
     countEl.innerText = count 
}

function save(){
    console.log(count)
} 
save()

// let username = "per"

// let message =  "You have three new notifications"

// let messageToUser = message + ", " + username + "!"
// console.log (messageToUser)

// let name = "my name is Rahel"
// let greeting = "Hi"

// let myGreeting = greeting + ", " + name

// console.log (myGreeting)


let welcomeEl = document.getElementById("welcome-el")
console.log(welcomeEl)

// let name = "Rahel Wanjiru Maina"
// let greeting = "Welcome back"
// let myGreeting = greeting + " " + name 
 
// welcomeEl.innerText = myGreeting
// welcomeEl.innerText += "👋"




// function save() {
//     let countStr = count + " - "
//      saveEl.textContent += countStr
//      countEl.textcontent = 0
//      count = 0
// } 

// let firstName = "Rahel"  
// let lastName = "Maina" 
// let fullName = firstName + " " + lastName

// console.log(fullName)

let name = "Linda"
let greeting = "Hi there"

function greetingLinda(){
     console.log(greeting + ", "+ name + "!" )
}

greetingLinda()

let myPoints = 3


function add3Points(){
     myPoints += 3

}

function remove1Point(){
     myPoints -= 1 
} 
add3Points()
add3Points()
add3Points()

remove1Point()
remove1Point()

console.log(myPoints)

console.log("myPoints:" + 5 + 9)


let errorParagraph = document.getElementById("error")
console.log(errorParagraph)

function purchase (){
      console.log("button clicked")
      errorParagraph.textContent = "Something went wrong, please try again"
} 

let num1 = 8
let num2 = 2

document.getElementById("num1-el").textContent = num1
console.log(num1)
document.getElementById("num2-el").textContent = num2
console.log(num2)

let sumEl = document.getElementById("sum-el")

function add() {
     let result = num1 + num2
     sumEl.textContent  = "sum:"  + result
}

function subtract (){
     let result = num1 - num2
     sumEl.textContent = "sum: " + result 
}


function divide(){
     let result = num1 / num2
     sumEl.textContent = "sum: " + result 
}


function multiply(){ 
     let result = num1 * num2
     sumEl.textContent = "sum: " + result 
}

let firstCard = 10 
let secondCard = 10
let sum = firstCard + secondCard

if (sum <= 20){
   console.log("Do you want to draw a new card?🙂")     
} else if (sum === 21){
     console.log("wohoo! You've got a Blackjack!🥳")
} else {
     console.log("You're out of the game!😭")
}

// let age = 21
// if (age < 21){
//      console.log("You cannot enter the club!")
// } else{
//      console.log("Welcome!")
// }

 let age = 145

 if (age < 100){
     console.log("Not eligible")
 } else if ( age === 100){
     console.log("Here is your birthday card from the King")
 } else {
     console.log("Not eligible. you have already gotten one")
 }



