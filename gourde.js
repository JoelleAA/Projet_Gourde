
const data = {
    'prehistoire': {
        image: 'img1.jpg',
        text: ' ' 
    },
    'antiquite': {
        image: 'img2.jpg',
        text: ''
    },
    'moyen_age': {
        image: 'img3.jpg',
        text: ''
    },
    'renaissance': {
        image: 'img4.jpg',
        text: ''
    },
    'moderne': {
        image: 'img5.jpg',
        text: ''
    },
    'siecle19': {
        image: 'img6.jpg',
        text: ''
    },
    'siecle20': {
        image: 'img7.jpg',
        text: ''
    },
    'siecle21': {
        image: 'img8.jpg',
        text: ''
    }
    
};


function showDescription(key) {

    const { image, text } = data[key];


    document.getElementById('overlayImage').src = image;
    document.getElementById('overlayText').innerHTML = text;


    document.getElementById('overlay').style.display = 'flex';
}


function closeOverlay() {
    document.getElementById('overlay').style.display = 'none';
}


document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeOverlay();
    }
});
