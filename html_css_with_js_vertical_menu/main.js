// Event triggered when all content is loaded
// include images (even big ones)
window.addEventListener('load', function () {
  console.log('window loaded');
})

// Event triggered when the DOM (document) is loaded
// Similar to jQuery ready event
document.addEventListener('DOMContentLoaded', function () {
  var menuItems = document.getElementById('menu')
                          .children[0] // UL
                          .children;   // LI's
  for(var i=0; i<menuItems.length; i++) {
    var menuItem = menuItems[i];
    var subMenu = menuItem.children[1];
    if(subMenu) {
      // Show submenu on mouse over
      menuItem.addEventListener('mouseover', function (e) {
        // this -> li
        // e.srcElement -> a
        e.srcElement.nextElementSibling.style.display = 'block';
      });
      // Hide submenu on mouse over
      menuItem.addEventListener('mouseleave', function (e) {
        var subMenu = e.srcElement.children[1];
        if(subMenu.style.display != 'none')
          subMenu.style.display = 'none';
      });
    }
  }
});
