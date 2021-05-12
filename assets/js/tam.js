
// slider------------------



"use strict";
var slider = document.querySelector('.window__slider');
var images = document.querySelectorAll('.window__slider__img-container');
var buttonsCurrentImage = document.querySelectorAll('.window__current-img__btn');
var btnSlideLeft = document.querySelector('.window__slide-left');
var btnSlideRight = document.querySelector('.window__slide-right');


var imageSlider = (function() {
  var image = {
    first: 0,
    second: 1,
    third: 2,
    fourth: 3,
    fifth: 4
  };
  
  // previous & current Image are indexes
  var previousImage = image.fifth;
  var currentImage = image.first;
  var interval = null;

  // cross browser transform
  function translateX(num) {
    var tr = 
      'transform: translateX(-' + num + '00%);' +
      '-moz-transform: translateX(-' + num + '00%);' +
      '-ms-transform: translateX(-' + num + '00%);' +
      '-o-transform: translateX(-' + num + '00%);' +
      '-webkit-transform: translateX(-' + num + '00%);';

    return tr;
  }

  // used for automatic sliding right
  function slideRight() {
    previousImage = currentImage;
    currentImage++;
  
    // if on last element, go to first one
    if(currentImage > image.fifth)
      currentImage = image.first;
    
    slider.setAttribute('style', translateX(currentImage));
  
    // adds opacity on current and removes on previous
    images[currentImage].classList
      .add('window__slider__img-container--opacity');
    images[previousImage].classList
      .remove('window__slider__img-container--opacity');

    // marks currently active image on respective button
    // removes from previous
    buttonsCurrentImage[currentImage].classList
      .add('window__current-img__btn--current');
    buttonsCurrentImage[previousImage].classList
      .remove('window__current-img__btn--current');
  }

  return {
    // clicking button to go directly to image
    // clears interval at start to remove interference of automatic movement
    // sets interval afterwards to continue slide animation
    goToImage: function(imageNumber) {
      clearInterval(interval);

      // remove effect from current image/button
      var beforeGoingToImage = currentImage;
      images[beforeGoingToImage].classList
        .remove('window__slider__img-container--opacity');

      buttonsCurrentImage[beforeGoingToImage].classList
        .remove('window__current-img__btn--current');

      // get new image
      currentImage = imageNumber;
      // no need to calculate previous because
      // slideRight, handleBtnSlideRight, handleBtnSlideLeft handle it

      slider.setAttribute('style', translateX(currentImage));
      
      // add effect to current visible image and respective btn
      images[currentImage].classList
      .add('window__slider__img-container--opacity');
      buttonsCurrentImage[currentImage].classList
      .add('window__current-img__btn--current');
      
      // start animation
      interval = setInterval(slideRight, 3000);
    },
    handleBtnSlideLeft: function() {
      // stop animation
      clearInterval(interval);
      
      // remove effect from current image & btn
      var currentBeforeSlidingLeft = currentImage;
      images[currentBeforeSlidingLeft].classList
        .remove('window__slider__img-container--opacity');
      buttonsCurrentImage[currentBeforeSlidingLeft].classList
        .remove('window__current-img__btn--current');
      
      // calculate new position
      currentImage = previousImage;
      previousImage--;
    
      // if on first element, go to last one
      if(previousImage < image.first) {
        previousImage = image.fifth;
      }
      
      // move slider
      slider.setAttribute('style', translateX(currentImage));
      
      // add effect to image and respective btn
      images[currentImage].classList
        .add('window__slider__img-container--opacity');
      buttonsCurrentImage[currentImage].classList
        .add('window__current-img__btn--current');

      // start animation
      interval = setInterval(slideRight, 3000);
    },
    handleBtnSlideRight: function() {
      // stop animation
      clearInterval(interval);

      // remove effect from current before moving to new one
      var currentBeforeSlidingRight = currentImage;
      images[currentBeforeSlidingRight].classList
        .remove('window__slider__img-container--opacity');
      buttonsCurrentImage[currentBeforeSlidingRight].classList
        .remove('window__current-img__btn--current');

      // calculate new position
      previousImage = currentImage;
      currentImage++;
    
      // if on last element, go to first one
      if(currentImage > image.fifth)
        currentImage = image.first;

      // move slider
      slider.setAttribute('style', translateX(currentImage));

      // add to new image and button
      images[currentImage].classList
        .add('window__slider__img-container--opacity');
      buttonsCurrentImage[currentImage].classList
        .add('window__current-img__btn--current');

      // start animation
      interval = setInterval(slideRight, 3000);
    },
    // used to start animation when page loads
    startSlideRightInterval: function() {
      interval = setInterval(slideRight, 3000);
    }
  };
})();

// slider
function startSlider() {
  // start after loading page
  imageSlider.startSlideRightInterval();

  // left and right move by clicking
  btnSlideLeft.addEventListener('click', imageSlider.handleBtnSlideLeft);
  btnSlideRight.addEventListener('click', imageSlider.handleBtnSlideRight);

  // 5 button listeners for each image
  buttonsCurrentImage[0].addEventListener(
    'click', function() {
    //   imageSlider.goToImage(0)
    alert("1")
    }
  );
  buttonsCurrentImage[1].addEventListener(
    'click', function() {
    //   imageSlider.goToImage(1)
    alert("2")
    }
  );
  buttonsCurrentImage[2].addEventListener(
    'click', function() {
    //   imageSlider.goToImage(2)
    alert("3")

    }
  );
  buttonsCurrentImage[3].addEventListener(
    'click', function() {
    //   imageSlider.goToImage(3)
    alert("4")

    }
  );
  buttonsCurrentImage[4].addEventListener(
    'click', function() {
    //   imageSlider.goToImage(4)
    alert("5")

    }
  );
}


let my_btn=document.querySelectorAll(".thanh2");

my_btn[0].addEventListener('click',()=>{
    alert("1")
})
my_btn[1].addEventListener('click',()=>{
    alert("2")
})
my_btn[2].addEventListener('click',()=>{
    alert("3")
})

window.addEventListener('load', startSlider);