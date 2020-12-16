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
    var velocidade = 5;
    var posicaoY = parseInt(Math.random() * 334);

    jogo.pressionou = [];

//verifica se apertou algo

    $(document).keydown(function(e){ jogo.pressionou[e.which] = true;});

    $(document).keyup(function(e){ jogo.pressionou[e.which] = false;});

    jogo.timer = setInterval(loop,30);

    function loop()
    {
        moveFundo();
        moveInimigo();
        moveInimigo2();
        moveJogador();
        moveAmigo();
       
    }

    function moveFundo() {

        esquerda = parseInt($("#fundoGame").css("background-position"));
        $("#fundoGame").css("background-position",esquerda-1);
    }

    function moveInimigo(){
        posicaoX = parseInt($("#inimigo1").css("left"));
        $("#inimigo1").css("left",posicaoX-velocidade);
        $("#inimigo1").css("top",posicaoY);
            
            if(posicaoX<=0) {
                posicaoY = parseInt(Math.random() * 334);
                $("#inimigo1").css("left", 694);
                $("#inimigo1").css("top",posicaoY);
            }

    }

    function moveInimigo2(){
        posicaoX = parseInt($("#inimigo2").css("left"));
        $("#inimigo2").css("left",posicaoX-3);
            
            if(posicaoX<=0) {
                $("#inimigo2").css("left", 775);
            }

    }

    function moveAmigo(){
        posicaoX = parseInt($("#amigo").css("left"));
        $("#amigo").css("left",posicaoX+1);
            
            if(posicaoX>906) {
                $("#amigo").css("left", 0);
            }

    }

    function moveJogador(){

        if(jogo.pressionou[TECLA.UP]){
           
            var topo = parseInt($("#jogador").css("top"));
            $("#jogador").css("top",topo-10);

                if(topo<=0){
                $("#jogador").css("top",topo+10)
                }
        }
        if(jogo.pressionou[TECLA.DOWN]){
           
            var topo = parseInt($("#jogador").css("top"));
            $("#jogador").css("top",topo+10);

            if(topo>=434){
                $("#jogador").css("top",topo-10)
                }
        }
        if(jogo.pressionou[TECLA.D]){
            //disparo();
        }
    }
}