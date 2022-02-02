# slm-typewriter elements

Lean (~400byte min+gzip) and easy to use vanilla js web components to add typewriter effect to your texts. No additional dependencies are required.

![Magic](https://c.tenor.com/wn2_Qq6flogAAAAC/magical-magic.gif)

## Usage

To type the list of items once use the slm-typewriter bundle:

`<slm-typewriter slm-items='["first", "the second", "this is the third."]' />`

If you want it to be an infinite loop use the slm-loop-typewriter bundle:

`<slm-loop-typewriter slm-items='["first", "the second", "is this the third?"]' />`

Only use the combined bundle if you really need both web components at once (individual bundles are ~30% less in size). The included css file is optional and only an example how to make this effect look better.

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

## Customisation

These web components only support basic customisations, but I plan to make some improvements soon. If you need to do something more advanced, you can look at how the SlmUtilTypewriter class is used and make your flavour.

## License

Distributed under the MIT license. See LICENSE for details.
