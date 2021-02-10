//scroll con botones==============================
{

document.getElementById("logo").onclick = () => {
    window.scrollTo({
        top : 0,
        behavior : "smooth"
    });
}
document.getElementById("uno").onclick = () => {
    window.scrollTo({
        top : 50,
        behavior : "smooth"
    });
}
document.getElementById("dos").onclick = () => {
    window.scrollTo({
        top : 700,
        behavior : "smooth"
    });
}
document.getElementById("tres").onclick = () => {
    window.scrollTo({
        top : 1400,
        behavior : "smooth"
    });
}
document.getElementById("cuatro").onclick = () => {
    window.scrollTo({
        top : 2100,
        behavior : "smooth"
    });
}

}
//opacidad del header=============================
{

var page_height = document.body.scrollHeight - window.innerHeight;

window.addEventListener("scroll" , () => {
    var scroll = (window.pageYOffset / page_height) * 100;
    
    if (scroll >= 19.180142910868746) {
        document.getElementById("header").style.background = ` #272727`
        document.getElementById("logo").src = "img/logo (modificado) blanco.png"

    } else {
        document.getElementById("header").style.background = ` rgba(37, 37, 37, 0)`
        document.getElementById("logo").src = "img/logo (modificado)2.png"
    }
})

}
//texto animado===================================
{

var texto = "-empresa desarrolladora-";

var texto2 = "-programando horizontes-";

var str = texto.length

var speed = 100;

var i = 0;

var d = 0;

var m = 0;

function borrar() {
    document.getElementById("emp").innerHTML = ""
    i = 0
    if (d == 0) {
        setTimeout(type2 , 0)
        d++
    } else {
        setTimeout(type , 0)
        d = 0
    }
    
}

function type() {
    if (i <= str) {
        document.getElementById("emp").innerHTML += texto.charAt(i)
        i++
        setTimeout(type , 100)
    }
    if (i == str) {
        setTimeout(aparecer_guion, 500)
    }
}
setTimeout(type() , 100)

function type2() {
    if (i <= str) {
        document.getElementById("emp").innerHTML += texto2.charAt(i)
        i++
        setTimeout(type2 , 100)
    }
    if (i == str) {
        setTimeout(aparecer_guion2, 500)
    }
}


function aparecer_guion() {
    document.getElementById("emp").innerHTML = "-empresa desarrolladora-_"
    setTimeout(borrar_guion , 500)
}
function borrar_guion() {
    document.getElementById("emp").innerHTML = "-empresa desarrolladora-"
    m++
    if (m == 3) {      
        m = 0
        borrar()
    } else {
        setTimeout(aparecer_guion , 500)  
    }
}

function aparecer_guion2() {
    document.getElementById("emp").innerHTML = "-programando horizontes-_"
    setTimeout(borrar_guion2 , 500)
}
function borrar_guion2() {
    document.getElementById("emp").innerHTML = "-programando horizontes-"
    m++
    if (m == 3) {      
        m = 0
        borrar()
    } else {
        setTimeout(aparecer_guion2 , 500)  
    }
}

}
//lenguajes=======================================
{

var a = 1;
var n = 1;

function opaci() {

    document.getElementById(`img_cambiante${a}`).style.opacity = "100%"
    a++

    if (a < 10) {
        setTimeout(opaci , 1000);        
    }
    if (a == 9) {
        a = 1
    }
}
function opaci_bajar() {
    document.getElementById(`img_cambiante${n}`).style.opacity = "0%"
    n++
    if (n < 10) {
        setTimeout(opaci_bajar , 1000)        
    }
    if (n == 9) {
        n = 1
    }
}
setTimeout(opaci , 0)
setTimeout(opaci_bajar , 1000)
}
//loader==========================================
{

window.onload = function() {

var carga = document.getElementById("loader");

    carga.style.opacity = "0%";

    setTimeout(() => {

        carga.style.zIndex = "-1000"; 

    }, 1000);

}

}
//formulario======================================
{

    inner_boton.addEventListener("mousedown" , () =>{

        var errores = "";

        if (document.getElementById("nombre").value == "") {
            errores += `<h1><i class="fas fa-times"></i> ingrese el nombre</h1>`;
        };
        if (document.getElementById("e-mail").value == "") {
            errores += `<h1><i class="fas fa-times"></i> ingrese el e-mail</h1>`;
        };
        if (document.getElementById("asunto").value == "") {
            errores += `<h1><i class="fas fa-times"></i> ingrese el asunto</h1>`;
        };

        if (errores == "" == false) {
            document.getElementById("rellena").innerHTML = errores;
            outer_rellena.style.zIndex = "1000";
            setTimeout(() => {
            outer_rellena.style.display = "block";
            outer_rellena.style.opacity = "100%";                
            }, 100);
        } else {
            document.getElementById("rellena").innerHTML = "";
        }
    })

    
    boton_de_cerrar.addEventListener("mousedown" , () => {
        outer_rellena.style.display = "hidden";
        outer_rellena.style.opacity = "0%";
        setTimeout(() => {
            
            outer_rellena.style.zIndex = "-2000";

        }, 100);
    })

}
//scroll reveal===================================
{

    ScrollReveal().reveal('.seccion-2');
    ScrollReveal().reveal('.seccion-3');
    ScrollReveal().reveal('.seccion-4');

}
//cambio de titulo================================
{

var title = 1;
var j = 0;


setInterval(function qwerty(){

        document.getElementById("titlem").textContent = "Horizon Web Designs";

    setTimeout(function asdfg(){

        document.getElementById("titlem").textContent = "Programando horizontes";
                
    }, 1500);
}, 3000);

}