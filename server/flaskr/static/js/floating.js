var waitForFinalEvent = (function () {
  var timers = {};
  return function (callback, ms, uniqueId) {
    if (!uniqueId) {
      uniqueId = "Don't call this twice without a uniqueId";
    }
    if (timers[uniqueId]) {
      clearTimeout (timers[uniqueId]);
    }
    timers[uniqueId] = setTimeout(callback, ms);
  };
})();

function isInViewport(element) {
  // Get the bounding client rectangle position in the viewport
  const bounding = element.getBoundingClientRect();
  
  // Checking part. Here the code checks if it's *fully* visible
  // Edit this part if you just want a partial visibility
  if (
      bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
      bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  ) {
      // console.log('In the viewport! :)');
      return true;
  } else {
      // console.log('Not in the viewport. :(');
      return false;
  }
}

function isntInViewport(element) {
  // Get the bounding client rectangle position in the viewport
  const bounding = element.getBoundingClientRect();
  
  // Checking part. Here the code checks if it's *fully* visible
  // Edit this part if you just want a partial visibility
  if (
      (bounding.top <= -110 || bounding.top > window.innerHeight) && 
      (bounding.bottom <= -110 || bounding.bottom > window.innerHeight)   
  ) {
      // console.log('In the viewport! :)');
      return true;
  } else {
      // console.log('Not in the viewport. :(');
      return false;
  }
}

function isBottomInViewport(element) {
  // Get the bounding client rectangle position in the viewport
  const bounding = element.getBoundingClientRect();
  
  // Checking part. Here the code checks if it's *fully* visible
  // Edit this part if you just want a partial visibility
  if (
      (bounding.top <= 0 || bounding.top < window.innerHeight) && 
      (bounding.bottom >= 0 || bounding.bottom > window.innerHeight)   
  ) {
      // console.log('In the viewport! :)');
      return true;
  } else {
      // console.log('Not in the viewport. :(');
      return false;
  }
}

//initialization

var lastScrollTop = 0;
var imageContainers = document.querySelectorAll(".imageContainer1:not(.topImage), .imageContainer2:not(.topImage)");
var imageContainersFloated = []
var l = imageContainers.length;
for (var i = 0; i < l; i++){
  imageContainersFloated[i] = (isInViewport(imageContainers[i])) ? true : false
}

// function test(i){
//   console.log('clear top' + i)
//   $(imageContainers[i]).animate({'top':'0px'},3000);
//   imageContainersFloated[i] = false
//   // $(imageContainers[i]).css('top', '0px');
// }

// function test2(i){
//   console.log('clear top' + i)
//   // $(imageContainers[i]).animate({'top':'0px'},3000);
//   $(imageContainers[i]).animate({'top':'-100px'},3000);
// }

window.addEventListener('scroll', function (event) {

  var scrollTop = window.scrollY || document.documentElement.scrollTop;

  for (var i = 0; i < l; i++){
    
    if (scrollTop > lastScrollTop){ //scrolling down
     if (isInViewport(imageContainers[i]) && imageContainersFloated[i] == false ){
        $(imageContainers[i]).animate({'top':'-100px'}, 1000);
        imageContainersFloated[i] = true;
      }      
    }

    if (scrollTop < lastScrollTop){  //scrolling up
      if (isBottomInViewport(imageContainers[i])){
        if ($(imageContainers[i]).css('top') == '-100px'){
          $(imageContainers[i]).animate({'top':'0px'}, 1000);
        }
      }
    }

    if (isntInViewport(imageContainers[i]) && imageContainersFloated[i] == true){
      $(imageContainers[i]).animate({'top':'0px'}, 0);
      imageContainersFloated[i] = false;
    }     
  }
  lastScrollTop = scrollTop;
}, false);

