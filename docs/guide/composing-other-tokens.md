# Composing other tokens


### What is it?

Composables are a way of bundling crypto tokens together, after minting an NFT (ERC-721) you can embed other tokens within it.
This is currently limited to ERC20 tokens but in the future you will be able to embed other ERC-721 NFTs within an NFT!

### How it works?

The KnownOrigin V3 contracts introduced the ability to compose tokens together, following the [EIP-998](https://eips.ethereum.org/EIPS/eip-998) standard.

After a composable has been created, the tokens embedded within are held in stasis by the KO contracts, ready to be released. This information will then be displayed
in the KO marketplace, listing the underlying assets at point of purchase. Once the NFT is purchased the new owner can then choose to redeem the tokens or leave them tied to the NFT.

### Why would you want to compose other tokens?

Composables open up a whole knew realm of possibilities for NFTs, an artist may want to:
* Store some of their social token within an artwork
* Reward collectors with a token when they purchase a piece
* Store a derivative of an artwork, within the artwork itself

Composables allow you to experiment and play with new forms of incentives, token distribution and value transfer!

### How to use this feature?

On the minting portal you will need to select 'Composable NFTs'.

<img width="70%" src="https://storage.googleapis.com/public-blog-asset/doc-site/first-slide-composables.png">

You can proceed with the Create composable button.

<img width="70%" src="https://storage.googleapis.com/public-blog-asset/doc-site/second-slide-composables.png">

#### Selecting an artwork

This section allows you to select an existing NFT you have minted. Clicking the box will present you with a dropdown list of your NFTs, or
you can filter by edition name. Once you have selected an artwork you can continue, it is important to note that you can only select artworks that haven't had any sales.

<img width="70%" src="https://storage.googleapis.com/public-blog-asset/doc-site/third-slide-composables.png">

#### Selecting a token

After selecting an artwork you can then select a token to embed within it.
You will be choosing how many tokens you wish to store in each edition, i.e. for an edition of 5 you will be storing 5 times your selected amount in total. So in the example below, 5 DAI
for a 5 edition piece would make a total of 25 DAI.

You will not be able to select a token you do not have in your wallet, nor select more tokens than you have available, this page will automatically query your wallet and make sure you have enough of the token to continue with the process.
At the moment you must select whole tokens, i.e. 5 DAI rather than 5.5 DAI or 1.2 DAI.

There is an option to select the maximum number of tokens possible with the `(Max)` button

<img width="70%" src="https://storage.googleapis.com/public-blog-asset/doc-site/fourth-slide-composables.png">

#### Confirming your choice

Once you have selected your token to store within your artwork you need to confirm your choice. This is an important step so please take heed of the warning, there is a chance of permanent loss if you select a token which has a dynamic balance
or that can be rebased. This is because the amount of tokens is stored in the contract so for any token which has its balance dynamically updated you will only ever be able to withdraw the original amount chosen.

Once you have ticked the two confirmations you will be able to click the 'Compose NFT' button, this will start the process to finalise the composable!

<img width="70%" src="https://storage.googleapis.com/public-blog-asset/doc-site/fifth-slide-composables.png">

#### Creating the composable

When the 'Compose NFT' button is clicked the interactions with the contract to create the composables begin. The first step checks your wallet and sees if it has approval to spend the selected token to the right amount.
If the contract needs approval a wallet confirmation will appear which will need to be confirmed.

<img width="70%" src="https://storage.googleapis.com/public-blog-asset/doc-site/sixth-slide-composables.png">

The next step is to give the contract approval to make the composable itself. Another wallet confirmation will appear which will need to be confirmed.

<img width="70%" src="https://storage.googleapis.com/public-blog-asset/doc-site/seventh-slide-composables.png">

Once both confirmations have been received and both transactions have gone through the composable will be created!

#### Sharing your new composable

The composable has now been created and after clicking 'Finish' you will see the final page. From here you can view your share your creation via the 'Share' button
or see the artwork with the 'View Artwork' button.

<img width="70%" src="https://storage.googleapis.com/public-blog-asset/doc-site/eigth-slide-composables.png">

