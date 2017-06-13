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
                borderRadius : '3px'
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
            s: ['', 'Success', '#27ae60','mini-success'],
            w: ['', 'Warning', '#f39c12','mini-warning'],
            e: ['', 'Error', '#c0392b','mini-error'],
            i: ['', 'Info', '#2980b9','mini-info'],
            d: ['', 'Notification', '#2c3e50','mini-default']
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
        var cont = document.getElementById('notif-cont');
        if (!cont) {
            //Get container options
            var opt = this.opts.cont;
            var stls = opt.stl;

            //Set some base styles
            cont = document.createElement('div');
            cont.id = 'notif-cont';
            cont.classList.add('mini-notif-container');

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
        tst.classList.add(msgOpts[type][3],'mini-notif');
        //Apply all the styles from the stls for the notif to the container for the toast
        for (var key in stls) {
            if (stls.hasOwnProperty(key)) {
                tst.style[key] = stls[key];
            }
        }
        //Create the heading, and the message containers, insert the text, and then append them into the notification div
        var headingP = document.createElement('p');
        headingP.innerText = msgOpts[type][1];
        for (var key in headStls) {
            if (headStls.hasOwnProperty(key)) {
                headingP.style[key] = headStls[key];
            }
        }
        tst.appendChild(headingP);
        var messageP = document.createElement('p');
        messageP.innerText = msg;
        for (var key in msgStls) {
            if (headStls.hasOwnProperty(key)) {
                messageP.style[key] = headStls[key];
            }
        }
        tst.appendChild(messageP);
        //Finally insert it into the main notification container, and then set up the timeout to remove it again
        document.getElementById('notif-cont').appendChild(tst);
        setTimeout(function () {
            document.getElementById('notif-cont').removeChild(document.getElementById('notif-cont').firstChild);
        }, 2500);
    }

};



