function Observable() {
    var watchers = [];
    this.sendMessage = function (notif) {
        for (var i = 0, fullLength = watchers.length; i < fullLength; i++) {
            watchers[i].notify(notif);
        }
    };
    this.addWatcher = function (watcher) {
        watchers.push(watcher)
    };
}
function Watcher(action) {
    this.notify = function (notif) {
        action.push(notif);
    };
}


var obs = new Observable();
var itemObs = new Watcher(function (id) {
    $('.item-list').append(
        $('<li></li>')
            .addClass('basket_product')
            .text('Tovar' + id)
    );
});
var modal = new Watcher(function (id) {
    var textItem = 'Item' + id + 'was added!';
    $('.bought_message').text(textItem);
    $('.bought').removeClass('bought_hide');
})
obs.addWatcher(itemObs);
obs.addWatcher(modal);

var product=document.getElementsByClass('product');
product.on("click", function() {
    console.log('started')
    var id = $(this).attr('data-id');
    obs.sendMessage(id);
});
