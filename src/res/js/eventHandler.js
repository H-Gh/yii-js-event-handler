/**
 * User: h.ghasempour
 * Date: 7/11/2019
 * Time: 8:56 AM
 */

var EventHandler = function () {

    var options = {
        onEventHolderAttribute: "data-on",
        toRunEventsHolderAttribute: "data-events-to-run"
    };

    this.listen = function () {
        $("[" + options.onEventHolderAttribute + "]").each(function (index, element) {
            var eventToRun = $(element).attr(options.onEventHolderAttribute);
            $(element).on(eventToRun, function () {
                triggerEvent(this);
            });
        });
    };

    var triggerEvent = function (element) {
        var eventsString = $(element).attr(options.toRunEventsHolderAttribute);
        if (eventsString === undefined)
            return;
        var events = eventsString.split(" ");
        $.each(events, function (index, action) {
            $(document).trigger(action, element);
        });
    };
};

var eventHandler = new EventHandler();
eventHandler.listen();