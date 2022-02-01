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

export {SlmTypewriter};
