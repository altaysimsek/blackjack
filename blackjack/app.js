//arayüz objesi
var ui = new UI;
var oyun = new game;


$(document).ready(function(){
    $("#gamePanel").hide();
    $("#btnStart").click(function(){
        $("#btnStart").hide();
        ui.addToList("Oyun başladı.");
        $("#gamePanel").show();
        var el = oyun.createDeck();
        //
        ui.addToList("52'lik deste oluşturuldu.");
        var opHand=[];
        var yoHand=[];
        //
        ui.addToList("Rakibin ve senin elin oluşturuldu.");
        oyun.drawCard(el,opHand);
        //
        ui.addToList("Rakip bir kart çekti.");
        oyun.drawCard(el,yoHand);
        //
        ui.addToList("Sen bir kart çektin.");
        oyun.drawCard(el,opHand);
        //
        ui.addToList("Rakip bir kart çekti.");
        oyun.drawCard(el,yoHand);
        //
        ui.addToList("Sen bir kart çektin.");
        var yoScore = oyun.readHand(yoHand);
        var opScore = oyun.readHand(opHand);
        ui.writeScore(yoScore,"yoScore");
        ui.writeScore(opScore,"opScore");
        //console.log(yoHand+opHand);eldeki kartları döner
        //
        ui.addToList("Puanlar hesaplandı");
        ui.drawCards("yoScore",yoHand);
        ui.drawCards("opTit",opHand);
        
        
    })
 });

