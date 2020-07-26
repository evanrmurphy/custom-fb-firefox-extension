# Custom FB Firefox Extension

Firefox extension for Android to make mobile Facebook less addictive.

See extension.css and extension.js for latest on the functionality this has.

## Run instructions

web-ext run --target=firefox-android --android-device=emulator-5554

## Build instructions

web-ext build

## To do

1. On the News Feed, show a counter hovering in the bottom, top or some constant
place on screen with the total number of posts hidden so far. This way if a
scroll-to-load interaction loads only more posts from already-encountered
authors, the counter will update indicating the app has responded and isn't
halted.
2. There is an actual apparent bug related to the scroll-to-load interaction.
If it fails to show any new authors, then it will continue showing a loading
indicator but not actually be loading new posts. User has to scroll up a bit
and then back down for it to start actually loading again. Need to fix this.

Helpful links:

- https://extensionworkshop.com/documentation/develop/developing-extensions-for-firefox-for-android/
- https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/#testing-in-firefox-for-android
