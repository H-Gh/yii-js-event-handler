/**
 * User: h.ghasempour
 * Date: 7/11/2019
 * Time: 8:56 AM
 */


(function ($) {
    $.fn.eventHandler = function (options) {
        var baseOptions = {
            onEventAttribute: "data-on",
            toRunEventsAttribute: "data-events-to-run"
        };
        $.extend(baseOptions, options);
        var eventHandler = new EventHandler(
            $("[" + baseOptions.onEventAttribute + "]"),
            $(this).attr(baseOptions.onEventAttribute),
            $(this).attr(baseOptions.toRunEventsAttribute)
        );
        eventHandler.listen();
    };
})(jQuery);

var EventHandler = function (element, onEvent, eventToRun) {
    this.listen = function () {
        $(element).on(onEvent, function () {
            triggerEvent(this, eventToRun);
        });
    };

    var triggerEvent = function (element, eventToRun) {
        if (eventToRun === undefined)
            return;
        var events = eventToRun.split(" ");
        $.each(events, function (index, event) {
            if (onEvent === event)
                throw new Error("onEvent and event to be run are equal.");
            $(element).trigger(event, element);
        });
    };
};

$(document).ready(function () {
    $("[data-events-to-run]").eventHandler();
    $("[data-hey]").eventHandler({
        onEventAttribute: "data-hey",
        toRunEventsAttribute: "data-to"
    });
});
