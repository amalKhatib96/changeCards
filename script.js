
function changeCard() {
    const arrows = document.querySelectorAll(".fa-arrow-right");

    arrows.forEach(arrow => {
        arrow.addEventListener("click", () => {
            const previous = arrow.previousElementSibling;
            const parent = arrow.parentElement;
            const nextCard = parent.nextElementSibling;
        
             
        console.log('Helle')
        next(parent, nextCard);
        random_bg_color()
        })
    })
    
};



function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
 console.log(bgColor);
  
    document.body.style.background = bgColor;
    }


function next(parent, nextCard) {
    parent.classList.add('inactive');
    parent.classList.remove('active');
    nextCard.classList.add('active');
    nextCard.classList.remove('inactive');

}

changeCard();