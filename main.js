// Scroll when clicking navbar sections
  function ScrollTo(name) {
    var elem = document.getElementById(name);
    var jump = parseInt(elem.getBoundingClientRect().top * .5);
    document.body.scrollTop += jump;
    document.documentElement.scrollTop += jump;
    if (!elem.lastjump || elem.lastjump > Math.abs(jump)) {
      elem.lastjump = Math.abs(jump);
      setTimeout(function() { ScrollTo(name);}, "40");
    } else {
      elem.lastjump = null;
    }
  }

  function goTo(link) {
    let linkElem = document.createElement("a");
    linkElem.target = "_blank";
    linkElem.href = link;
    linkElem.click();
  }

// Animating fade ins when scrolled to element
  var animateHTML = function() {
    var elems;
    var windowHeight;
    function init() {
      elems = document.querySelectorAll('.hidden');
      windowHeight = window.innerHeight;
      addEventHandlers();
      checkPosition();
    }
    function addEventHandlers() {
      window.addEventListener('scroll', checkPosition);
      window.addEventListener('resize', init);
      window.addEventListener('load', init);
    }
    function checkPosition() {
      for (var i = 0; i < elems.length; i++) {
        var positionFromTop = elems[i].getBoundingClientRect().top;
        if (positionFromTop - windowHeight <= 0) {
          elems[i].className = elems[i].className.replace(
            'hidden',
            'fade-in-element'
          );
        }
      }
    }
    return {
      init: init
    };
  };
  animateHTML().init();
