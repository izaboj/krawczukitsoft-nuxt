export default ({ app }, inject) => {
  // Script for side navigation
  inject("w3_open", () => {
    var x = document.getElementById("mySidebar");
    x.style.width = "300px";
    x.style.paddingTop = "10%";
    x.style.display = "block";
  });
  // // Close side navigation
  inject("w3_close", () => {
    document.getElementById("mySidebar").style.display = "none";
  });

  // Used to toggle the menu on smaller screens when clicking on the menu button
  inject("openNav", () => {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
    } else {
      x.className = x.className.replace(" w3-show", "");
    }
  });
  inject("closeNav", () => {
    var x = document.getElementById("navDemo");
    x.className = x.className.replace(" w3-show", "");
  });

  inject("hello", (msg) => console.log(`Hello ${msg}!`));
};
