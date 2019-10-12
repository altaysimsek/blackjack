function UI() {
    
}

UI.prototype.addToList = function (mesaj) {
    var zaman = new Date();
    $("#logGing").append('<li class="list-group-item">'+zaman.getHours()+':'+zaman.getUTCMinutes()+':'+zaman.getSeconds()+' - '+mesaj+'</li>');
}
UI.prototype.writeScore = function (toplam,id) {
    $("#"+id).text(function () {
        return ("Score : "+toplam);
    })
    
}
UI.prototype.drawCards = function (id,deste) {
        $("#"+id).empty(".resim");

    deste.forEach(element => {
        var card = {
            suit : element[1],
            deger : element[0]
        }
        $("#"+id).append('<img src="img/'+card.deger+card.suit+'.png" class="resim" width="90px" height="132px">');
    });
    
}