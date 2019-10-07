function game(){

}
game.prototype.createDeck = function () {
    var sayi=['A',2,3,4,5,6,7,8,9,'B','Q','J','K'];
    var unvan=['D','H','C','S'];
    var deste =[]
    sayi.forEach(element => {
        unvan.forEach(item =>
            {
            deste.push(element+item);  
            });
    });
    return deste;
}
game.prototype.drawCard = function (deste,el) {
    var rnd = Math.floor(Math.random() * (deste.length+1));
    //console.log(rnd);random sayi söyle
    var selectedCard = deste[rnd];
    deste.splice(rnd-1,1);
    //console.log(deste);patlayan sayı ile desteyi göster
    el.push(selectedCard);
}
game.prototype.readHand =function (hand) {
    var tp = 0 ;
    hand.forEach(kart =>{
        console.log("CARD : "+kart[0]+kart[1]);
        var card = {
            deger : kart[0],
            suit : kart[1],
        };
        if(card.deger == "Q" || card.deger == "K" || card.deger == "J" || card.deger == "B" ){
            tp=tp+10;
            console.log(card);
        }else{
            if(card.deger == "A"){
                tp=tp+1;
            }else{
                tp=tp+parseInt(card.deger);
                console.log(card);

            }
            
        }
        

    });
    return tp;
    
}