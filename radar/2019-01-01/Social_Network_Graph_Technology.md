---
title:      "Social Network Analysis (SNA) / Organizational Network Analysis (ONA)"
ring:       discover
quadrant:   infrastructure-and-operational-technology

---

![state](./../assets/images/item_state_under_construction.png)

## Why? ##
Social network analysis (SNA) is the process of investigating social structures through the use of [networks](https://en.wikipedia.org/wiki/Network_theory) and [graph theory](https://en.wikipedia.org/wiki/Graph_theory). (Wikipedia contributors, "Social network analysis," Wikipedia, The Free Encyclopedia, https://en.wikipedia.org/w/index.php?title=Social_network_analysis&oldid=876624675 (accessed January 8, 2019).). 

Because of the great explanatory power of SNA and availability of technology to store, visualize and analyze social networks, exploring how to use SNA to help recommend things like useful content and actions for customers using our software products, and, to better analyze and understand for customers, who want to transform their organization has potential.

Haufe Group has recently developed effective methodologies like Rythmix and product ideas like People OS for understanding pain, identifying challenges within customer organizations and guiding customer transformations. This new business model has opened opportunities for offering cross-sections of the HG product portfolio that were previously not imagined. But, to acquire customers, this kind business model requires a deep understanding of customer challenges: more accurately, Haufe Group must demonstrate that it has a better understanding of these challenges than competitors, who want to acquire the same businesses.  The idea is -

Adding social network graphing to HG software products enables Haufe Group to directly obtain a wealth of valuable data for what customer employees need to be successful - low-cost and automated - and - parallel to other methods like Rythmix and prioritized technology like machine learning. 

Using this data to model networks in a legal, ethical way and performing social network analysis, provides a powerful, complementary source of information, that enables deep understanding of the true working of customer organizations based on real or hypothesized relationships between people. 

Leveraging this understanding to analyze customer organizations has potential to enhance decision making for transformation processes and change management, which, in turn, can strengthen the commercial strategy, improve the product offering of Haufe Group and raise the value of what we provide to our customers . 

## Special constraints ##

Because data gathering is a part of SNA / ONA - legal rquirements for data security must be observed. 

## Areas of Application ##

General application social network analysis is to locate the social network characteristics of an organization or suborganiztion like
- [Communities within the network](https://en.wikipedia.org/wiki/Community_structure#Importance)
- How "connected" are networks and communities in these networks
- location of the [highly connected areas](https://en.wikipedia.org/wiki/Small-world_network#Properties_of_small-world_networks) and where are the [poorly connected areas](https://en.wikipedia.org/wiki/Structural_holes)
- Types of relationships between people within a network
- Which of relationships are most important, e.g. form the basis of communities
- [Centrally located "Popular" people who influence their communities](https://en.wikipedia.org/wiki/Social_marketing_intelligence), [people who connect different parts of a network](https://en.wikipedia.org/wiki/Bridge_(interpersonal))

This is facilitated with network graph technologies. 

## Technology choices/solutions ##

Technology choices for two areas:
- Storage 
- Visualization

Storage can be done via [graph databases](https://neo4j.com/why-graph-databases/) (but doesn't have to be). One special characteristic of graph databases is that relationships (connections) are first class citizens. This gives graph databases a semantic and performance advantage as the data store for "networks" of all types. Popular graph databases are:
- [Neo4J](https://neo4j.com/product/)
- [Stardog](https://www.stardog.com/why-stardog/)
- AllegroDB

Visualization tools enable creating insightful social network graph visuals for analyzing and presenting.
- [Gephi](https://gephi.org/)
- Neo4J Bloom
- Pajek

Software visualization libraries
- [Sigma.js](http://sigmajs.org/) - [SJS Source](https://github.com/jacomyal/sigma.js/)

Machine Learning
- python-based ML
- R-based ML
- Native algorithms like neo4j graph algorithms


## Our projects ##

DLX - by Akademie is experimenting with the NEO4J graph database as the underlying datastore for this product, storing entities like people, learning topics, video clips as nodes and events - "likes", "watched", "has_a_skil" - as relationships (10% relationships). Nodes and relationships are to be based on the 10%, 20%, 70% learning principle: where learning takes place as - 
- 10% formal training
- 20% mentoring
- 70% learning on the job

By calculating the users preferences for what they want to learn it is possible to create a new relationship, Similarity, and "find learning communities" by running a community findng algorithm. 

ONA - Research into discovering organizational networks for People.OS. Team ONA has successfully extracted organizational networks by analyzing communication patterns through machine learning to locate the so called "alpha" influencers in the . 

## Contact ##

DLX

Felix.Kubasch@haufe-lexware.com - Product Owner DLX

ONA

Agron.Fazliu@haufe.com

Vladimir.Mijatovic@haufe.com
