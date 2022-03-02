const showcase = document.querySelector('.showcase');
const menuToggle = document.querySelector('.toggle');


menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        showcase.classList.toggle('active');
})

// scroll
function toggleAnimation(el) {
        var rect = el.getClientRects()[0];
        var heightScreen = window.innerHeight;
        // Check el co trong man hinh khong !
        if (!(rect.bottom < 0 || rect.top > heightScreen)) {
                // Ben trong thi them start
                el.classList.add('start')
        } else {
                // Ben ngoai thi xoa start
                el.classList.remove('start')
        }
}

function checkAnimation(){
        var animationElements = document.querySelectorAll('.show-on-scroll');
        animationElements.forEach((el) => toggleAnimation(el))
}
window.onscroll = checkAnimation