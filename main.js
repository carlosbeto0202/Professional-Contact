const elementButtonTheme = document.querySelector('#buttonTheme');
/* const elementButtonTheme = document.getElementById('buttonTheme'); */


function timer(){
    elementButtonTheme.setAttribute("disabled",true)
    setTimeout(function(){
        elementButtonTheme.removeAttribute("disabled")
    },700);
    
}

function theme(){
    if(document.body.classList == ('dark')){
        document.body.classList.remove('dark')
        timer();

    }else{
        document.body.classList.add('dark')
        timer();
    }
}