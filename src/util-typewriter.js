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

export {type};
