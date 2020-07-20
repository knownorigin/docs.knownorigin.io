# Creating Editions

## Uploading artwork options

When creating new editions on KnownOrigin we offer a somewhat comprehensive set of configuration options, 
allowing you to customise certain aspects of your work. Below we cover some of these options in more detail. 

#### Artwork detailed

This is fairly self-explanatory, allowing you to set the **name** and **description** of your artwork. 
A good description can help collectors understand the artwork in more depth. These are also part of the ERC721 token 
specification and will be displayed in most wallets and other third party sites which support NFTs.

<table><tr><td>
<img :src="$withBase('/creating-editions/artwork-details.png')">
</td></tr></table>

#### Edition Size and Price  

**Edition size**

Currently, we support a **max edition size of 25**.

Once an edition is created, the **edition size** is set in stone, you cannot increase it, you can however 
reduce via [artwork management](./artwork-management.md)   

Scarcity vs abundance comes into play when making the choice about edition size.
We support and promote both `single-edition` and `multi-edition` artworks. 
Please reach out on [Discord](https://discord.gg/2whPWbq) to speak to other artists about this age-old topic of 
scarcity vs abundance, ultimately it's your call. 

**Accepting offers only**

Setting this means a collector will only be able to _make you an offer_ and not directly purchase your work at a _buy now_ price.

This options can be controlled once an edition has been minted via [artwork management](./artwork-management.md).

**Price**

If set, this is the `ETH` price for an individual token.

Pricing is hard from our experience, especially for new comers to the space, please reach out on 
[Discord](https://discord.gg/2whPWbq) to speak to other artists on this subject. 

There is currently a minimum price of _0.04 ETH_.

**Accepting bids**

Once enabled you will be able to receive offers as well setting a price for your artwork.

This **cannot** to modified once set so if in doubt we would recommend you enabled this feature. 
It can also help become a price discovery mechanism.

<table><tr><td>
<img :src="$withBase('/creating-editions/edition-size-and-price.png')">
</td></tr></table>

#### Image/artwork usage

You must adhere to copyright, originality and KO terms and conditions when minting. Reputation is king in this space, so
 we ask those involved to respect other artists and collectors in these regards.

#### Collaborations

You can set another `Ethereum` address as a collaborator which you then can allocate a percentage of funds to on every sale,
 this works on both primary and secondary sales when they happen on the KO platform.

You can currently specify a set of predefined percentages when minting such as 10%, 25%, 50% etc.

_**To note:** we only support whole numbers for percentage splits, so if a split of 50/50 happens, taking into account 
[KO fees](./fee-strucutre.md) this means that the collaborator may receive 1% less than the other part due to rounding up or down._

<table><tr><td>
<img :src="$withBase('/creating-editions/collaborators.png')">
</td></tr></table>

#### Artwork and tagging

You can **tag** your artwork using up to 25 tags. Try to be as accurate as possible as these tags power searching 
and classification of your artwork. They will also may be visible on third party sites.
 
#### Uploading artwork and Cover images

We currently support the following file formats:

* Image formats - `PNG`, `JPG`, `GIF`, `SVG` & `WebP` - (along with animated variants)
* Video formats - `WebM` & `Mp4`
* Max file size
    - `50mb` for main asset
    - `15mb` for cover images
* Cover images (can be used for video content) and support a subset of image only formats of a smaller size. 

We **recommend** uploading a cover image when using video animations as it will allow the token to be better 
represented on other websites and wallets which do not support playing videos.

<table><tr><td>
<img :src="$withBase('/creating-editions/upload-artwork.png')">
</td></tr></table>

## How long does it take to appear on KO?

Once the transaction has been sent from your wallet, it usually takes 3-5 minutes after being mined for it to 
appear on KnownOrigin. 

We currently have a restriction of **1 upload every 24 hours**. The goal of this is to not overwhelm collectors and to try
 give some exposure to every ones creation.

## Promoting your work

**(This section is a work in progress...)**

* Socials / make your artwork known and heard for the world to admire is key
* [Artist checklist of success](https://www.trevorjonesart.com/blog/artist-checklist-for-success)  by [Trevor Jones](https://knownorigin.io/trevor-jones)
