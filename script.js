var icon_linkedin = document.getElementsByClassName('img-linkedin')[0]
var icon_github = document.getElementsByClassName('img-github')[0]
var icon_whatsapp = document.getElementsByClassName('img-whatsapp')[0]
var barra_lateral = document.getElementById('barra-lateral')

function corlinkedin(){
    barra_lateral.style.backgroundColor = 'lightblue'
}

function corGit(){
    barra_lateral.style.backgroundColor = '#9058F5'
}

function corWp(){
    barra_lateral.style.backgroundColor = '#00F56A'
}

function normal(){
    barra_lateral.style.backgroundColor = 'white'
}

icon_linkedin.addEventListener('mouseover', corlinkedin)
icon_github.addEventListener('mouseover', corGit)
icon_whatsapp.addEventListener('mouseover', corWp)
icon_linkedin.addEventListener('mouseout', normal)
icon_github.addEventListener('mouseout', normal)
icon_whatsapp.addEventListener('mouseout', normal)
