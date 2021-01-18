# Trending Engine

## What is it?

The KO trending engine is our first iteration at building a simple tool which aims to highlight
 who and what is "trending" within the KnownOrigin ecosystem. 

It attempts to find trends against 3 types of entity:
 - The **artists**
 - The **artworks**
 - The **collectors**

At the moment it is purely information and does not impact directly anything which happens on the site. 
We do surface trending scores on users profiles if they are within the top 25. 

[Trending Overview](https://knownorigin.io/trending)

<table><tr><td>
<img :src="$withBase('/trending/trending.png')">
</td></tr></table>

## How it works?

In its simplest form we look at a **rolling 2 week period** and then weight different actions accordingly. 

The algorithm uses a **decaying** function which weights things higher, the more recently they occurred.  

A few key aspects of the current iteration are as follows:

 - We try to look at **all aspects of verifiable data** we have that include mostly **on-chain**, but also **off-chain** interactions
 - The price of the **sale does not directly impact the weighting**
 - The **seniority** of the piece does have a some impact
 - For **Genesis** artwork, these are boosted somewhat in an attempt to give new artists and collectors some love 
 - You can be **penalised** if specific conditions are triggered. 
 - New creations are rewarded similarly to purchases. 
 
Ultimately this is an early iteration of a tool which we hope to make more useful and prominent over time. 

Future iteration we hope to aggregate more data from outside of the KO ecosystem in an attempt to provide deeper
more insightful analysis of what's "trending". 
