# &lt;slm-typewriter&gt; element

Easy to use vanilla js web components to add typewriter effect to your texts. No additional dependencies are required.

## Usage

To type the list of items once you can use

`<slm-typewriter slm-items='["first", "second", "third"]' />`

If you want it to be an infinite loop

`<slm-loop-typewriter slm-items='["first", "second", "third"]' />`

## Options

| Attribute   | Description                                                                                                                                                                                                                                                      |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `slm-items` | This is used to get the array of items. It is **required** and **must be JSON encoded array**. You can use [encodeURIComponent](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent) to fix any character issues |

## Browser support

Browsers with native custom element support. I do not offer IE11 support, but you may be able to make it work with polyfills.

-   Chrome
-   Firefox
-   Safari
-   Microsoft Edge

## License

Distributed under the MIT license. See LICENSE for details.
