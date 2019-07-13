
  
    
      
# Yii JavaScript event handler  
Using this Library you can trigger your `custom events` on some another elements trigger.      
      
## Instalation  
```
 composer require hgh/yii-js-event-handler
```  
  
## Usage  
### Register Yii2 Asset
```php  
YiiJsEventHandlerAsset::register($this);  
```  

### Instantiate jQuery Plugin
There are two way of instantiate this `jQuery` plugin.
#### Use default attributes
To use default options you have to add two predefined attribute to your `html` element. You put your custom `JS` events into `data-events-to-run`. Separate your `custom events` using `space`. Then using `data-on` specify when these `custom events` should be trigger. The values that you can put in `data-on` follows `jQuery` events. Visit [Form events](https://api.jquery.com/category/events/form-events/), [Mouse events](https://api.jquery.com/category/events/mouse-events/) and [keyboard events](https://api.jquery.com/category/events/keyboard-events/) .
```html
<div data-on="click" data-events-to-run="customEvent anotherCustomEvent">  
```

#### Define your custom attributes
In other hand, You can define your custom attributes. For this you have to `instantiate` `eventHandler` plugin.
```javascript
$(document).ready(function () {
    $("[data-my-custom-on-attribute]").eventHandler({
        onEventAttribute: "data-my-custom-on-attribute",
        toRunEventsAttribute: "data-my-custom-to-run-events-attribute"
    });
});
```
Now, you can use these attributes like this:
```html
<div data-my-custom-on-attribute="click" data-my-custom-to-run-events-attribute="customEvent anotherCustomEvent">  
```
  
## Sample  
##### html  
```html  
<div data-on="click" data-events-to-run="customEvent anotherCustomEvent">  
 Click Me to Run Custom Event</div>  
```  
  
##### jquery  
```javascript  
$(document).ready(function () {  
  $(document).on("customEvent", function () {  
  alert("Custom event triggered");  
 });  
  $(document).on("anotherCustomEvent", function () {  
  alert("Another custom event triggered");  
 });});  
```
