function UI() {
    
}
var zaman = new Date();
UI.prototype.addToList = function (mesaj) {
    $("#logGing").append('<li class="list-group-item">'+zaman.getHours()+':'+zaman.getUTCMinutes()+':'+zaman.getSeconds()+' - '+mesaj+'</li>');
}
UI.prototype.writeScore = function (toplam,id) {
    $("#"+id).text(function () {
        return ("Score : "+toplam);
    })
    
}
UI.prototype.drawCards = function (id,deste) {
    
    deste.forEach(element => {
        var card = {
            suit : element[1],
            deger : element[0]
        }
        $("#"+id).after('<img src="img/'+card.deger+card.suit+'.png" width="90px" height="132px">');
    });
    
}