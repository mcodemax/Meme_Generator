//listen for submission evt
//store url and funnytxt into vars
//put image below the html form use appendChild()
//overlay funnytxt over the the image
let imageOn = false;

document.querySelector('#submit').addEventListener('click',event => {
    
    event.preventDefault();
    if(imageOn){
        document.querySelector('img').remove();
        document.querySelector('h3').remove();
    } 

    

    const url = document.querySelector('#myURL').value;
    const funnytext = document.querySelector('#funnytext').value;


    //put img below form
    img = document.createElement('img');
    img.src = url;
    document.querySelector('#fullmeme').appendChild(img);

    //overlay funnytxt over img
    txt = document.createElement('h3');
    txt.innerHTML = funnytext;
    document.querySelector('#fullmeme').appendChild(txt);

    imageOn = true;
})