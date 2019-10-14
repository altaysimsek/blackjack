//arayüz objesi
var ui = new UI;
var oyun = new game;
//gecikme fonksiyonu


$(document).ready(function(){
    $("#gamePanel").hide();
    $("#winG").hide();
    $("#losG").hide();
    $("#btnReplay").hide();
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
        ui.drawCards("yoTit",yoHand);
        ui.drawCards("opTit",opHand);
        if(yoScore==21 && opScore == 21){
            console.log("Berabere");
        }else if(yoScore ==21){
            console.log("Oyunu kazandın.");
            $("#gamePanel").fadeOut(2000);
            $("#winG").fadeIn(2000);
            $("#btnReplay").fadeIn(2000);

        }
        $("#btnReplay").click(function(){
            window.location.reload()
        });
        $("#dvmBtn").click(function(){
            oyun.drawCard(el,yoHand);
            var yoScore = oyun.readHand(yoHand);
            var opScore = oyun.readHand(opHand);
            ui.writeScore(yoScore,"yoScore");
            ui.writeScore(opScore,"opScore");
            ui.drawCards("yoTit",yoHand);
            ui.drawCards("opTit",opHand);
            if(yoScore > 21 ){
                console.log("Oyunu kayıp ettin.");
                $("#dvmBtn").hide();
                $("#tmmBtn").hide();
                $("#gamePanel").fadeOut(2000);
                $("#losG").fadeIn(2000);
                $("#btnReplay").fadeIn(2000);
            }else if(yoScore == 21){
                console.log("Kazandın");
                $("#dvmBtn").hide();
                $("#tmmBtn").hide();
                $("#gamePanel").fadeOut(2000);
                $("#winG").fadeIn(2000);
                $("#btnReplay").fadeIn(2000);
            }
            
        })
        $("#tmmBtn").click(function(){
            $("#dvmBtn").hide();
            $('#tmmBtn').hide();
            var yoScore = oyun.readHand(yoHand);
            var opScore = oyun.readHand(opHand);
            ui.writeScore(yoScore,"yoScore");
            ui.writeScore(opScore,"opScore");
            if(yoScore==21){
                console.log("oyunu kazandın");
            }else if(opScore ==21){
                console.log("Oyunu kayıp ettin.")
            }else if(opScore > yoScore){
                $("#gamePanel").fadeOut(2000);
                $("#losG").fadeIn(2000);
                $("#btnReplay").fadeIn(2000);
            }else if(opScore<18){
                while(opScore<18){
                    oyun.drawCard(el,opHand);
                    var opScore = oyun.readHand(opHand);
                    ui.writeScore(opScore,"opScore");
                }
                if(opScore > 21){
                $("#gamePanel").fadeOut(2000);
                $("#winG").fadeIn(2000);
                $("#btnReplay").fadeIn(2000);
                }else if(opScore > yoScore){
                $("#gamePanel").fadeOut(2000);
                $("#losG").fadeIn(2000);
                $("#btnReplay").fadeIn(2000);
                }else if(opScore==yoScore){
                    $("#gamePanel").fadeOut(2000);
                    $("#btnReplay").fadeIn(2000);
                    console.log("Berabere");
                }
            }
        })
        
       
        
    })
 });

