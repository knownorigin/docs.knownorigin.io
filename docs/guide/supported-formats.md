# Supported artwork formats

## Formats

We currently support the following file formats:

* Image formats - `PNG`, `JPG`, `GIF`, `SVG` & `WebP` - (along with animated variants)
    * 360 Image formats - `PNG`, `JPG` - image has to contain the `Exif XMP` tag `ProjectionType=equirectangular` (Without this they will not work on KO as 360 images)
* Video formats - `WebM` & `Mp4` (minimum of quality of 720p `1280 x 720`)
* 3D formats - `GLB`
* Max file size
    - `150mb` for main asset
    - `35mb` for cover images

Cover images are **mandatory** when using video or 3D models - this will enable the token to be better represented on other websites and wallets which do not support these media types.

#### Image based art

You must adhere to copyright, originality and KO terms and conditions when minting. Reputation is king in this space, so
 we ask those involved to respect other artists and collectors.

#### Video based art

Unfortunately not all browsers support every format and even within families of browsers there are variations in what
formats, frame rates and maximum sizes they support. 

We have recently introduced video transcoding of all videos on KO in an attempt to improve the overall viewing 
experience when displaying artwork on the site for all browsers and devices.

We also **DO NOT** process the video before associating to the tokens, we transcode them after creation meaning
that the video upload is the exact video which is tokenised. 

Currently, we transcode **all** videos to a minimum of `mp4/1080p` quality which from our tests produces the best
set of results for user generated quality on the widest set of devices.

The downside is that although KO will hopefully provide the best viewing experience, other sites, specifically aggregators
like `OpenSea` and `Rarible` may not do the same thing and will try to render the original uploaded by an artists. 
This means that they may not play on all devices when viewed on these platforms.

We would recommend trying to upload video artwork in a format which has the widest support such as mp4 / h264 / 1080p. 
[Read more](./video-encoding.md) about video transcoding.

Further guidance on cross browser support for video formats can be found here:
* [https://caniuse.com/mpeg4](https://caniuse.com/mpeg4)
* [https://caniuse.com/webm](https://caniuse.com/webm)

## 3D artwork

3D artwork support on KO is simple at the moment, more features will be added later down the line.

We use the Google authored [modelviewer](https://modelviewer.dev/) for rendering 3D assets, this seems to be
 a widely supported and well-built, opensource solution.   
 
#### Lighting & Environment

We use a default lighting environment module which can downloaded here [default hdr module](https://knownorigin.io/3d/environments/lightroom_14b.hdr)

This is applied to all models on KO and should provide some simple environmental settings.
 In the future we will look to allow custom HDRI.

#### Useful GLB links

* [glb-packer](https://glb-packer.glitch.me/) - for packing `gltf` to binary `glb` files
* [Modelviewer tester](https://modelviewer.dev/examples/tester.html) - for testing your models before upload
* [Modelviewer editor](https://modelviewer.dev/editor) - a tool which allows you to edit your model
* [Modelviewer Github](https://github.com/google/model-viewer/) - source code for the viewer

## 360 Images

KO now supports 360 images, sometimes also referred to as image spheres.

The main asset is the only asset captured - **no cover image is required**.

In order for your image to correctly display as a 360 image on KO you MUST have the following:

* Image formats - PNG, JPG
* Image needs to contain the `Exif XMP` tag name:`ProjectionType` value:`equirectangular` (Without this they will not work on KO as 360 images)

When uploading 360 image, if the upload form **DOES NOT** render a 360 image, something is invalid, and you are most likely
missing the correct image metadata tag, **do not mint as it will NOT work without it**.

We use the open source viewer known as [pannellum](https://pannellum.org) to render the images on KnownOrigin.

**The maximum image size should be preferably limited to 4096px wide; 8192px is also acceptable for most devices.**

**One point to note: 
Services such as OpenSea or Rarible currently do not know how to render this type of image, so they are displayed flat.
Hopefully this will change in the future**

In the future we can iterate on this current solution and look to include 360 videos and other new 360 formats. 
