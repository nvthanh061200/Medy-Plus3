jQuery(document).ready(function($){
    if($('.banner').length>0){
        // Set the date we're counting down to
        var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();
        
        // Update the count down every 1 second
            var x = setInterval(function() {
        
            // Get today's date and time
            var now = new Date().getTime();
                
            // Find the distance between now and the count down date
            var distance = countDownDate - now;
                
            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                
            // Output the result in an element with id="demo"
            document.getElementById("days").innerHTML =  days;
            document.getElementById("hours").innerHTML =  hours;
            document.getElementById("minutes").innerHTML =  minutes;
            document.getElementById("seconds").innerHTML =  seconds;
            // If the count down is over, write some text 
                if (distance < 0) {
                    clearInterval(x);
                    document.getElementById("demo").innerHTML = "EXPIRED";
                }
            }, 1000);
        
    }
    // if($(".header-bottom").length>0){
    //     document.getElementById("ahi").innerHTML="CATEGORIES";
    //     let a=document.getElementById("ahi");
    //     a.style.color="red"
    // }
    
    // begin: ẩn hiện dropdown me
    if($(".header-bottom-controller").length>0){
        $('html').click(function() {
            $('.dropdown').hide();
        });
        $('.header-bottom-container').click(function(event) {
            event.stopPropagation();
        });
        
        $('.header-bottom-controller').click(function(event) {
            $('.dropdown').toggle();
        });
    }
    // end: ẩn hiện dropdown me

    // begin: ẩn hiện dropdown con
    if($(".header-bottom-controller").length>0){
        $("html").click( ()=>{
            $(".dropdown-item-sub").hide();
        })
        $('.header-bottom-container').click(function(event) {
            event.stopPropagation();
        });
        $("#dropdown-item-contro").click(function(event){
            $(".dropdown-item-sub").toggle();
        })
    }
    // end: ẩn hiện dropdown con
    if($(".header-middle-cart").length>0){
        //hide là để  tắt đi khung giỏ hàng khi click vào bất kỳ nơi đầu trên trang web
        $("html").click(()=>{
            $("#list-cart").hide();
        })
        $(".header-middle-cart").click(function(event){
            event.stopPropagation();
        })
        $(".header-middle-cart-img").click(function(){
            $("#list-cart").toggle();
        })

    }
    
    if($(".autocompelte").length>0){
        var countries = ["Thanh Van Nguyen","Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla",
        "Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan",
        "Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan",
        "Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria",
        "Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central Arfrican Republic",
        "Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cuba","Curacao",
        "Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador",
        "Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France",
        "French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland",
        "Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary",
        "Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey",
        "Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho",
        "Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia",
        "Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco",
        "Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauro","Nepal","Netherlands",
        "Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","North Korea","Norway","Oman",
        "Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal",
        "Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino",
        "Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia",
        "Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka",
        "St Kitts &amp; Nevis","St Lucia","St Vincent","Sudan","Suriname","Swaziland","Sweden","Switzerland",
        "Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago",
        "Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Tuvalu","Uganda","Ukraine","United Arab Emirates",
        "United Kingdom","United States of America","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela",
        "Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe",
        "Thuốc kháng sinh","Thuốc đau rạ dày","thuốc tẩy run","thuốc nhiệt miệng","thuốc táo bón"
        ];
        autocomplete(document.getElementById("myInput"), countries);
    }

    

    if($(".slider").length>0){
        showSlides(slideIndex=1);
    }

})
    // begin: slider
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }
    function showSlides(n){ 

        var i;
        var slides = document.getElementsByClassName("slider-banner"); //get all slider
        var dots = document.getElementsByClassName("dot"); // get all dot
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        for (i = 0; i < dots.length; i++){
            dots[i].className = dots[i].className.replace("active", "");
        }
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
    }
    //end: slider




//translate
var tnum = 'en';
$(document).click(function () {
  // xóa bỏ class active2
    $('.setting-translate, .more_translate').removeClass('active2');
});

$('.setting-translate .current_translate').click(function(e){    
    e.stopPropagation();
    $(this).parent('.setting-translate').toggleClass('active2');
    
    setTimeout(function(){
      $('.more_translate').toggleClass('active2');
    }, 5);
});


$('.more_translate .translate').click(function(){
  $(this).addClass('selected').siblings().removeClass('selected');
  $('.more_translate').removeClass('active2');  
  
  var img = $(this).find('img').attr('src');    
  var translate = $(this).attr('data-value');
  $('.current_translate .translate-txt').text(translate);
  $('.current_translate img').attr('src', img);
  
  if(translate == 'ar'){
    $('body').attr('dir', 'rtl');
  }else{
    $('body').attr('dir', 'ltr');
  }
});

// gọi ý nội dung code
function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
          /*check if the item starts with the same letters as the text field value:*/
          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            /*create a DIV element for each matching element:*/
            b = document.createElement('DIV');
            b.setAttribute("class", "autocomplete-text");
            /*make the matching letters bold:*/
            b.innerHTML = "<strong class='anhThanh'>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            /*insert a input field that will hold the current array item's value:*/
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener("click", function(e) {
                /*insert the value for the autocomplete text field:*/
                inp.value = this.getElementsByTagName("input")[0].value;
                /*close the list of autocompleted values,
                (or any other open lists of autocompleted values:*/
                closeAllLists();
            });
            a.appendChild(b);
          }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          /*If the arrow DOWN key is pressed,
          increase the currentFocus variable:*/
          currentFocus++;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 38) { //up
          /*If the arrow UP key is pressed,
          decrease the currentFocus variable:*/
          currentFocus--;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 13) {
          /*If the ENTER key is pressed, prevent the form from being submitted,*/
          e.preventDefault();
          if (currentFocus > -1) {
            /*and simulate a click on the "active" item:*/
            if (x) x[currentFocus].click();
          }
        }
    });
    function addActive(x) {
      /*a function to classify an item as "active":*/
      if (!x) return false;
      /*start by removing the "active" class on all items:*/
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      /*add class "autocomplete-active":*/
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      /*a function to remove the "active" class from all autocomplete items:*/
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      /*close all autocomplete lists in the document,
      except the one passed as an argument:*/
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
}
