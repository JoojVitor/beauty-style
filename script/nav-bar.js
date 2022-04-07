const variable = '<nav class="navbar navbar-fixed-top navbar-light navbar-expand-sm"><img class="navbar-brand" src="../images/Logo-branca.png"></a><div class="d-flex flex-row order-2 order-sm-3 p-3"><ul class="navbar-nav flex-row"><li class="nav-item"><a class="nav-link px-2" href="#"><i class="fa fa-facebook"></i></a></li><li class="nav-item"><a class="nav-link px-2" href="#"><i class="fa fa-instagram"></i></a></li><li class="nav-item"><a class="nav-link px-2" href="#"><i class="fa fa-twitter"></i></a></li></ul><button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"><span class="navbar-toggler-icon"></span></button></div><div class="collapse navbar-collapse order-3 order-sm-2 justify-content-center" id="navbarNavDropdown"><ul class="opcoes navbar-nav p-3"><li class="nav-item active"><a class="nav-link" href="#">Home</a></li><li class="nav-item"><a class="nav-link" href="#">Sobre</a></li><li class="nav-item"><a class="nav-link" href="#">Serviços</a></li><li class="nav-item"><a class="nav-link" href="#">Galeria</a></li><li class="nav-item"><a class="nav-link" href="#">Contato</a></li></ul></div></nav>';
$(document).ready(function() {
    document.getElementById('navigationBar').innerHTML = variable;
});

function onMenu() {
    var x = document.getElementById("topnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
    console.log("gello");
}