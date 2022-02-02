import {SlmTypewriter} from './typewriter.js';

const WAIT_ON_START = 1500;
const WAIT_AFTER_TYPE = 2000;
const WAIT_AFTER_ERASE = 1500;
const ITEMS_ATTRIBUTE_NAME = 'slm-items';

/**
 * @private {function}
 * @param {Element} element
 * @return {Array<String>}
 */
const itemsFromJsonAttr = function (element) {
    return JSON.parse(decodeURIComponent(element.getAttribute(ITEMS_ATTRIBUTE_NAME)));
};

class SlmTypewriterElement extends HTMLElement {
    async connectedCallback() {
        const typewriter = new SlmTypewriter(this);
        await typewriter.wait(WAIT_ON_START);
        const items = itemsFromJsonAttr(this);
        while (items.length) {
            await typewriter.type(items.shift(), WAIT_AFTER_TYPE);
            if (items.length) {
                await typewriter.wipe(WAIT_AFTER_ERASE);
            }
        }
    }
}
window.customElements.define('slm-typewriter', SlmTypewriterElement);

class SlmLoopTypewriterElement extends HTMLElement {
    async connectedCallback() {
        const typewriter = new SlmTypewriter(this);
        await typewriter.wait(WAIT_ON_START);
        const items = itemsFromJsonAttr(this);
        while (true) {
            for (const item of items) {
                await typewriter.type(item, WAIT_AFTER_TYPE);
                await typewriter.wipe(WAIT_AFTER_ERASE);
            }
        }
    }
}
window.customElements.define('slm-loop-typewriter', SlmLoopTypewriterElement);
