# Supported artwork formats

## Formats

We currently support the following file formats:

* Image formats - `PNG`, `JPG`, `GIF`, `SVG` & `WebP` - (along with animated variants)
* Video formats - `WebM` & `Mp4`
* 3D formats - `GLB`
* Max file size
    - `75mb` for main asset
    - `25mb` for cover images

Cover images are **mandatory** when using video or 3D models - this will enabled the token to be better 
represented on other websites and wallets which do not support these media types.

#### Image/artwork usage

You must adhere to copyright, originality and KO terms and conditions when minting. Reputation is king in this space, so
 we ask those involved to respect other artists and collectors in these regards.

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
