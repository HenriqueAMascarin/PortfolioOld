window.addEventListener('deviceorientation',function(e){
    const x = Math.round(e.beta);
    const y = Math.round(e.gamma);
    const z = Math.round(e.alpha);
    if(x < 30){
        //Parallax Effect
    document.getElementsByClassName('circles')[0].style.transform = `translateX(-${x}%)`;
    document.getElementsByClassName('circles')[0].style.transform = `translateX(+${x}%)`;
    document.getElementsByClassName('photo-henrique')[0].style.transform = `translateX(-${x}%)`;
    document.getElementsByClassName('photo-henrique')[0].style.transform = `translateX(+${x}%)`;
    }
});