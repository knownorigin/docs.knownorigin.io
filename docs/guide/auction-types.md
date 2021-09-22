# Auction types

## Buy now

This is where you will be able to purchase tokens for the list price instantly. This option is available anytime you
see a 'Buy Now' option on a token page.

## Bids

This is where you will be able to make a bid on an artwork for the artist or collector to consider accepting. Please
note your bid will be locked for 12 hours after it is placed to give a chance for the artist to see it. Your funds will
also be returned to you if you are outbid by another collector.

## 24hr reserve auction

For these a reserve price will be set by the creator (this can later be changed from the three dots (...) menu). The
reserve price means that only bids that match or exceed it will start the 24-hour countdown timer. Until this bid is
beaten it will be locked until the end of the auction. Please note these can only be set on single editions.

If the first bid to meet the reserve is beaten that higher bid will then also be locked till the conclusion of the
auction and the same applies for any further bids. If an additional bid is made within the last 15 minutes of the
countdown an additional 15 minutes is added to the timer. Please note that once the auction has finished either the
seller or the buyer will need to result the auction. Resulting the auction can be done in the 'offers' tab on their
profiles.

## Stepped sale

Stepped sales are an exciting way to price a series of editions that rewards collectors who get in early with a lower
price and collectors who get in later but pay higher price with lower editions numbers.

Here you will need to set a `base price` which is what the first edition in the series will cost.

You will then need to set the `step price` which will determine how much the price will go up for the series after each
edition is sold.

For example if the base price is set at `1 Ξ` and the step price is set to `0.2 Ξ` after the first is sold for `1 Ξ`,
the next edition will be available for `1.20 Ξ`.

<img :src="$withBase('/step-sales/Step_Sale_graphicv2.jpg')" height="250">

::: tip

Please note that token ID will be issued in reverse order meaning the last token sold will be the first edition number
in the series.
:::

<img :src="$withBase('/step-sales/BuyNext.jpg')" height="250">

When purchasing a stepped sale auction you will be presented with the option to purchase the current or the next
available step price.

However, if you feel you may be beaten out by other collectors in doing so we offer the option to set a custom max step
price you are willing to pay for the work.

This means that if the next available step has already been purchased you will be able to complete your transaction on
higher steps up to the max you have selected.

Please note we will secure the cheapest step price available to you, and you will be refunded anything beyond what is
needed to secure the item.

<img :src="$withBase('/step-sales/modal.png')" height="500">
