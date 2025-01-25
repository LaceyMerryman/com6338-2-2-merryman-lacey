function greet() {

    var userName = prompt("What is your name?");
    
    alert("Hello, " + userName);
    
    var userAge = parseInt(prompt("How old are you?"));
    
    var hadBirthday = confirm("Have you had your birthday yet this year?");
    
    var currentYear = new Date().getFullYear();
    
    var birthYear;
    if (hadBirthday) {
      birthYear = currentYear - userAge; // If birthday has been celebrated, subtract age directly
    } else {
      birthYear = currentYear - userAge - 1; // If birthday hasn't been celebrated yet, subtract age + 1
    }
    
    alert("You were born in " + birthYear);
  }
  
  document.getElementById("greetButton").addEventListener("click", greet);
  greet()
