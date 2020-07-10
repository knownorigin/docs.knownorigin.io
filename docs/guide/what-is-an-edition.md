# What is an Edition?

An edition represents a limited set of tokens which all share the same attributes but are unique by token ID. 
For example, if I create an edition of 25, each token issued from this edition will share nearly all the same attributes
 as when the edition was originally minted. Tokens will also all be sequentially assigned a unique token ID 
 based on the order they are issued.

KnownOrigin enforces the number of tokens which can be issued from an edition on-chain and can be verified. 

## What defines an edition

An edition is made up of two sets of data, consisting of data stored on IPFS which is then referenced on chain, 
plus some additional on-chain attributes which enforce things like creator and edition size amongst other things.

In general these two pieces of data defined the blue print for what an edition is and what its associated metadata are.

### What data is stored on-chain

When an edition is minted the following items are defined and recorded on-chain:

```solidity
  struct EditionDetails {
    // Identifiers
    uint256 editionNumber;    // The edition ID, all tokens issued from a single edition will share the same edition ID
    bytes32 editionData;      // Optional data field
    uint256 editionType;      // An extra type identifier
    // Config
    uint256 startDate;        // The date an edition is available
    uint256 endDate;          // Ths date an edition cannot be issued from
    address artistAccount;    // The artist who created this edition
    uint256 artistCommission; // Artists commission percentage
    uint256 priceInWei;       // Initial base price
    string tokenURI;          // IPFS data link
    bool active;              // Is the edition alive or dead
    // Counters
    uint256 totalSupply;      // Total tokens issued
    uint256 totalAvailable;   // Total available within an edition
  }
```

Some of these properties can change such as `totalSupply` being incremented by one each time a token has been issued. 
Along with the `priceInWei` which can be modified by the `artistAccount` associated to it.

There are also some other properties which are stored on-chain when an edition is being created, such as any collaborators 
details which are then used to split any fees accordingly.

KnownOrigin ($KODA) tokens are ERC721 compliant.

### Why did we create Editions like this?

Our first iteration of KnownOrigin created all the tokens upfront, after doing this for a few months we realised it was prohibitively 
expensive to do so, we also originally had ideas that editions could be in the hundreds or even thousands of tokens, 
like traditional print media.

So we move to minting on demand letting the artists create a blue print, significantly reducing GAS costs. It also
 enables some other advantages beyond just GAS costs savings, since an edition is a single entity you can easily control
  aspects such as price in a single, cost effective transaction, as well as easily burning unsold tokens without burning 
  all tokens individually.

It's not all roses though, this comes with some trade-offs - mainly in that all the tokens don't appear immediately in a creator's wallet. 
You can however gift tokens to yourself which then causes them to appear on site such as OpenSea and CryptoVoxels. 

In the future we may change this method if it causes to many problems or hurdles for people, for now though this is how KO works. 

### What data do we store on IPFS?

[IPFS](https://ipfs.io/) _(unfortunately)_ stands for Inter Planetary File System, although not a great name in my opinion 
it is a `permissionless`, `peer-to-peer` `distributed` file system which has some unique properties.

The IPFS network enabled files to be uploaded and stored by a network of willing participants, in a network of peer-to-peer nodes.
It also has other additional, important, features such as content addressable data, also known as IPFS hashes or CIDs (Content Identifiers). 
This means that the data uploaded produces a unique fingerprint based on the data itself, enabling you to prove the data stored on IPFS marries 
up to the reference kept on-chain, along with ensuring it cannot be changed for something else as the hash would also change.

A sample `JSON` blob we store on IPFS can be seen below:

```json
{
    "name": "Test",
    "description": "Test",
    "attributes": {
        "artist": "KnownOrigin",
        "scarcity": "rare",
        "tags": [
            "abstract",
            "acrylics",
            "another-tag"
        ],
        "asset_type": "video/mp4",
        "asset_size_in_bytes": 38247618,
        "cover_image_type": "image/png",
        "cover_image_size_in_bytes": 7588405
    },
    "external_uri": "https://knownorigin.io/artists/0x3f8c962eb167ad2f80c72b5f933511ccdf0719d4",
    "image": "https://ipfs.infura.io/ipfs/QmbayRoC4vECrNiJ3yAFK3YQ9MzAfhKgpAspNLRSBc8ZeV/asset.png",
    "animation_url": "https://ipfs.infura.io/ipfs/QmSoBGYCdZi1zMkZJytiYbyCG3dPKaG4fJmyQzAKihKfW3/asset.mp4",
    "artist": "0x3f8c962eb167ad2f80c72b5f933511ccdf0719d4"
}
```

_Note: - not all tokens have the same metadata, as the project has evolved some attributes have been dropped and some have been added._ 

IPFS, although used widely due to some of the properties mentioned above, it also has some downsides.
 The main problem is how it relies on trusted or incentivised parties, such as KnownOrigin, to always maintain a copy of that data. 
 However, the good thing is that anyone, really anyone can also maintain this same data, anymore can participate in its
  upkeep by simply deciding to also store the files.
 
We have been looking at alternatives such as Arweave and FileCoin, along with others.
 In the future may consider leveraging additional storage options if required to do so.  
