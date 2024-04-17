
function startAnimation() {
    var cat = document.getElementById("omnom");
    cat.style.bottom = '0px'; // иначе двигаем вниз
    for (var i = 1; i <= 15; i++) {
        var img = document.createElement('img');
        img.setAttribute('src', 'styles/img/nugget.png');
        img.setAttribute('class', 'floating-image');
        img.style.left = Math.floor(Math.random() * window.innerWidth) + 'px';
        document.body.appendChild(img);
        var audio = document.getElementById("audioPlayer");
        audio.addEventListener("ended", function () {
                cat.style.bottom = '-270px'; // устанавливаем параметр bottom картинки cat обратно в -270px
        });
        audio.play();
        animateImage(img);

    }

}

function animateImage(img) {
    var speed = Math.floor(Math.random() * 5) + 25; // случайная скорость
    var interval = setInterval(function () {
        var currentPosition = img.offsetTop;
        img.style.top = currentPosition + speed + 'px';

        if (currentPosition > window.innerHeight) {
            clearInterval(interval);
            img.remove();

        }
    }, 1000 / 30); // обновление позиции каждые 30

    img.addEventListener('transitionEnd', function() {
    });
}
