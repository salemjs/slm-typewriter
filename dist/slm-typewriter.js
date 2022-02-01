(function () {
    'use strict';

    const DELAY_ON_TYPING = 120;

    class SlmTypewriter {
        constructor(element) {
            this._element = element;
        }

        /**
         * @private {function}
         * @param {Number} milliseconds
         * @return {Promise}
         */
        delay(milliseconds) {
            return new Promise((resolve) => setTimeout(resolve, milliseconds));
        }

        /**
         * @async
         * @private {function}
         * @param {String} text
         */
        async type(text) {
            const element = this._element;
            const letters = Array.from(text);
            for (const letter of letters) {
                element.textContent = element.textContent + letter;
                await this.delay(DELAY_ON_TYPING);
            }
        }

        /**
         * @async
         * @private {function}
         */
        async erase() {
            const element = this._element;
            let text = element.textContent;
            while (text.length > 0) {
                text = text.slice(0, -1);
                element.textContent = text;
                await this.delay(DELAY_ON_TYPING);
            }
        }
    }

    const DELAY_ON_START = 1500;
    const DELAY_ON_COMPLETE = 2000;
    const DELAY_ON_FINISH = 1500;
    const ITEMS_ATTRIBUTE_NAME = 'slm-items';

    /**
     * @private {function}
     * @param {Element} element
     * @return {Array<String>}
     */
    const itemsFromJsonAttr = function (element) {
        if (!element.hasAttribute(ITEMS_ATTRIBUTE_NAME)) {
            throw new Error('"' + ITEMS_ATTRIBUTE_NAME + '" is a required attribute');
        }
        return JSON.parse(decodeURIComponent(element.getAttribute(ITEMS_ATTRIBUTE_NAME)));
    };

    class SlmTypewriterElement extends HTMLElement {
        async connectedCallback() {
            this._typewriter = new SlmTypewriter(this);
            await this._typewriter.delay(DELAY_ON_START);
            this._start();
        }

        /**
         * @async
         * @private {function}
         */
        async _start() {
            const items = itemsFromJsonAttr(this);
            while (items.length > 0) {
                await this._typewriter.type(items.shift());
                await this._typewriter.delay(DELAY_ON_COMPLETE);
                if (items.length != 0) {
                    await this._typewriter.erase();
                    await this._typewriter.delay(DELAY_ON_FINISH);
                }
            }
        }
    }
    window.customElements.define('slm-typewriter', SlmTypewriterElement);

    class SlmLoopTypewriterElement extends HTMLElement {
        async connectedCallback() {
            this._typewriter = new SlmTypewriter(this);
            await this._typewriter.delay(DELAY_ON_START);
            this._start();
        }

        /**
         * @async
         * @private {function}
         */
        async _start() {
            const items = itemsFromJsonAttr(this);
            while (true) {
                for (const item of items) {
                    await this._typewriter.type(item);
                    await this._typewriter.delay(DELAY_ON_COMPLETE);
                    await this._typewriter.erase();
                    await this._typewriter.delay(DELAY_ON_FINISH);
                }
            }
        }
    }
    window.customElements.define('slm-loop-typewriter', SlmLoopTypewriterElement);

})();
