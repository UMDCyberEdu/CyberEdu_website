function startGame(){

    if(window.innerHeight <= 768){
        //display warning message on mobile that the user should use a desktop to play the game
        $('#mobile-warning').addClass('show');
        setTimeout(function(){ $('#mobile-warning').removeClass('show'); }, 5000);
    }else{
        window.open('https://cyberedu.umd.edu', '_blank');
    }

}
