(function () {
    'use strict';

    /**
     * @async
     * @public {function}
     * @param {String} text
     */
    const type = async function (element, text) {
        const WAIT_BETWEEN_LETTERS = 130;
        const DEFAULT_WAIT = 2000;
        const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
        while (element.textContent) {
            element.textContent = element.textContent.slice(0, -1);
            await wait(WAIT_BETWEEN_LETTERS);
        }
        await wait(DEFAULT_WAIT);
        for (const letter of [...decodeURIComponent(text)]) {
            element.textContent = element.textContent + letter;
            await wait(WAIT_BETWEEN_LETTERS);
        }
        await wait(DEFAULT_WAIT);
    };

    class SlmLoopTypewriterElement extends HTMLElement {
        async connectedCallback() {
            const items = JSON.parse(this.getAttribute('items'));
            while (true) {
                for (const item of items) {
                    await type(this, item);
                }
            }
        }
    }
    window.customElements.define('slm-loop-typewriter', SlmLoopTypewriterElement);

})();
