/**
 * Main instantiation logic for tinyToast
 */
var minitoast = function () {
    //Create instance of the methods
    var instance = Object.create(t_mets);
    //Set the default options
    instance.opts = {
        /**
         * Timeout for the notifications
         */
        notif: {
            timeout: 5000
        },
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
         * [Default Message, Message Heading, Classname]
         */
        msgs: {
            s: ['', 'Success', 'mt-success'],
            w: ['', 'Warning', 'mt-warning'],
            e: ['', 'Error', 'mt-error'],
            i: ['', 'Info', 'mt-info'],
            d: ['', 'Notification', 'mt-default']
        }

    };
    instance.init();
    return instance;
};


/**
 * This contains all the functions that will be used by the lib
 */
var t_mets = {
    /**
     * initialised the base container with its options
     */
    init: function () {
        var cont = document.getElementById('mt-cont');
        if (!cont) {

            //Set some base styles
            cont = document.createElement('div');
            cont.id = 'mt-cont';
            cont.classList.add('mt-cont');

            document.body.appendChild(cont);
        }
    },
    /**
     * base entry for the success message
     */
    success: function (msg) {
        var toastmsg = msg || this.opts.msgs.s[0];
        this.append(toastmsg, 's');
    },
    /**
     * base entry for the warning message
     */
    warning: function (msg) {
        var toastmsg = msg || this.opts.msgs.w[0];
        this.append(toastmsg, 'w');
    },
    /**
     * base entry for the error message
     */
    error: function (msg) {
        var toastmsg = msg || this.opts.msgs.e[0];
        this.append(toastmsg, 'e');
    },
    /**
     * base entry for the info message
     */
    info: function (msg) {
        var toastmsg = msg || this.opts.msgs.i[0];
        this.append(toastmsg, 'i');
    },
    /**
     * base entry for the default message
     */
    default: function (msg) {
        var toastmsg = msg || this.opts.msgs.d[0];
        this.append(toastmsg, 'd');
    },
    append: function (msg, type) {
        //Get the options for the notification container
        var tstOpts = this.opts.notif;

        //Get the options for messages
        var msgOpts = this.opts.msgs;

        //Create the toast element
        var tst = document.createElement('div');
        tst.classList.add(msgOpts[type][2], 'mt-notif', 'mt-slide-fade');
        tst.style.animationDuration = (tstOpts.timeout /1000)+'s';

        //Create the heading, and the message containers, insert the text, and then append them into the notification div
        var headingP = document.createElement('p');
        headingP.innerText = msgOpts[type][1];
        tst.appendChild(headingP);
        var messageP = document.createElement('p');
        messageP.innerText = msg;    
        tst.appendChild(messageP);
        //Finally insert it into the main notification container, and then set up the timeout to remove it again
        document.getElementById('mt-cont').appendChild(tst);
        setTimeout(function () {
            document.getElementById('mt-cont').removeChild(document.getElementById('mt-cont').firstChild);
        }, tstOpts.timeout);
    }
};



