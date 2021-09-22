## Building on KO

### How KO works at a high level?

KnownOrigin is a generalised mixed-media platform which allows for creatives to tokenise their work as non-fungible
tokens.

We currently use the NFT standard ERC-721 and mint directly onchain using Ethereum Mainnet.

We also have a custom-built primary and secondary marketplace as well as several other features which can be leveraged
by artists and collectors.

* `Primary sale` - the first time an item sales
* `Secondary sale` - all other sales after the primary sale

We support artist royalties and provide 12.5% back to the original artist when sold on our secondary marketplace.

#### What are Editions?

We enable creators to upload their work as editions of up to 100. This means they can generate a 1 of 1 or an edition
of 100 when they upload and mint their work. They cannot add more tokens to an edition once its created but they can
reduce and editions supply by burning tokens from an edition.

Editions are defined onchain and provable fixed editions sizes.

When an edition is generated all tokens are generated upfront and assign to the creators' wallet, these can be listed
and sold on any NFT marketplace.

Editions all share the same metadata but are given a unique ERC721 token ID, in essence they are limited edition clones
of a single artwork.

## Useful links

* [Discord](https://discord.gg/2whPWbq) - jump for any helping on building on KO
* [Mainnet Hosted Subgraph](https://thegraph.com/legacy-explorer/subgraph/knownorigin/known-origin)
* [Rinkeby Hosted Subgraph](https://thegraph.com/legacy-explorer/subgraph/knownorigin/knownoriginrinkeby)
* [SubGraph code](https://github.com/knownorigin/known-origin-subgraph)
* [KnownOrigin V3 Smart Contracts](https://github.com/knownorigin/known-origin-contracts-v3)
* [KnownOrigin V2 Smart Contracts](https://github.com/knownorigin/known-origin-contracts)
