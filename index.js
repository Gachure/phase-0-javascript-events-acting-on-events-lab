// Your code here
function moveDodgerLeft() {
    var currentLeft = parseInt(dodger.style.left || 0);
    dodger.style.left = (currentLeft - 5) + 'px';
  }
  function moveDodgerRight() {
    var currentLeft = parseInt(dodger.style.left || 0);
    dodger.style.left = (currentLeft + 5) + 'px';
  }