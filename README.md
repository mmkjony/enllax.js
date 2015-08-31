#Enllax.js : jQuery Parallax Scrolling Effect

An ultra-lightweight (~1kb) and super easy to use plugin for applying parallax scrolling effect to any scrolling element. You can set parallax scrolling effects to both foreground and background elements, and also in both directions (vertically or horizontally).

### Parallax scrolling effect is never been easier

[View Demo](http://mmkjony.github.io/enllax.js/)



## How to Use:

**1. At first include [jQuery](http://jquery.com/download/) and jquery.enllax.js**
````html
<script src="http://code.jquery.com/jquery-1.11.3.min.js"></script>
<script src="jquery.enllax.min.js"></script>
````

**2. Activate the Plugin**
````javascript
//very simple activation
$(window).enllax();

//or
$('#some-id').enllax();  // This selector should be parent of parallax scrolling elements
````

### Parallax Elements:
------
If you want your elements to scroll at a different speed, or you can say scroll with parallax effect, then this plugin made this super easy. All you have to do is to use data attributes on elements, where you want to add parallax scrolling effect.

Parallax scrolling effects can be in two types. One is background scrolling effect, and another is for foreground elements to scroll with different speed. In both types, you can apply effects in both directions (vertically and horizontally).

**1. Parallax on Backgrounds:** <br />
To allow background image to move with different speed, just use a data attribute with a numeric value as a multiplier for scrolling speed. Less is slower, and 1 is normal. Here's an example:

````html
<div data-enllax-ratio="0.5">...</div>
````

**2. Parallax on Foreground Elements:** <br/>
To add a different scrolling speed to any foreground element, you have to add another data attribute. And, the value for this attribute should be 'foreground'. Default value is 'background'. Here's an example:

````html
<img src="path/to/image" data-enllax-ratio=".5" data-enllax-type="foreground" />
````

**3. Parallax on Direction-ware:** <br/>
Parallax effect can now be applied in both vertical and horizontal directions. You have to add another data attribute additionally. The value for this data attribute can be 'vertical' or 'horizontal'. And, default value is 'vertical'

````html
<!-- background -->
<div data-enllax-ratio=".5" data-enllax-direction="horizontal">...</div>

<!-- foreground -->
<img src="path/to/image" data-enllax-ratio=".5" data-enllax-type="foreground" data-enllax-direction="horizontal" />
````


### You can also use some default value for all parallax scrolling element

````javascript
$(window).enllax({

//default values

// type can be defined as it is background parallax scrolling element or foreground scrolling element.
type: 'background',  // another value for type is 'foreground'.

ratio: 0.5,  // multiplier for scrolling speed. Less is slower. Default: '0'.

direction: 'vertical' // another value for direction is 'horizontal'.

});
````


### Credit and License
------
This plugin is maintaining by [MMK Jony](https://github.com/mmkjony/), and is licensed under [MIT](LICENSE).
