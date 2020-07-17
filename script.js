 //const animais = document.getElementById('animais');

 //console.log(animais.innerText);

 //const gridSectionHTML = document.getElementsByClassName('grid-section');
 //const gridSectionNode = document.querySelectorAll('.grid-section');
 
 //console.log(gridSectionHTML);
 //console.log(gridSectionNode);

 //const img = document.querySelectorAll('img');
 //console.log(img);

 //const imagensAnimais = document.querySelectorAll('img[src^="img/imagem"]');
//console.log(imagensAnimais);

//const paragrafos = document.querySelectorAll('p');
//console.log(paragrafos[--paragrafos.length]);


// Arrow Fuction
//const imgs = document.querySelectorAll('img');

//imgs.forEach((item) => {
    //console.log(item);
//});

// Eventos

function handlekeyboard(event){
    if(event.key === 't') {
        console.log(event.key);
        document.body.classList.toggle('fullscreen');
    }
}

window.addEventListener('keydown', handlekeyboard);
