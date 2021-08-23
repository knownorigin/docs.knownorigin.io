# Minting art

## Uploading artwork options

When creating new editions on KnownOrigin we offer a somewhat comprehensive set of configuration options, 
allowing you to customise certain aspects of your work. Below we cover some of these options in more detail. 

First visit your profile, once you are enabled on KO you will see a button like this, click it and then proceed to fill in the relevant information. 

<img width="50%" src="https://storage.googleapis.com/public-blog-asset/doc-site/uploader-artwork-button.png">

#### New minting portal

For V3 we have created a new minting portal to mint your work, build [collectives](./creating-editions/#collectives) and create composable NFTs. Here we want to mint a work so you will need to select 'Create NFTs'.

<img width="70%" src="https://storage.googleapis.com/public-blog-asset/doc-site/initial-slide-minter.png">

#### Select the type of NFT you have to create

Next you will need to declare what type of work you want to mint as they will have slightly different processes.

<img width="70%" src="https://storage.googleapis.com/public-blog-asset/doc-site/second-slide-minter.png">

#### Uploading your work to IPFS

Here you will upload the piece that you are going to mint. You simply need to drag in the file you wish to upload or use the file explorer to find the file. Your work will then be uploaded to [IPFS](./what-is-an-edition/#what-data-do-we-store-on-ipfs). 

*note this page may look slightly different depending on what type of NFT you are trying to mint

<img width="70%" src="https://storage.googleapis.com/public-blog-asset/doc-site/third-slide-minter.png">

#### Adding your artwork details

This section allows you to set the details of your artwork. A good description can help collectors to understand the artwork more easily. Here you will also set the edition size of your work which can be from a single unique edition to an edition of 100. You will also set the tags, format and themes of your work which we are vital to help people discover it so being accurate here is important. Finally, you will set the [auction type](../auction-types) you wish to use to sell your work. These are also part of the ERC721 token 
specification and will be displayed in most wallets and other third party sites which support NFTs.

<img width="70%" src="https://storage.googleapis.com/public-blog-asset/doc-site/fifth-slide-minter.png">

#### Setting a price and agreeing to our terms

Here you will need to set a buy it now or reserve price in ETH depending on the auction type you have chosen. You will also need to tick the boxes to agree to all of our [terms and conditions](https://medium.com/knownorigin/terms-of-service-3efae6d0c20f)

<img width="70%" src="https://storage.googleapis.com/public-blog-asset/doc-site/sixth-slide-minter.png">

#### Confirming your details and minting your work

Here you will get to see all the information you have filled in and confirm all the details. As you will not be able to alter it once you have minted here is your chance to make any changes. You will also be given a prediction of the [gas fee](./frequently-asked-questions/#what-is-gas) for minting your work.

<img width="70%" src="https://storage.googleapis.com/public-blog-asset/doc-site/eighth-slide-minter.png">

Once you are happy with everything you can click 'mint artwork' at the bottom of the page which will trigger a Metamask transaction, and it will be minted!

#### Sharing your new mint

Now that you have minted your work you need to share it!

<img width="70%" src="https://storage.googleapis.com/public-blog-asset/doc-site/ninth-slide-minter.png">

You will also be able to visit the page of your new work (please wait a few minutes for your work to appear). You can also see how many uploads you have left in your 30 day period and even mint another piece. 

#### More on edition size and price  

**Edition size**

Currently, we support a **max edition size of 100**.

Once an edition is created, the **edition size** is set in stone, you cannot increase it, you can however 
reduce it.

Scarcity vs abundance comes into play when making the choice about edition size.
We support and promote both `single-edition` and `multi-edition` artworks. 
Please reach out on [Discord](https://discord.gg/2whPWbq) to speak to other artists about this age-old topic of 
scarcity vs abundance, ultimately though it's your call.

**Price**

Pricing is hard from our experience, especially for new comers to the space, please reach out on 
[Discord](https://discord.gg/2whPWbq) to speak to other artists on this subject. 

There is currently a minimum price of _0.01 ETH_.

#### Image/artwork usage

You must adhere to copyright, originality and KO's terms and conditions when minting. Reputation is king in this space, so
 we ask those involved to respect other artists and collectors in these regards.

## Collectives

You can currently set up to 5 `Ethereum` addresses as a collective collaborators on future work. These allow you to allocate a percentage of funds between the collaborators on every sale, this works on both primary and secondary sales when they happen on the KO platform. You can set up new collectives through the minting portal by selecting the 'Build collectives' option.

<img width="70%" src="https://storage.googleapis.com/public-blog-asset/doc-site/initial-slide-minter.png">

After clicking through you will be able to see any collectives that either you have created or that others have created, and you are a part of. In the bottom right side of the page you will have the option to 'create collective'.

<img width="70%" src="https://storage.googleapis.com/public-blog-asset/doc-site/collectives-initial-page.png">

Here you will be able to add your collaborators to your collectives via their wallet addresses. To add or remove collaborators you can use the '+' and '-' buttons. You can also set the royalty allocations for each individual which can be from 1% to 99% as long as they all add up to a total of 100%. You can then click deploy collectives which will launch a transaction which once complete will create the collective. This collective can now be used indefinitely but will be tied to the conditions of how it was initially constructed.

<img width="70%" src="https://storage.googleapis.com/public-blog-asset/doc-site/collectives-second-page.png">

In the future we hope to introduce greater functionality to these collectives such as governance and the ability to sell future royalties from the collectives.

_**To note:** we only support whole numbers for percentage splits, so if a split of 50/50 happens, taking into account 
[KO fees](./fee-strucutre.md) this means that the collaborator may receive 1% less than the other part due to rounding up or down._

## How long does it take to appear on KO?

Once the transaction has been sent from your wallet, it usually takes 3-5 minutes after being minted for it to 
appear on KnownOrigin. 

We currently have a restriction of **30 uploads every 30 days**. The goal of this is to not overwhelm collectors and to try
 give some exposure to every new creations.

## Scheduling sale date

You also have the option to schedule the start time of your sale on KO. This option can be found in the minting form.

Please note:

* Time is ALWAYS in [UTC](https://time.is/UTC) - please get in contact on discord if you need help on this
* This cannot be changed once set
* The timer is on-chain and cannot be circumvented by bypassing the website 

This will add a countdown timer to your artwork page.

<table><tr><td>
<img :src="$withBase('/artwork-management/scheduled-sale-edition.png')">
</td></tr></table>

### Why would you do this?

We added this feature to enable artists to be better able to build a hype cycle for their releases and even do group releases. This would also enable you to schedule multiple works to drop at the same time.     

## Promoting your work

* Socials / make sure you are building a brand which collectors will recognise and fall in love with.
* Be an active member of the scene by signing up for any competitions that are running and be active in the community Discord. Collectors are more likely to buy from a name they can recognise and someone they know is dedicated.
* Try to build a lasting relationship with the collectors who are interested in your work.
* [Artist checklist of success](https://www.trevorjonesart.com/blog/artist-checklist-for-success) by [Trevor Jones](https://knownorigin.io/trevor-jones)
* [How To Build a Social Following for Your Art](http://www.snapfluence.com/resources-blog/2017/9/1/how-to-build-a-social-following-for-your-art)