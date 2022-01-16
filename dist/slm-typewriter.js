(function () {
    'use strict';

    const DELAY_ON_START = 1500;
    const DELAY_ON_COMPLETE = 2000;
    const DELAY_ON_FINISH = 1500;
    const DELAY_ON_TYPING = 120;

    class SlmTypewriter extends HTMLElement {
        async connectedCallback() {
            await this._delay(this._attr('on-start', DELAY_ON_START));
            if (this.hasAttribute('slm-loop')) {
                this._typeInLoop();
                return;
            }
            this._typeOnce();
        }

        /**
         * @private {function}
         * @param {String} name
         * @param {*} defaultValue
         * @return {*}
         */
        _attr(name, defaultValue) {
            return this.getAttribute('slm-' + name) || defaultValue;
        }

        /**
         * @private {function}
         * @return {Array<String>}
         */
        _items() {
            const items = this._attr('items', '');
            if (!items) {
                throw new Error('"slm-items" is a required attribute');
            }
            return JSON.parse(decodeURIComponent(items));
        }

        /**
         * @private {function}
         * @param {Number} milliseconds
         * @return {Promise}
         */
        _delay(milliseconds) {
            return new Promise((resolve) => setTimeout(resolve, milliseconds));
        }

        /**
         * @private {function}
         * @return {Promise}
         */
        _delayTyping() {
            return this._delay(this._attr('on-typing', DELAY_ON_TYPING));
        }

        /**
         * @async
         * @private {function}
         * @param {String} text
         */
        async _type(text) {
            const letters = Array.from(text);
            for (const letter of letters) {
                this.textContent = this.textContent + letter;
                await this._delayTyping();
            }
            await this._delay(this._attr('on-complete', DELAY_ON_COMPLETE));
        }

        /**
         * @async
         * @private {function}
         */
        async _erase() {
            let text = this.textContent;
            while (text.length > 0) {
                text = text.slice(0, -1);
                this.textContent = text;
                await this._delayTyping();
            }
            await this._delay(this._attr('on-finish', DELAY_ON_FINISH));
        }

        /**
         * @async
         * @private {function}
         */
        async _typeOnce() {
            const items = this._items();
            while (items.length > 0) {
                await this._type(items.shift());
                if (items.length != 0) {
                    await this._erase();
                }
            }
        }

        /**
         * @async
         * @private {function}
         */
        async _typeInLoop() {
            const items = this._items();
            while (true) {
                for (const item of items) {
                    await this._type(item);
                    await this._erase();
                }
            }
        }
    }
    window.customElements.define('slm-typewriter', SlmTypewriter);

})();
