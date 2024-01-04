const video = document.querySelector('video');
const logoBox = document.querySelector('.logo-box');
video.volume = .20;

const candidateDiv = document.querySelector('#mrms div');
// mrms video
const mrmsVideo = document.querySelector('#mrms-video')
mrmsVideo.volume = .20;
//arrow up
const arrowUp = document.querySelector('#arrowUp');

const logo1 = document.querySelector('.logo1')
const link1 = document.createElement('a');
link1.href = 'https://www.facebook.com/tcgcluxmundi'


const logo2 = document.querySelector('.logo2')
const link2 = document.createElement('a');
link2.href = 'https://www.facebook.com/gadtcICS'


logo1.addEventListener('click', () => {
    window.open(link1, '_blank');
})
logo2.addEventListener('click', () => {
    window.open(link2, '_blank');
})

document.addEventListener('DOMContentLoaded', function () {
    const slide2H1 = document.querySelector('.slide-2 h1');
    slide2H1.classList.add('hide');
    // arrow up start
    arrowUp.classList.add('scroll-up-1');
    window.addEventListener('scroll', function () {
        var scrollPosition = window.scrollY;
        if (scrollPosition > 1500) {
            arrowUp.classList.remove('scroll-up-1');
        } else {
            arrowUp.classList.add('scroll-up-1');
        }
        arrowUp.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        })
        // arrow up script end

        //show video
        if (scrollPosition >= 700 && scrollPosition <= 1700) {
            video.play()
        }
        else {
            video.pause()
        }
        if (scrollPosition >= 977) {
            slide2H1.classList.remove('hide');

        } else {
            slide2H1.classList.add('hide');

        }
        //show candidate
        if (scrollPosition >= 1850) {
            candidateDiv.classList.add('show-candidate')
        } else {
            candidateDiv.classList.remove('show-candidate')
        }
        // show mrms-video
        if (scrollPosition >= 2150 && scrollPosition <= 3100) {
            mrmsVideo.play()
        } else {
            mrmsVideo.pause()
        }

        // console.log('Scroll Position: ' + scrollPosition);
    });
});
const main = document.querySelector('main');
const imageElements = document.querySelectorAll('.cheerdance-img-2');

function addImageClickEvent(imageElement) {
    imageElement.addEventListener('click', () => {
        const div = document.createElement('div');
        const button = document.createElement('h1');
        const imageShow = imageElement.cloneNode(true);
        button.innerHTML = '&#10006;'
        main.appendChild(div);
        div.appendChild(button);
        div.appendChild(imageShow);
        div.classList.toggle('fullpicture');
        button.classList.toggle('exit-btn');
        imageShow.classList.toggle('fullpicture-img');

        button.addEventListener('click', () => {
            div.classList.toggle('fullpicture');
            imageShow.remove();
            button.remove();
            div.remove();
        });
    });
}

imageElements.forEach((imageElement) => {
    addImageClickEvent(imageElement);
});

video.onerror = function (event) {
    console.error('Error occurred during video playback', event);
};

mrmsVideo.onerror = function (event) {
    console.error('Error occurred during mrms video playback', event);
};



const boxy = document.querySelector('.candidates-h1-box');
const arrow1 = document.querySelector('.arrows:nth-of-type(1)');
const arrow2 = document.querySelector('.arrows:nth-of-type(2)');
boxy.style.userSelect = "none";
arrow1.style.userSelect = "none";
arrow2.style.userSelect = "none";
boxy.addEventListener('mouseover', () => {
    arrow1.classList.toggle('arrow1');
    arrow2.classList.toggle('arrow2');
})
boxy.addEventListener('click', () => {
    window.location.href = 'candidate.html';
})
boxy.addEventListener('mouseout', () => {
    arrow1.classList.toggle('arrow1');
    arrow2.classList.toggle('arrow2');
})

arrowUp.addEventListener('mouseover', () => {
    arrowUp.classList.toggle('scroll-up-2-stop')
})
arrowUp.addEventListener('mouseout', () => {
    arrowUp.classList.toggle('scroll-up-2-stop')
})
