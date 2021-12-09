var x;
//Function called messageDisplayed used to display a message according to the time the user has visited the website. For this I have used if and else logic and implemented it on the hours during the day. This way message displayed will depend on the time.//
function messageDisplayed(){
    var today = new Date();
    var hourNow = today.getHours();
    var message;
    if(hourNow>18){
        message = 'Good evening. Welcome to my website/CV.';
    }
    else if (hourNow > 12){
        message  = 'Good afternoon. Welcome to my website/CV.';
    }
    else{
        message = 'Good morning. Welcome to my website/CV.';
    }
    //document.write('<h3>'+//(message)+'</h3>');
      alert(message);
}
//I tried to hide the message after being displayed to make the website more clean but for some reason this function doesnt work.
setTimeout(messageDisplayed(), 2000);
function displayProfile() {
  
    document.getElementById("profile-div").style.display = "block";

}

function displayEducation() {

    document.getElementById("education-div").style.display = "block";

}
function displayEmploymentHistory(){
    document.getElementById("employment-history-div").style.display = "block"; 
    
     
}

 function displayLanguagesSpoken(){

    document.getElementById("languages-spoken-div").style.display = "block";

}
 function displayDetails() {

    document.getElementById("details-div").style.display = "block";

}
function goToTop(){
    window.scrollTo({
        top:0,
        behavior:"smooth"        });
        
        
    }
    
    var count = 0;
    var btn = document.getElementById("btn");
    var disp = document.getElementById("display");

    btn.onclick = function () {
        count++;
        disp.innerHTML = count;
    }
    $('.accordion').on('click', '.accordion-control', function(e){
        e.preventDefault();
        $(this)
        .next('.accordion-panel')
        .not(':animated')
        .slideToggle();
    });     
            
        
         