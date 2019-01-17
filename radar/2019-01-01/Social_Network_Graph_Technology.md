---
title:      "Social Network Analysis (SNA) / Organizational Network Analysis (ONA)"
ring:       discover
quadrant:   infrastructure-and-operational-technology

---

![state](./../assets/images/item_state_under_construction.png)

## Why? ##
Social network analysis (SNA) is the process of investigating social structures through the use of [networks](https://en.wikipedia.org/wiki/Network_theory) and [graph theory](https://en.wikipedia.org/wiki/Graph_theory). (Wikipedia contributors, "Social network analysis," Wikipedia, The Free Encyclopedia, https://en.wikipedia.org/w/index.php?title=Social_network_analysis&oldid=876624675 (accessed January 8, 2019).). 

Because of the explanatory power of SNA and availability of technology to store, visualize and analyze social networks, exploring how to use SNA to help recommend things like useful content and actions for customers using software products and to better analyze and understand for customers, who want to transform their organization has potential.

Haufe Group has recently developed effective methodologies like Rythmix and product ideas like People OS for understanding pain, identifying challenges within customer organizations and guiding customer transformations. This new business model has opened opportunities for offering cross-sections of the HG product portfolio that were previously not imagined. But, to acquire customers, this kind business model requires a deep understanding of customer challenges: more accurately, Haufe Group must demonstrate that it has a better understanding of these challenges than competitors, who want to acquire the same businesses.  The idea is -

Adding social network graphing to HG software products enables Haufe Group to directly obtain a wealth of valuable data for what customer employees need to be successful - low-cost and automated - and - parallel to other methods like Rythmix and prioritized technology like machine learning. 

Gathering social network data in an legally acceptable, ethical way and performing social network analysis, provides a powerful, complementary source of information, that enables deep understanding of the true working of customer organizations based on real or hypothesized relationships between people in these organizations. 

Leveraging this understanding to analyze customer organizations enhances decision making for transformation processes and change management, which, in turn, strengthens the commercial strategy, improves the product offering of Haufe Group and raises the value of what we provide to our customers . 

## Special constraints ##

Because data gathering is a part of SNA / ONA - legal rquirements for data security must be observed. 

## Areas of Application ##

General application social network analysis is to locate the social network characteristics of an organization or suborganiztion like
- Communities within the network
- How "connected" are networks and communities in these networks
- Where are the highly connected areas and where are the poorly connected areas
- Types of relationships between people within a network
- Which of relationships are most important, e.g. form the basis of communities
- Centrally located "Popular" people, people who connect different parts of a network

This is done with network graph technologies. 

## Technology choices/solutions ##

Technology choices for two areas:
- Storage 
- Visualization

Storage can be done via graph databases (but doesn't have to be). One special characteristic of graph databases is that relationships (connections) are first class citizens. This gives graph databases a semantic and performance advantage as the data store for "networks" of all types. Popular graph databases are:
- Neo4J
- Stardog
- AllegroDB

Visualization tools enable creating insightful social network graph visuals for analyzing and presenting.
- Gephi
- Neo4J Bloom
- Pajek 

Software visualization libraries
- Sigma.js


## Our projects ##

DLX - by Akademie is experimenting with the NEO4J graph database as the underlying datastore for this product, storing entities like people, learning topics, video clips as nodes and events - "likes", "watched", "has_a_skil" - as relationships. Nodes and relationships are to be based on the 10%, 20%, 70% learning principle: where learning takes place as - 
- 10% formal training
- 20% mentoring
- 70% learning on the job

ONA - Research into discovering organizational networks for People.OS. Team ONA has successfully extracted organizational networks by analyzing communication patterns through machine learning. 

## Contact ##

DLX

Felix.Kubasch@haufe-lexware.com - Product Owner DLX

ONA

Agron.Fazliu@haufe.com

Vladimir.Mijatovic@haufe.com
