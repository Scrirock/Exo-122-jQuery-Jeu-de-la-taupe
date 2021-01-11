const holes = $(".hole");
const scoreBoard = $(".score");
const moles = $(".mole");
let point = 0;

$("#startGame").click(startGame);
$("div .up").click(function (){
    point++
    scoreBoard.html(point);
});

function startGame(){
    let i = 10
    let trou;
    let temps;
    let decomte = setInterval(()=>{
        trou = Math.trunc(Math.random()*6)+1;
        temps = Math.trunc(Math.random()*800)+200;
        numeroTrou = $("div .hole"+trou);

        numeroTrou.addClass("up");
        numeroTrou.on("click", function (){
            point++
            scoreBoard.html(point);
            numeroTrou.removeClass("up");
            numeroTrou.off();
        });
        setTimeout(()=>{
            numeroTrou.removeClass("up");
            numeroTrou.off();
        }, temps);

        if (i===0){
            clearInterval(decomte);
        }
        i--;
        }, 1000);
}