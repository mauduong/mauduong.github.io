$(document).ready(function() {
  var currentItem = null;
  $('.profile-information-card').each(function(index) {
    // event String, function, useCapture boolean
    $(this)[0].addEventListener("dragstart", handleDragStart, false);
    $(this)[0].addEventListener("drop", handleDrop, false);
    $(this)[0].addEventListener("dragover", handleDragOver, false);
  });
   function handleDragStart(e) {
    currentItem = this;
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/html", this.innerHTML);
  }
   function handleDrop(e) {
    if (e.stopPropagation) {
      e.stopPropagation();
    }
     if (currentItem != this) {
      currentItem.innerHTML = this.innerHTML;
      this.innerHTML = e.dataTransfer.getData("text/html");
    }
    return false;
  }
   // allowDrop()
  function handleDragOver(e) {
    if (e.preventDefault) {
      e.preventDefault();
    }
    e.dataTransfer.dropEffect = "move";
    return false;
  }
});

document.addEventListener("DOMContentLoaded", function() {
  var check = document.querySelector('input[type="checkbox"]');

  // Toggle button to change theme mode
  check.addEventListener('change', function() {
    if (check.checked) {
      document.body.style.backgroundColor = "#212121";
      document.getElementById("main").style.transitionDuration = "0.4s";
      document.getElementById("main").style.color = "#F4F4F2";
      elements = document.getElementsByClassName("profile-information-card");
      for (var i = 0; i < elements.length; i++) {
        elements[i].style.transitionDuration = "0.4s";
        elements[i].style.backgroundColor = "#303030";
        elements[i].style["boxShadow"] = "2px 6px 10px 0 rgba(150,150,150,0.6)";
      }
      var hyperlink = document.getElementsByTagName("a");
      for (var i = 0; i < hyperlink.length; i++) {
          hyperlink[i].style.transitionDuration = "0.4s";
          hyperlink[i].style.color = "#F4F4F2";
      }
    } else {
      document.body.style.backgroundColor = "#F2EEEE";
      document.getElementById("main").style.transitionDuration = "0.4s";
      document.getElementById("main").style.color = "#373D3F";
      elements = document.getElementsByClassName("profile-information-card");
      for (var i = 0; i < elements.length; i++) {
        elements[i].style.transitionDuration = "0.4s";
        elements[i].style.backgroundColor = "#E8E8E8";
        elements[i].style["boxShadow"] = "2px 6px 10px 0 rgba(0,0,0,0.6)";
      }
      var hyperlink = document.getElementsByTagName("a");
      for (var i = 0; i < hyperlink.length; i++) {
          hyperlink[i].style.transitionDuration = "0.4s";
          hyperlink[i].style.color = "#373D3F";
      }
    }
  });
});
/*function themeChanger() {
  document.body.style.backgroundColor = "#272822";
  document.getElementById("main").style.color = "#F4F4F2";
  document.getElementsByClassName("profile-information-card").style.color = "#46483D";
}*/
/*
var options {
  valueNames: ['profile-information-card']
};

var profileList = new List('grid-container', options)*/
