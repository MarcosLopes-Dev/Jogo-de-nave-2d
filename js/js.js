function start(){

    $("#inicio").hide(); // oculta a div inicio
    
    //cria divs dos jogadores
    $("#fundoGame").append("<div id='jogador' class='animaJogador'></div>");
    $("#fundoGame").append("<div id='inimigo1' class='animaInimigo1'></div>");
    $("#fundoGame").append("<div id='inimigo2'></div>");
    $("#fundoGame").append("<div id='amigo' class='animaAmigo'></div>");

    var jogo = {};
    var TECLA = {
        UP: 38,
        DOWN: 40,
        D: 68
    }

    jogo.pressionou = [];

//verifica se apertou algo

    $(document).keydown(function(e){ jogo.pressionou[e.which] = true;});

    $(document).keyup(function(e){ jogo.pressionou[e.which] = false;});

    jogo.timer = setInterval(loop,30);

    function loop()
    {
        moveFundo();
        moveJogador();
    }

    function moveFundo() {

        esquerda = parseInt($("#fundoGame").css("background-position"));
        $("#fundoGame").css("background-position",esquerda-1);
    }

    function moveJogador(){

        if(jogo.pressionou[TECLA.UP]){
           
            var topo = parseInt($("#jogador").css("top"));
            $("#jogador").css("top",topo-10);
        }
        if(jogo.pressionou[TECLA.DOWN]){
           
            var topo = parseInt($("#jogador").css("top"));
            $("#jogador").css("top",topo+10);
        }
        if(jogo.pressionou[TECLA.D]){
            //disparo();
        }
    }
}