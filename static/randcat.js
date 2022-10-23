const cats = ['cat1', 'cat2', 'cat3'];
let firstClick = true;

function randCat(){
    // Random function to pick rand image
    let imgId = Math.floor(Math.random() * cats.length)
    if (!firstClick) {
        const childImg = document.getElementById('kitto');
        document.body.removeChild(childImg);
    }

    let catImg = document.createElement('img');
    catImg.id = 'kitto';
    catImg.src = "static/"+cats[imgId]+".jpg";
    catImg.height = 309;
    catImg.width = 550;
    document.body.appendChild(catImg)
    firstClick = false;
}

