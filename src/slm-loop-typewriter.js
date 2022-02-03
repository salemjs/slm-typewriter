import {type} from './util-typewriter.js';

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
