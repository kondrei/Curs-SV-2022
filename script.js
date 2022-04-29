//close image on click
let background = document.getElementById('background')
background.addEventListener('click', () =>
    background.style.visibility = 'hidden')

//get images
let images = document.getElementById('galerie').childNodes
//add event to images
for (i = 0; i < images.length; i++) {
    if (images[i].tagName) {
        images[i].children[0].addEventListener('click', (e) => {
            background.style.position = 'fixed'
            background.style.visibility = 'visible'
            document.getElementById('currentImage').src = e.target.src
            document.getElementById('caption').innerText = e.target.alt
        })
    }
}