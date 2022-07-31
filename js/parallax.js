window.addEventListener('deviceorientation',function(e){
    const x = Math.round(e.beta);
    const y = Math.round(e.gamma);
    const z = Math.round(e.alpha);

    document.getElementsByClassName('xtxt')[0].innerText = "X-Axis = " + x;
    document.getElementsByClassName('ytxt')[0].innerText = "Y-Axis = " + y;
    document.getElementsByClassName('ztxt')[0].innerText = "Z-Axis = " + z;
    
        //Parallax Effect
    document.getElementsByClassName('circles')[0].style.transform = `translateX(-${x}%)`;
    document.getElementsByClassName('circles')[0].style.transform = `translateX(+${x}%)`;
    document.getElementsByClassName('photo-henrique')[0].style.transform = `translateX(-${x}%)`;
    document.getElementsByClassName('photo-henrique')[0].style.transform = `translateX(+${x}%)`;
    
});