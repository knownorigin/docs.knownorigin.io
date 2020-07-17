# Artwork Management

Once an edition has been minted on KO, the platform offers several tools which allow 
artists and collectors to modify settings of sold and unsold tokens.

## Artist controls

Navigate to your profile and click `Artwork` -> `Manage`.

_(You will only see this if you are an artist on the platform.)_ 

<img :src="$withBase('/artwork-management/manage-artwork-tab.png')">

### Pricing

You can control the `buy it now` price for any unsold tokens from an edition.

Note: an artwork **cannot** both have a `Buy now` price and be set to `Only offers`.

Specify the `ETH` price and click `Update price`.
  
<img :src="$withBase('/artwork-management/update-price.png')">

### Gifting

Any unsold tokens can be `gifted` to a recipient of your choice, including yourself, but only if you are the creator. 

Specify the ETH Address you want to receive the token and click `Send gift`.

<img :src="$withBase('/artwork-management/send-gift.png')">

### Burning

An edition is made of a finite set of tokens e.g. an edition of 10 is made up of 10 unique tokens all with differsnt token IDs. 

You can burn the remaining supply or completely burn the edition if no tokens have been issued from it.

If your edition is partially sold, burning it will reduce the edition total supply to the number of tokens already sold. 
 
If **NO** tokens have been issued, `burning` will completely remove the edition and will not be shown on KO anymore.

Once tokens have been sold or gifted, you cannot modify these tokens as you no longer have ownership of them.

Click `Delete & Burn` to start the burn process.

<img :src="$withBase('/artwork-management/burn.png')">

### Offers only

For editions which are not sold out, you can set the remaining tokens in the edition to be `Offers only`.

This means that a collector will have to make you an offer, which you then need to `accept` inorder to make the sale.

You can also `reject` any offer if you are unhappy with the offer.

You can toggle between `offers only` and `buy now` price multiple times.

<img :src="$withBase('/artwork-management/offers-only.png')">

## Token owner controls

* Transferring tokens

* Setting `buy now` price on secondary market **(coming soon)**
