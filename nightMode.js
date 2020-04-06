var night = false;
var day = true;

function turnOnNight(){
    document.getElementById("bckgrnd").style.backgroundColor = "#121212";
    document.querySelectorAll('li').forEach(e => e.style.color = "white");
    document.querySelectorAll('h1').forEach(e => e.style.color = "white");
    document.querySelectorAll('h2').forEach(e => e.style.color = "white");
    document.querySelectorAll('i').forEach(e => e.style.color = "white");
    document.querySelectorAll('p').forEach(e => e.style.color = "white");
    document.getElementById('grayBox').style.backgroundColor = "#262626";
    document.getElementById('bio').style.color = "white";
    // document.getElementById('day').style.display = "none";
    // document.getElementById('night').style.display = "block";
    document.querySelectorAll('header').forEach(e => e.style.borderTop = "6px solid rgb(224, 127, 224)");
    document.querySelectorAll('header').forEach(e => e.style.backgroundColor = "#262626");
}

function turnOffNight(){
    document.getElementById("bckgrnd").style.backgroundColor = "white";
    document.querySelectorAll('li').forEach(e => e.style.color = "black");
    document.querySelectorAll('h1').forEach(e => e.style.color = "black");
    document.querySelectorAll('h2').forEach(e => e.style.color = "black");
    document.querySelectorAll('i').forEach(e => e.style.color = "black");
    document.querySelectorAll('p').forEach(e => e.style.color = "black");
    document.getElementById('grayBox').style.backgroundColor = "white";
    // document.getElementById('day').style.display = "block";
    // document.getElementById('night').style.display = "none";
    document.querySelectorAll('header').forEach(e => e.style.borderTop = "6px solid rgb(255,255,255)");
    document.querySelectorAll('header').forEach(e => e.style.backgroundColor = "white");


}

function shiftColors(){
    if(day == false){
        day = true;
        night = false;
        turnOffNight();
    }
    else{
        day = false;
        night = true;
        turnOnNight();
    }
}

























// let hoverElement = document.querySelector('.hoverElement');
// let effectElement = document.querySelector('.otherThing');

// hoverElement.addEventListener('hover', () =>{
//     // effectElement.getElementsByClassName.style.backgroundColor = "black";
//     effectElement.classList.add('changebg');
// })

// hoverElement.addEventListener('mouseout', () =>{
//     effectElement.classList.remove('changebg');
// })
// hoverElement.addEventListener('click', () =>{
//     effectElement.classList.remove('permanentchangebg');
// })

// .otherThing{
//     background-color: rgba(0,0,0,0);
//     transition: background-color 300ms ease;

// }


// .otherThing . changebg{
//     background-color: (0,0,0,1);
// }

// .otherThing .permanentchangebg{
//     background-color: rgba(0,0,0,0);
// }