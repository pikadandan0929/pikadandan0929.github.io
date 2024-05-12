
function greetUser() {
    const now = new Date();
    const hour = now.getHours();
    let greeting;
  
    if (hour > 5 && hour < 12) {
      greeting = "Good morning";
    } else if (hour >= 12 && hour < 18) {
      greeting = "Good day";
    } else {
      greeting = "Good evening";
    }
  
    alert(greeting);
  }
  
  function changeButtonTextAndClass() {
    let button = document.getElementById("button2");
    console.log("Before change:", button.textContent, button.className);
  
    button.textContent = "Done";
    button.className = "btn btn-success";
  
    console.log("After change:", button.textContent, button.className);
  }
  
  document.getElementById("button1").addEventListener("click", greetUser);
  document.getElementById("button2").addEventListener("click", changeButtonTextAndClass);
  
  var acc = document.getElementsByClassName("accordion");
  var i;
  
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      /* Toggle between adding and removing the "active" class,
      to highlight the button that controls the panel */
      this.classList.toggle("active");
  
      /* Toggle between hiding and showing the active panel */
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }



  