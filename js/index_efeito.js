var iconmenu = document.querySelectorAll('.icon-menu'); 

iconmenu[0].addEventListener('click', ()=> {

    // Efeito de opacidade

    let efeitomenu = document.getElementById('efeito-menu'); 

    if(efeitomenu.classList.contains('hide')) {

        efeitomenu.classList.add('show');
        efeitomenu.classList.remove('hide');

    } else {

        efeitomenu.classList.add('hide');
        efeitomenu.classList.remove('show');
    }

})