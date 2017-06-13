/**
 * Main instantiation logic for tinyToast
 */
var minitoast = function () {
    //Create instance of the methods
    var instance = Object.create(t_mets);
    //Set the default options
    instance.opts = {
        /**
         * Options for the toast item container
         */
        cont: {
            align: 'bottom-right',
            edge: '20px',
            stl: {
                width: '250px',
                position: 'fixed',
                color: 'white'
            }
        },
        /**
         * Options for the actual toast messages
         */
        notif: {
            timeout: 2500,
            stl: {
                marginTop: '7px',
                marginBottom: '7px',
                padding: '12px',
                borderRadius: '3px'
            },
            headStl: {
                margin: '0px',
                padding: '0px',
                fontWeight: 'bold'
            },
            msgStl: {
                margin: '0px',
                padding: '0px'
            }
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
         * [Default Message, Message Heading, Color]
         */
        msgs: {
            s: ['', 'Success', '#27ae60', 'mini-success'],
            w: ['', 'Warning', '#f39c12', 'mini-warning'],
            e: ['', 'Error', '#c0392b', 'mini-error'],
            i: ['', 'Info', '#2980b9', 'mini-info'],
            d: ['', 'Notification', '#2c3e50', 'mini-default']
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
            //Get container options
            var opt = this.opts.cont;
            var stls = opt.stl;

            //Set some base styles
            cont = document.createElement('div');
            cont.id = 'mt-cont';
            cont.classList.add('mt-cont');

            //This loop will apply all styles in the stl object of the container
            //This loop allows allows the styles to be extended, as much as the user wants
            for (var key in stls) {
                if (stls.hasOwnProperty(key)) {
                    cont.style[key] = stls[key];
                }
            }

            //Set up the edge spacing
            var algn = opt.align.split('-');
            cont.style[algn[0]] = opt.edge;
            cont.style[algn[1]] = opt.edge;

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
        var stls = tstOpts.stl;
        var headStls = tstOpts.headStl;
        var msgStls = tstOpts.msgStl;

        //Get the options for messages
        var msgOpts = this.opts.msgs;

        //Create the toast element
        var tst = document.createElement('div');
        tst.style.backgroundColor = msgOpts[type][2];
        tst.classList.add(msgOpts[type][3], 'mini-notif');
        //Apply all the styles from the stls for the notif to the container for the toast
        tst = this.applyStyles(tst,stls);        
        //Create the heading, and the message containers, insert the text, and then append them into the notification div
        var headingP = document.createElement('p');
        headingP.innerText = msgOpts[type][1];
        headingP = this.applyStyles(headingP,headStls);
        tst.appendChild(headingP);
        var messageP = document.createElement('p');
        messageP.innerText = msg;
        messageP = this.applyStyles(messageP,msgStls);        
        tst.appendChild(messageP);
        //Finally insert it into the main notification container, and then set up the timeout to remove it again
        document.getElementById('mt-cont').appendChild(tst);
        setTimeout(function () {
            document.getElementById('mt-cont').removeChild(document.getElementById('mt-cont').firstChild);
        }, 2500);
    },
    applyStyles: function (item, styles) {
        for (var key in styles) {
            if (styles.hasOwnProperty(key)) {
                item.style[key] = styles[key];
            }
        }
        return item;
    }
};



