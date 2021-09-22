## What is Subgraph?

TheGraph network provides a data availability layer for which decentralised applications, such as KnownOrigin, can
build upon to provide a more robust and improved user and developer experience.

SubGraphs are deployed to TheGraph network and contain public, provable and immutable mapping logic which translates
the state of the smart contract suite along with the IPFS data stored for all KnownOrigin assets in to public GraphQL
service.

This service can be accessed by most GQL libraries and this is what powers most of what you see on the KnownOrigin
platform.

KnownOrigin uses this Subgraph based, data availability layer to abstract away all the complexities of the platform as
well as abstracting away from the consumer the various different versions of KnownOrigin NFTs which have been developed
and deployed over the years. On this point, the entities `Edition` and `Token` all have a `version` field, this
determines the `KODA` NFT version which they pertain to.

The main domain objects you will most likely be concerned with are as follows:

* `Edition` - primary artwork entity - represents a group of Tokens as well as being used in the primary sale of an
  artwork
* `Token` - a single token/piece of artwork - this is always owned by a single ETH address
* `MetaData` - a representation of all metadata for an edition/token
* `Artist` - an entity that mints artwork on the platform
* `Collector` - an entity who has owned 1 or more KODA tokens

There are many other entities in the Subgraph but these entities are the most commonly used ones

### Useful links

#### Source code

* [SubGraph code](https://github.com/knownorigin/known-origin-subgraph)
* [KnownOrigin V3 Smart Contracts](https://github.com/knownorigin/known-origin-contracts-v3)
* [KnownOrigin V2 Smart Contracts](https://github.com/knownorigin/known-origin-contracts)

#### Hosted subgraph

* [Mainnet](https://thegraph.com/legacy-explorer/subgraph/knownorigin/known-origin)
* [Rinkeby](https://thegraph.com/legacy-explorer/subgraph/knownorigin/knownoriginrinkeby)

#### Studio (migration in process)

Note: We are in the process of migrating to use the fully decentralised graph network, 
eventually this will completely replace the hosted service.

* **Mainnet** - https://thegraph.com/studio/subgraph/known-origin
* **Rinkeby** - https://thegraph.com/studio/subgraph/known-origin-rinkeby

## Common Queries

The following queries can be used in tandem with the links above to test out any queries you wish to use.

### Artist

Artists have the ability to create new art on KnownOrigin.

### Get artist by address

```graphql
{
    artists(where:{id:"0x3768225622d53ffcc1e00eac53a2a870ecd825c8"}){
        id
        address
        salesCount
        editionsCount
        totalValueInEth
        lastEditionTimestamp
        firstEditionTimestamp
        highestSaleValueInEth
        # Load all associated unburnt editions as well  
        editions(where:{active:true}) {
            id
        }
    }
}
```

Other fields do exist but these are the most commonly used fields for the `artist` entity.

Also, `artist` data is not created until they mint their first item on KO.

#### Get Creations for Artist

`Edition`'s represent a bag or group of tokens which are then modelled in Subgraph as `Token`'s once primary purchase
happens.

```graphql
{
    editions(where:{artist_in:["0x3768225622d53ffcc1e00eac53a2a870ecd825c8"], active:true}) {
        id
        version
        createdTimestamp
        tokenIds
        tokenURI
        collaborators
        startDate
        totalSupply
        totalAvailable
        totalEthSpentOnEdition
        # Metadata about the edition i.e. everything in the token URI + more
        metadata {
            id
            name
            description
            image
            scarcity
            artist
            tags
        }
        # All current owners of this edition
        currentOwners {
            id
        }
        # All owners ever of this work, some may NOT currently own it
        allOwners {
            id
        }
    }
}
```

We also offer the ability to collaborate with other artists when minting, to do this change the queries `where` clause
to the following ` where: { collaborators_contains: ["<address>"] }`

Notice the use of `active:true` - when an Edition is 100% burnt and removed from the KO platform, active is set
to `false`

The examples above if for the artists [xcopy](https://knownorigin.io/xcopy).

### By Token

#### By ID

```graphql
{
    tokens(where:{id:"264615"}){
        id
        version
        transferCount
        editionNumber
        tokenURI
        birthTimestamp
        artistAccount
        lastTransferTimestamp
        lastSalePriceInEth
        totalPurchaseCount
        totalPurchaseValue
        primaryValueInEth
        # The associated metadata
        metadata {
            id
        }
        # The associated edition
        edition {
            id
        }
        # Current owner
        currentOwner {
            id
        }
        # All owners including historic owners
        allOwners {
            id
        }
    }
}
```

To expand on this to find all tokens owned by account uss the follow variation:

```graphql
{
    tokens(where:{ currentOwner_in: [ "0x0f48669b1681d41357eac232f516b77d0c10f0f1" ] }){
        ...token fields
    }
}
```

This will get you all tokens owned by that ETH account.

--------

### Collector

A `Collector` is any account who has taken ownership of a `KODA` token.

```graphql
{
  collectors(where:{id:"0x0f48669b1681d41357eac232f516b77d0c10f0f1"}){
    id
    firstSeen
    firstPurchaseTimeStamp
    lastPurchaseTimeStamp
    totalPurchaseCount
    totalPurchaseEthSpent
    primaryPurchaseCount
    primaryPurchaseEthSpent
    secondaryPurchaseCount
    secondaryPurchaseEthSpent
    secondarySaleCount
    secondarySaleEthTotal
    # Currently owned tokens
    tokens {
      id
      # token metadata
      metadata{
        id
      }
      # edition of token
      edition{
        id
      }
    }
  }
}
```

--------

### Order book

`Documentation Coming soon`
