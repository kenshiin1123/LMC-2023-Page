const backButton = document.querySelector('.switchSlide-1');
const nextButton = document.querySelector('.switchSlide-2');
backButton.style.userSelect = 'none';
nextButton.style.userSelect = 'none';
const pic1 = document.querySelector('.pic:nth-of-type(1)');
const pic2 = document.querySelector('.pic:nth-of-type(2)');
const courses = ['Computer Science', 'Health Sciences', 'Teacher Education', 'Business and Financial Services', 'Arts and Sciences', 'Criminal Justice Education']
const header = document.querySelector('.header');
const switchSlide = () => {
    let c = 0;
    let i = 1;
    let j = 2;
    header.innerHTML = `${courses[c]}`
    nextButton.addEventListener('click', () => {
        const updateImage = () => {
            pic1.src = `images/gallery/Mr and Ms TCGC/${i}.jpg`
            pic2.src = `images/gallery/Mr and Ms TCGC/${j}.jpg`
            header.innerHTML = `${courses[c]}`
        }

        c++;
        i += 2;
        j += 2;
        if (i > 11 || j > 12 || c > 5) {
            i = 1;
            j = 2;
            c = 0;
            updateImage();
        }
        else {
            updateImage();
        }

    })
    backButton.addEventListener('click', () => {
        const updateImage = () => {
            pic1.src = `images/gallery/Mr and Ms TCGC/${i}.jpg`
            pic2.src = `images/gallery/Mr and Ms TCGC/${j}.jpg`
            header.innerHTML = `${courses[c]}`
        }
        c--;
        i -= 2;
        j -= 2;
        if (i < 1 || j < 2 || c < 0) {
            i = 11;
            j = 12;
            c = 5;
            updateImage();
        }
        else {
            updateImage();
        }
    })
}

switchSlide();

const button = document.querySelector('.button');
button.addEventListener('click', () => {
    window.location.href = 'homepage.html';
})