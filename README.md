colorup
=======

A jQuery plugin to slowly colorize an image as a user scrolls down a page

What does it actually do?
---

Using a sprite containing two versions of an image (such as dark and light versions), this jQuery plugin will slowly "fill up" the image as you scroll down the page.

I made it for [a friend's blog](http://jure-stern.si/en/blog.html).

How do I use it?
---

1. Include the js file on any page you want it used.
1. In your HTML, put an empty div and give it a unique ID, this is where the image will appear. If you want it to remain in a fixed position on a page, put it inside another div and set its display property to "fixed".
1. Create a sprite containing the two versions of your image. The default version goes on top, the colour/complete version goes below it.
1. In your JS's ready function call colorup() on the div.

Parameters
---

The colorup() function takes one object literal parameter.

*url*: The url for the sprite.
*target* (optional): The element you want the scrolling to be measured against. If a target isn't specified then the document object will be used by default.

An Example
---

    $("#logo").colorup({
      url: "http://i.imgur.com/DduzE.png",
      target: "#my_article"
    });
For the complete example/demo check out [this jsbin](http://jsbin.com/ahoner/25/edit)

Things To Note
---

For some reason, sometimes the 1.8+ versions of jQuery have difficulty figuring out the height of the browser window, and just returns the document height which can cause weird behaviour.

Make sure you use the "<!DOCTYPE html>" doctype, and if that doesn't work, try version 1.7.2 of jQuery.
License
---

Use it for anything you want as long as it's for good and not evil.

Credit
---

Created by [Jon Abrams](http://twitter.com/JonathanAbrams)