window.addEventListener('deviceorientation',function(e){
    const x = Math.round(e.beta);
    const y = Math.round(e.gamma);
    const z = Math.round(e.alpha);

    //Parallax Effect
    document.getElementsByClassName('parallax')[0].style.transform = `translateX(-${x}%)`;
    document.getElementsByClassName('parallax')[0].style.transform = `translateX(+${x}%)`;
});