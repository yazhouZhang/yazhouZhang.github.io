
function openNav(){
    document.getElementById("mySideNav").style.width="250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("header").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav(){
    document.getElementById("mySideNav").style.width="0px";
    document.getElementById("main").style.marginLeft = "0px";
    document.getElementById("header").style.marginLeft = "0px";
    document.body.style.backgroundColor = "white";
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show"); // classlist 可以获取并且增删改查 dom 操作
}

window.onclick = function(event) {
    if(!event.target.matches('.dropBtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function openType(evt,typeName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(typeName).style.display = "block";
    evt.currentTarget.className += " active";

    document.getElementById("defaultOpen").click();
}

// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//     showSlides(slideIndex += n)
// }

// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }

// function showSlides(n) {
//     var i;
//     var slides = document.getElementsByClassName("mySlides");
//     var dots = document.getElementsByClassName("dot");
//     if (n > slides.length){slideIndex = 1}
//     if (n < 1){slideIndex = slides.length}
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++){
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     console.log(slideIndex)
//     slides[slideIndex-1].style.display = "block";
//     dots[slideIndex-1].className += " active";
// }

var slideIndex = 0;
showSlides();
 
function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000); // 切换时间为 2 秒
}

