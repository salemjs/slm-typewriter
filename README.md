# &lt;slm-typewriter&gt; element

It's small (330 bytes min+gzip) and simple to use. A vanilla js web component for adding a non-reapeating typewriter effect to your texts. No additional dependencies are required.

![Magic](https://c.tenor.com/wn2_Qq6flogAAAAC/magical-magic.gif)

## Usage

To type the list of items use:

`<slm-typewriter items='["first", "the second", "this is the %22third%22."]' />`

## Options

| Attribute | Description                                                                                                                                                                                                                                                      |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `items`   | This is used to get the array of items. It is **required** and **must be JSON encoded array**. You can use [encodeURIComponent](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent) to fix any character issues |

## Browser support

Browsers with native custom element support. I do not offer IE11 support, but you may be able to make it work with polyfills.

-   Chrome
-   Firefox
-   Safari
-   Microsoft Edge (Chrome based)

## Customisation

This web component only supports basic customisations. If you need to do something more advanced, you can look at how my [util-typewriter](https://github.com/salemjs/util-typewriter) repository works and make your flavour.

## License

Distributed under the MIT license. See LICENSE for details.
