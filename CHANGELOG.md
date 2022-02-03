# slm-typewriter changelog

## 1.2.0 - 03/02/2022

-   Do some code optimization to reduce the minified size to ~475byte (~330byte gzipped)
-   Remove unnecessary attribute prefix
-   The wiping logic is automatically erasing text now before typing the next one
-   Fix decodeURIComponent logic
-   Remove SlmUtilTypewriter class

## 1.1.2 - 02/02/2022

-   Add multiple packages, so you don't need to pull in unused code. Individual bundles are ~30% less in size

## 1.1.1 - 02/02/2022

-   Do some code optimization to reduce the minified size from 1.3kb to 915byte (436byte gzipped)

## 1.1.0 - 01/02/2022

-   Remove unnecessary attribute logic and options
-   Instead of the loop flag, split this into two separate web components for better maintainability
-   Add changelog
