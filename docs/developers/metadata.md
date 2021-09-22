### What is metadata?

Below is an example of the `JSON` blob which is returned from the smart contract function `tokenUri(uint256 tokenId)`
this is often termed token `metadata` but many people in the NFT industry.

There are other types of metadata that KO stores on-chain such as `creator`, `edition size` as well as other derived
metadatas such as token sale state and sale type, these extra onchain metadatas are not covered by this article,
only `JSON` based, `tokenURI` metadata.

In general, we loosely follow OpenSea's standard along with including extra fields as we need.

Not all tokens have every property, this is due to either the age of the token i.e. metadata fields has evolved over
time but also not all fields are required i.e. image assets don't need a cover image or animation_url.

Any example of a fully populated metadata can be found below.

```json
{
  "name": "Test",
  "description": "Test",
  "attributes": {
    "artist": "KnownOrigin",
    "scarcity": "rare",
    "format": "the-format",
    "theme": "the-theme",
    "production_year": 2021,
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
  "image_sphere": true,
  "cover_image_set": true,
  "external_uri": "https://knownorigin.io/artists/0x3f8c962eb167ad2f80c72b5f933511ccdf0719d4",
  "image": "ipfs://ipfs/QmbayRoC4vECrNiJ3yAFK3YQ9MzAfhKgpAspNLRSBc8ZeV/asset.png",
  "animation_url": "ipfs://ipfs/QmSoBGYCdZi1zMkZJytiYbyCG3dPKaG4fJmyQzAKihKfW3/asset.mp4",
  "artist": "0x3f8c962eb167ad2f80c72b5f933511ccdf0719d4"
}
```

* `image` - the image OR cover image used for displaying the visual aspect of any KO assets
* `animation_url` - the video, 3D or other interactive/animation assets to display 

### How is it stored?

We currently use [IPFS](https://ipfs.io/), InterPlanetary File System, for storing metadata and images. The
InterPlanetary File System is a protocol and peer-to-peer network for storing and sharing data in a distributed file
system.

The IPFS network enabled files to be uploaded and stored by a network of willing participants, in a network of
peer-to-peer nodes. It also has other additional, important, features such as content addressable data, also known as
IPFS hashes or CIDs (Content Identifiers). This means that the data uploaded produces a unique fingerprint based on the
data itself, enabling you to prove the data stored on IPFS marries up to the reference kept on-chain, along with
ensuring it cannot be changed for something else as the hash would also change.

We currently pin the data to `Infura` and `Pinata` to provide a more robust level of pinning security.

You will also often see it referenced as `ipfs://ipfs/{HASH}` or `ipfs://{HASH}` - copy the hash to resolve this pinned
data and then use any ipfs gateway to find the actual content.

### Further reading

* [What is an Edition on KnownOrigin?](/guide/what-is-an-edition)
* [ERC721 specification](https://eips.ethereum.org/EIPS/eip-721)
* [OpenSea metadata specification](https://docs.opensea.io/docs/metadata-standards)
