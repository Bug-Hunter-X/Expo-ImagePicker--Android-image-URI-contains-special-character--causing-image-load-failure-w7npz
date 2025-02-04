# Expo ImagePicker Android URI Issue

This repository demonstrates a bug encountered when using the Expo ImagePicker library on Android.  Occasionally, the returned image URI contains an unexpected special character, preventing the image from loading correctly.

The problem is intermittent and platform-specific (Android only). The provided `bug.js` file shows how to reproduce the issue, while `bugSolution.js` presents a potential workaround.

## Reproduction Steps

1. Run the `bug.js` example on an Android device.
2. Select an image from your gallery.
3. Observe that in some cases, the image will fail to load.

## Solution

The `bugSolution.js` file includes a workaround that involves sanitizing the URI before use.  This involves removing any non-alphanumeric characters that might be causing the problem. This is not a perfect solution, but it significantly mitigates the issue.  A more robust fix might involve deeper investigation into why the special character is appearing in the URI in the first place.