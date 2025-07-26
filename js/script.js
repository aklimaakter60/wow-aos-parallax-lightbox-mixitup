wow = new WOW({
  boxClass:     'wow',     
  animateClass: 'animated', 
  offset:       0,          
  mobile:       true,       
  live:         true        
}
)
wow.init();

/*aos animation*/
 AOS.init();

 //mix it up
 var mixer = mixitup('.it_u', {
    animation: {
        duration: 300
    }
});