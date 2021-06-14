# Unlockable Content

This is a new feature on KnownOrigin that adds the ability for creators to set unlockable content, this content can only be 
accessed by token holders of the artwork.

Unlockable content has become a common feature request from our community, so we are pleased to launch the first version of it.

### How it works?

1. A creator mints an edition on KnownOrigin
2. Once minted they can set an unlockable `link` as well as a `message`. This is done by signing a message from the
   creators' wallet. Only the creator can set content to be redeemed
3. A collector purchases an edition with unlockable content defined
4. Once the transaction has been confirmed they can now unlock any content set from the creator

A note on the design rational and trade-offs: 

We decided to go with a simple, flexible solution for day one which trades decentralisation with convenience. 
In that we mean that KnownOrigin is the arbiter of who can access the content and how its stored. It also means that 
unlockable content of your tokens can only be set and redeemed on KnownOrigin atm. Malicious content will be removed 
if reported to the KnownOrigin team.

### Some potential use cases

A few potential use cases which the team put forward:

1. Providing a higher resolution version which can only be unlocked by the collector
2. Providing an alternative type of media along with the purchase e.g. a font type or .fbx file
3. Providing an extra video or written document about the creation process itself
4. Specifying instructions which the buyer can use to gain access to external hidden content
5. Specify instructions on how to claim a physical item.

### The rules

**A creator can update unlockable content.** This allows creators to update any broken links which they have previously
specified, also allowing them to experiment with changing incentives for collectors on primary and secondary market.
We record all changes made so we can audit and help in any problems which may arise. 

**Unlockable content is the same for all tokens in an edition.** For example, an edition of 10, all 10 tokens will receive
the same unlockable content.

**Unlockable content can be retrieved on the primary and secondary markets**. The only stipulation is the content can
ONLY be retrieved by the current owner, so if a token changes hands, any unlockable content can no longer be retrieved
by the previous owner.

**The creator is responsible for maintainability of externally linked content**. The current implementation allows for
creators to set a link and a message, any externally linked content is not maintained by KnownOrigin.

**There is no limit on how many times the content can be viewed**. This first version we dont restrict the number of
times an owner can view it. We do record each attempt internally for an audit trail though.

**Content must adhere to the community code of conduct**. Further details can be found on [here](/guide/code-of-conduct/). 

We are happy to iterate and work with creators on finesse the current solution so please jump on [Discord](https://discord.gg/2whPWbq)
and let us know how we can make it better. 

### Creating unlockable content

After minting an edition, visit the `Artworks` tab on your `profile` page.

Click the 3 dots `...` menu and click on the `Set unlockable content` menu item

<img :src="$withBase('/unlockable-content/set-unlockable-content-menu-item.png')">

Enter a **https** link and a message.

<img :src="$withBase('/unlockable-content/create-unlockable-content.png')">

Once set you will see a small icon on the thumbnail view, and a larger label on the artwork page.

A label on the artwork page (token and edition):

<img :src="$withBase('/unlockable-content/unlockable-label.png')">

An icon on artwork cards:

<img :src="$withBase('/unlockable-content/unlockable-icon.png')">

### Redeeming unlockable content

To purchase items with unlockable content, notice the small icon and large label on the artwork page.

After purchasing an artwork with unlockable content.

When visiting the token page or via the 3 dots `...` menu you will see a `View unlockable` link or button, click this.

<img :src="$withBase('/unlockable-content/view-unlockable-content-menu-item.png')">

You will be prompted to sign a message which we own to validate ownership.

This message is FREE and DOES NOT cost any GAS.

<img :src="$withBase('/unlockable-content/view-unlockable-sign-message.png')">

Once completed successfully, you will gain access to the content.

<img :src="$withBase('/unlockable-content/unlocked-content-modal.png')">
