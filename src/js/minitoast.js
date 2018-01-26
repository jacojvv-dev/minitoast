class minitoast {
    constructor() {
        /**
         * Timeout for the notifications
         */
        this.notif = {
            timeout: 5000
        }

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
        this.msgs = {
            s: ['', 'Success', 'mt-success'],
            w: ['', 'Warning', 'mt-warning'],
            e: ['', 'Error', 'mt-error'],
            i: ['', 'Info', 'mt-info'],
            d: ['', 'Notification', 'mt-default']
        }

        this.init();
    }

    /**
     * Gets/Creates the base notification container
     */
    init() {
        let cont = document.getElementById('mt-cont');
        if (!cont) {
            //Set some base styles
            cont = document.createElement('div');
            cont.id = 'mt-cont';
            cont.classList.add('mt-cont');

            document.body.appendChild(cont);
        }
        this.cont = cont;
    }


    /**
     * success message
     * @param {string|null} msg
     */
    success(msg = null) {
        this.append(msg || this.msgs.s[0], 's');
    }

    /**
     * warning message
     * @param {string|null} msg
     */
    warning(msg = null) {
        this.append(msg || this.msgs.w[0], 'w');
    }

    /**
     * error message
     * @param {string|null} msg
     */
    error(msg = null) {
        this.append(msg || this.msgs.e[0], 'e');
    }

    /**
     * info message
     * @param {string|null} msg
     */
    info(msg = null) {
        this.append(msg || this.msgs.i[0], 'i');
    }

    /**
     * default message
     * @param {string|null} msg
     */
    default(msg = null) {
        this.append(msg || this.msgs.d[0], 'd');
    }


    append(msg, type) {
        //Get the options for the notification container
        var tstOpts = this.notif;

        //Get the options for messages
        var msgOpts = this.msgs;

        //Create the toast element
        var tst = document.createElement('div');
        tst.classList.add(msgOpts[type][2], 'mt-notif', 'mt-slide-fade');
        tst.style.animationDuration = (tstOpts.timeout / 1000) + 's';

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


}


export default minitoast;

