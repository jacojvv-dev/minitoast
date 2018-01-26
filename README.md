# minitoast
**Just another js lib to display small popup messages, using only javascript**

## Why?

In my search for a very simple lib to just display notifications, I got frustrated with the current standing.
Turns out we either need to pay the jQuery tax to make this work, or include hundreds of obsolete lines to display a simple toast-like message.
So I decided I would make a small tradeoff, less functionality (removing some of the stuff I wouldnt have used anyway), for less code, and thus, faster page loads and less stuff laying around.

## So What?

Well, if you feel like loading jQuery, a notification library, 10 other jQuery plugins, 950kb background images, and who knows what else, do it. That is your right.
I just want to display a simple notification. I dont want it to tween and then tell me the current distance to Mars while also brewing me coffee.
So thats what, if you don't want this, move on.

## Usage

Installation
1. clone the repo
2. `npm install`
3. `npm run watch` to build
4. `npm run prod` to build  minified version

Import and inititalise.

```javascript
    import minitoast from 'path/to/minitoast';
    let t = new minitoast();
```

After that, you call the functions as follows.

```javascript
    //Without any messages
    t.success();
    t.warning();
    t.error();
    t.info();
    t.default();
    //With a message included
    t.success('Everything went well');
    t.warning('Something was not quite right');
    t.error('An error has occured');
    t.info('Value changed');
    t.default('Some generic message')
```

Ain't that just too simple? Without jQuery even!

## Customisation

Ovveriding the default properties is super easy, simply access them using dot notation

```javascript
    //Options for notifications
    notif: {
        timeout: 2500,
    }

    //Change them as following
    t.notif.stl.marginTop = "9001px"; //Over 9000

    /**
    * Default messages  & colors for the popup
    * Colors courtesy of https://flatuicolors.com/
    * 
    * s - Success
    * w - Warning
    * e - Error
    * i - Information
    * d - Default
    * 
    * Array Props
    * [Default message, Message heading, Color, Class name]
    */
    msgs: {
        s: ['', 'Success', '#27ae60','mini-success'],
        w: ['', 'Warning', '#f39c12','mini-warning'],
        e: ['', 'Error', '#c0392b','mini-error'],
        i: ['', 'Info', '#2980b9','mini-info'],
        d: ['', 'Notification', '#2c3e50','mini-default']
    }

    //Change them like such
    t.msgs.s[0] = "Everthing went superbly!"

```

Every instance is spawned with a class attached, you can use the class to customise and ovveride the default style. Just write some css, super easy.

```css
    /* The main container for all notifications*/
    .mt-cont{
       /*
        * Your css here
        */
    }
    /* A class that is applied to all notifications */
    .mt-notif{
       /*
        * Your css here
        */
    }
    /* The success message */
    .mt-success{
       /*
        * Your css here
        */
    }
    .mt-warning{
       /*
        * Your css here
        */
    }
    .mt-error{
       /*
        * Even more of your css here
        */
    }
    .mt-info{
       /*
        * Your css here
        */
    }
    .mt-default{
       /*
        * Guess what!? More of your css here
        */
    }
```