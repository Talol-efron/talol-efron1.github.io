document.addEventListener("DOMContentLoaded", function () {
    var targetElement = document.querySelectorAll('.list .entity, .animationTarget');
    for (let i = 0; i < targetElement.length; i++) {
        targetElement[i].style.opacity = '0';
        targetElement[i].style.transition = 'opacity 0.2s ease-in-out 0s';
        targetElement[i].style.visibility = 'hidden';
    }
    var counter = 0;
    function showPictures() {
        if (counter < targetElement.length) {
            targetElement[counter].style.visibility = 'visible';
            targetElement[counter].style.opacity = '1';
            counter++;
            setTimeout(showPictures, 200);
        }
    }
    setTimeout(showPictures, 1000); // Wait for 1 second before starting to show pictures

    document.addEventListener("scroll", function () {
        const targetElement = document.querySelectorAll('.animationTarget');
        for (let i = 0; i < targetElement.length; i++) {
            const getElementDistance = targetElement[i].getBoundingClientRect().top + targetElement[i].clientHeight * 0.6;
            if (window.innerHeight > getElementDistance) {
                targetElement[i].classList.add("show");
            }
        }
    });
});