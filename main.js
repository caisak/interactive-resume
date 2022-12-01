document.addEventListener('DOMContentLoaded', main)

function main() {
    
}

function readMoreReadLess() {
    let dots = document.getElementById("dots");
    let moreText = document.getElementById("more");
    let btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }

  function againFunction() {
    let multipleDots = document.getElementById("multipleDots");
    let expandedText = document.getElementById("expanded");
    let buttonText = document.getElementById("myButton");
  
    if (multipleDots.style.display === "none") {
      multipleDots.style.display = "inline";
      buttonText.innerHTML = "Read more"; 
      expandedText.style.display = "none";
    } else {
      multipleDots.style.display = "none";
      buttonText.innerHTML = "Read less"; 
      expandedText.style.display = "inline";
    }
  }