function scrollFunction(section){
    let e = document.getElementById(section);
    /*const y = e.getBoundingClientRect().top + window.pageYOffset - 75;   
    window.scrollTo({top: y, behavior: 'smooth'});
    */
    e.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
        inline: 'start'
      });
}

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}