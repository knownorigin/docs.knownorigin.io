# Video Encoding

unfortunately not all browser support every format, KO does not currently do any pre-processing on the videos that are minted to counter against this.

## Suggestions

Across browsers, there are many different standards and supported codecs. These are the settings we have found that offer the best cross browser support on mobile and desktop.

Using adobe media encoder (available with Adobe CC subscription), there are some presets that work very well, and require minimal setting changes. Start by dragging or importing your file into the viewport. Then click on the text next to the dropdown to change the preset (highlighted below).

<img :src="$withBase('/video-encoding/video-encoding-1.jpg')">

This will open a new window (it may take a minute to connect and load). Once open, select the “H.264” Format and choose the “Vimeo 2160p 4k Ultra HD” (highlighted below). If your video is long or your source file is small, you may want to choose “Vimeo 1080p Full HD” or smaller and follow the same suggestions.

<img :src="$withBase('/video-encoding/video-encoding-2.jpg')">

The next step is to adjust the size if needed. Click to type and change the size (highlighted 1 below). There are inherent size limits with this preset that may cause an error message if you make your size too large. Make sure the long edge is no larger than 4096, and the small edge is no larger than 2048. You may need to start with a smaller size here and adjust from there to find the right ratio. 

The button next to them (highlighted 2 below) can be toggled in order to lock the aspect ratio.

<img :src="$withBase('/video-encoding/video-encoding-3.jpg')">

The next step is to check the estimated file size (highlighted 2 below). If it is still above the max supported on KO (currently 75mb), then you will need to shrink the dimensions further, or adjust the target bitrate (highlighted 1 below).

When changing target bitrate, a lower number equals more compression. You should preview your file after encoding to make sure your compression is not too harsh, and there is no artifacting. The desired number here is dependent on quite a few variables and may be different for each file. Generally try to stay at the default and only go down if necessary. If you are unable to go with any lower with bitrate, circle back to making your file dimensions smaller.

<img :src="$withBase('/video-encoding/video-encoding-4.jpg')">

Once done, hit okay (which will close the window), and then hit play in the top right corner of Media Encoder to begin the encoding.

This does not guarantee your file to play on all browsers without issue, but it is a good start and should work in most cases. If you are concerned about any playback issues, test your final file in as many ways as you can on as many devices as possible before minting.

We would like to thank the fantastic KO artist [waltondesign](https://knownorigin.io/waltondesign) for putting this guide together.

