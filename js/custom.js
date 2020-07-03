$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        autoplay:true,
        loop:true,
        dots:false,
        itemsDesktop: false,
        center: true,
        lazyLoad:true,
        stopOnHover:true,
        
        
        responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
        
        
    })
    
    

    
    
 });  


 //Get the button
        var btn1 = document.getElementById("myBtn");
        var btn2= document.getElementById("links");
        var spanopen =document.getElementById("open");
        var spanopen2 =document.getElementById("open2");
        
       

        // When the user scrolls down 20px from the top of the document, show the button
        window.onscroll = function() {scrollFunction()};

        function scrollFunction() {
          if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            btn1.style.display = "block";
            btn2.style.top="0";
              
            
          } else {
            btn1.style.display = "none";
            btn2.style.top="6vh";
          }
        }

        // When the user clicks on the button, scroll to the top of the document
        function topFunction() {
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
        }
        
        
        
        function openfun(){
            if(spanopen.style.display == "none"){
//                spanopen.style.display  = "block !important";
                spanopen.style.cssText = 'display:inline !important';
                console.log("testtttt1");
                
            }
            
            else{
                spanopen.style.cssText = 'display:none !important';
                console.log("testtttt2");
                
            }
            
        }
        
        function openfun2(){
            if(spanopen2.style.display == "none"){
//                spanopen.style.display  = "block !important";
                spanopen2.style.cssText = 'display:inline !important';
                console.log("testtttt1");
                
            }
            
            else{
                spanopen2.style.cssText = 'display:none !important';
                console.log("testtttt2");
                
            }
            
        }

