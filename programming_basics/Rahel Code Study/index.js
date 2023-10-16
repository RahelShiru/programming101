index.js

let menuEl = document.getElementById("fa fa-bars")

console.log(menuEl)

function hideMenu() {
    console.log("Menu hidden!")
    hideMenu()
  }

  function showMenu() {
      console.log("Menu clicked!")
      showMenu()
    }

  
    var navLinks = document.getElementById("navLinks");
    // function showMenu(){
    //     navLinks.style.right="0";
    // }
    function hideMenu(){
        navLinks.style.right="-200px";
    }