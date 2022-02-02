import {SlmUtilTypewriter} from './util-typewriter.js';

class SlmLoopTypewriterElement extends HTMLElement {
    async connectedCallback() {
        const WAIT_ON_START = 1500;
        const WAIT_AFTER_TYPE = 2000;
        const WAIT_AFTER_ERASE = 1500;
        const typewriter = new SlmUtilTypewriter(this);
        await typewriter.wait(WAIT_ON_START);
        const items = JSON.parse(decodeURIComponent(this.getAttribute('slm-items')));
        while (true) {
            for (const item of items) {
                await typewriter.type(item, WAIT_AFTER_TYPE);
                await typewriter.wipe(WAIT_AFTER_ERASE);
            }
        }
    }
}
window.customElements.define('slm-loop-typewriter', SlmLoopTypewriterElement);
