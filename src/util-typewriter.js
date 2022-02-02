const WAIT_BETWEEN_STEPS = 120;

class SlmUtilTypewriter {
    constructor(element) {
        this._element = element;
    }

    /**
     * @public {function}
     * @param {Number} ms
     * @return {Promise}
     */
    wait(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    /**
     * @async
     * @public {function}
     * @param {String} text
     * @param {Number} waitAfterComplete
     */
    async type(text, waitAfterComplete) {
        const element = this._element;
        for (const letter of Array.from(text)) {
            element.textContent = element.textContent + letter;
            await this.wait(WAIT_BETWEEN_STEPS);
        }
        await this.wait(waitAfterComplete);
    }

    /**
     * @async
     * @public {function}
     * @param {Number} waitAfterComplete
     */
    async wipe(waitAfterComplete) {
        const element = this._element;
        while (element.textContent) {
            element.textContent = element.textContent.slice(0, -1);
            await this.wait(WAIT_BETWEEN_STEPS);
        }
        await this.wait(waitAfterComplete);
    }
}

export {SlmUtilTypewriter};
