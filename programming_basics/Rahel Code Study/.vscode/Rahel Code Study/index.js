index.js

function hideMenu() {
    // Function logic goes here
    console.log("Menu hidden!");
    // Additional code to hide the menu
  }
  function showMenu() {
      // Function logic goes here
      console.log("Menu clicked!");
      // Additional code to show the menu
    }

  
    var navLinks = document.getElementById("navLinks");
    function showMenu(){
        navLinks.style.right="0";
    }
    function hideMenu(){
        navLinks.style.right="-200px";
    }