# Composing other NFTs


### What is it?

Composables are a way of bundling crypto tokens together, after minting an NFT (ERC-721) you can embed other NFTs within it.

### How it works?

The KnownOrigin V3 contracts introduced the ability to compose tokens together, following the [EIP-998](https://eips.ethereum.org/EIPS/eip-998) standard.

After a composable has been created, the tokens and/or NFT embedded within are held in stasis by the KO contracts, ready to be released. This information will then be displayed
in the KO marketplace, listing the underlying assets at point of purchase. Once the NFT is purchased the new owner can then choose to redeem the NFT or tokens or leave them tied to the NFT.

### Why would you want to compose other tokens?

Composables open up a whole knew realm of possibilities for NFTs, an artist may want to:

* Embed an NFT to make it a more exciting proposition to collectors
* Reward collectors with an exclusive NFT when they purchase a piece
* Store a derivative of an artwork, within the artwork itself

Composables allow you to experiment and play with new forms of incentives, token distribution and value transfer!

### How to use this feature?

On the minting portal you will need to select 'Enhance'.

<img width="70%" src="https://storage.googleapis.com/public-blog-asset/doc-site/home-slide-composable-nft.png">

You can proceed with the 'Embed NFT' button.

<img width="70%" src="https://storage.googleapis.com/public-blog-asset/doc-site/first-slide-composable-nft.png">

#### Selecting an artwork

This section allows you to select an existing NFT you have minted. Clicking the box will present you with a dropdown list of your NFTs, or
you can filter by edition name. Once you have selected an artwork you can continue, it is important to note that you can only select 1/1 artworks that haven't had any sales.

<img width="70%" src="https://storage.cloud.google.com/public-blog-asset/doc-site/second-slide-composable-nft.png?authuser=1">

#### Selecting a NFT to embed

After selecting an artwork you can then select am NFT to embed within it. In the 'Choose a collection' dropdown you will be shown a list of the NFT collections that
you own NFTs within i.e from KnownOrigin or Bored Ape Yacht Club.

<img width="70%" src="https://storage.googleapis.com/public-blog-asset/doc-site/third-slide-composable-nft1.png">

Next, you will need to decide what NFT from the collection you have selected you wish to embed, currently this is limited to just 1 NFT per token.
Though there is nothing to stop you from experimenting with this and chaining up a series of embedded NFT's.

<img width="70%" src="https://storage.googleapis.com/public-blog-asset/doc-site/fourth-slide-composable-nft.png">

#### Confirming your choice

Once you have selected your NFT to store within your artwork you need to confirm your choice. This is an important step so please take heed of the warning, once you have embedded your NFT there is no way for you as the artist to redeem it from that account.
The redeeming process can only be done by the account that has collected the token. If you were to burn the parent token the embedded token would also be lost forever.

Once you have ticked the two confirmations you will be able to click the 'Confirm enhancement' button, this will start the process to finalise the composable!

<img width="70%" src="https://storage.googleapis.com/public-blog-asset/doc-site/sixth-slide-composable-nft.png">

#### Creating the composable

When the 'Compose NFT' button is clicked the interactions with the contract to create the composables begin. The first step checks your wallet and sees if it has approval to spend the selected token to the right amount.
If the contract needs approval a wallet confirmation will appear which will need to be confirmed.

<img width="70%" src="https://storage.googleapis.com/public-blog-asset/doc-site/sixth-slide-composables.png">

The next step is to give the contract approval to make the composable itself. Another wallet confirmation will appear which will need to be confirmed.

<img width="70%" src="https://storage.googleapis.com/public-blog-asset/doc-site/eigth-slide-composable-nft.png">

Once both confirmations have been received and both transactions have gone through the composable will be created!

#### Sharing your new composable

The composable has now been created and after clicking 'Finish' you will see the final page. From here you can view your share your creation via the 'Share' button
or see the artwork with the 'View Artwork' button.

<img width="70%" src="https://storage.googleapis.com/public-blog-asset/doc-site/ninth-slide-composable-nft.png">

