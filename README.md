
  
    
# Yii JavaScript event handler
Using this Library you can add `custom events` to elements. Your `custom events` will run whenever you define.    
    
## Instalation
```composer  
composer require hgh/yii-js-event-handler  
```

## Usage
First include `asset` into your `view`:
```php
YiiJsEventHandlerAsset::register($this);
```
Now create `html` element.
```html
<div data-on="click" data-events-to-run="customEvent anotherCustomEvent">
    Click Me to Run Custom Event
</div>
```
There are two `attribute` that you have to add to your element in order to run `custom events`. `data-on` and `data-events-to-run`.
You put your custom `JS` events into `data-events-to-run`. Separate your `custom events` using `space`. Then using `data-on` specify when these `custom events` should be run. The values that you can put in `data-on` follows `jQuery` events. Visit [Form events](https://api.jquery.com/category/events/form-events/), [Mouse events](https://api.jquery.com/category/events/mouse-events/) and [keyboard events](https://api.jquery.com/category/events/keyboard-events/)


## Sample
##### html
```html
<div data-on="click" data-events-to-run="customEvent anotherCustomEvent">
    Click Me to Run Custom Event
</div>
```

##### jquery
```javascript
$(document).ready(function () {
    $(document).on("customEvent", function () {
        alert("Custom event triggered");
    });

    $(document).on("anotherCustomEvent", function () {
        alert("Another custom event triggered");
    });
});
```
