document.addEventListener('DOMContentLoaded', function(event) {
    let btnRange = document.getElementById('btnRange');
    let images = document.querySelectorAll('.images');
    let imagesImg = document.querySelectorAll('.photo img');
    let bgImage = document.querySelectorAll('.photo__img img');

    bgImage.forEach(function (element) {
        element.addEventListener('mouseover',function () {
            document.body.style.background='url("'+element.src+'")';
        })
    });

    btnRange.addEventListener('mousemove',function () {
        images.forEach(function (element) {
            element.style.gridTemplateColumns='repeat(auto-fill, minmax('+btnRange.value+'px, 1fr))';
        });
        imagesImg.forEach(function (element) {
            element.style.height=btnRange.value+'px';
        })
    })



});