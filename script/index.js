 /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
 function responsiveNav() {
  var x = document.getElementById("myTopNavRes");
  if (x.className === "topNavRes") {
      x.className += " responsive";
  } else {
      x.className = "topNavRes";
  }
}