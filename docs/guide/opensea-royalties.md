### OpenSea Royalties

#### The problem

`OpenSea` and potentially other NFT aggregators may not pay out royalties to creators when minted on platforms like
`KnownOrigin`, this is often due to a technical limitation in the way they pay out fees, typically restricting payments
to a single address, this clearly does not work when we have 4000+ creators.

Other problems exist such as non-atomic post sale settlement, the custodial nature of handling funds, ideally royalties
should be handled at the time of sale but these things take time and effort to solve properly, it's an ecosystem wide
challenge.

When items are bought and sold on `KnownOrigin` itself, we correctly adhere to our contracts rules and correctly payout
royalties to any artist or collective.

This unfortunately cannot be guaranteed for all other platforms. In response to this problem we have built a few
things:

1. **Support for [ERC-2981](https://eips.ethereum.org/EIPS/eip-2981)** - when this is widely adopted **any**
   marketplace can easily pay out to the original creators. Read a blog we wrote on this
   subject [here](https://medium.com/knownorigin/eip-2981-simple-and-effective-royalty-standards-for-all-dbd0b761a0f0).
   We also support the **Rarible royalties** standard which should also mean royalties are payout to the creators.
   **The real solution is ERC-2981 in our opinion**

2. **An open-source royalties' distributor** - this allows `OpenSea` to send any royalties captured to a single
   address. We can then we can generate a set of merkle proofs based on the `OpenSea` API, in essence running an
   off-chain reconciliation process in a non-custodial, public and verifiable way. Although the KO team is running this
   process there is a clear path to decentralisation which is key to this solution.

-----

::: tip See the code

GitHub: [merkle-royalties-distributor](https://github.com/knownorigin/merkle-royalties-distributor)
:::

-----

::: warning Deployed Midnight UTC, 23rd September 2021

All items listed from this point should capture royalties payments on OpenSea
:::

### Merkle based royalties distributor

#### How it works

Periodically `OpenSea` payout royalties, this is based on their own rules and is out of our control when this happens.

When a payout occurs, we see the event and then run the reconciliation script, publish the
results [IPFS](https://ipfs.io/) and update the smart contract with a merkle tree that contains everyone's due
balances.

**This appears to happen every 1-2 weeks**

Claimants can then check their profile and draw down any funds which have accrued from OpenSea.

<img :src="$withBase('/claiming-royalties/claim-royalties-button.png')">

Claimants can also let royalties build up over time and then only draw down when they have enough to justify any `GAS`
costs.

<img :src="$withBase('/claiming-royalties/claim-royalties-modal.png')" height="400">

### Flow diagram of how it works

![](https://github.com/knownorigin/merkle-royalties-distributor/blob/master/merkle-distributor.png?raw=true)

::: tip Merkle based royalties distributor

See the code: [merkle-royalties-distributor](https://github.com/knownorigin/merkle-royalties-distributor)

This code is open-source and can be used by any project!
:::
