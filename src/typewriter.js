import {type} from './util-typewriter/util-typewriter.js';

class SlmTypewriterElement extends HTMLElement {
    async connectedCallback() {
        const items = JSON.parse(this.getAttribute('items'));
        while (items.length) {
            await type(this, items.shift());
        }
    }
}
window.customElements.define('slm-typewriter', SlmTypewriterElement);
