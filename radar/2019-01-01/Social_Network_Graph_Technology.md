---
title:      "Social / Dynamic Network Analysis"
ring:       discover
quadrant:   infrastructure-and-operational-technology

---

![state](./../assets/images/item_state_under_construction.png)

## Why? ##
Social network analysis (SNA) is the process of investigating social structures through the use of [networks](https://en.wikipedia.org/wiki/Network_theory) and [graph theory](https://en.wikipedia.org/wiki/Graph_theory). (Wikipedia contributors, "Social network analysis," Wikipedia, The Free Encyclopedia, https://en.wikipedia.org/w/index.php?title=Social_network_analysis&oldid=876624675 (accessed January 8, 2019).)

Gathering Social network data in an legally acceptable, ethical way and performing social network analyis provides a powerful, complementary source of information, that augments deep understanding of the true working of organizations, which can also assist transformation processes and change management, and finally, can strengthen the commercial strategy of Haufe Group.

Haufe Group has recently developed effective methodologies like Rythmix for understanding pain, identifying challenges within customer organizations and guiding customer transformations. This new business model has opened opportunities for offering cross-sections of the HG product portfolio that were previously not imagined. 

To acquire customers, however, this kind business model requires a deep understanding of customer problems: more accurately, Haufe Group must demonstrate that it has a better understanding of these problems than competitors’, who want to acquire the same businesses.  

Adding social network mapping to HG software products enables Haufe Group to provide a wealth of valuable information about the real nature of customer organizations - low-cost and automated - complementary to other methods like Rythmix and other areas of prioritized tecnology like machine learning. 

Using these social insights to gain  “an ever deeper understanding” of the customer organization, effectively mapping and visualizing relationships between employees based on what they want to learn, what the need to know and, maybe, with whom and what they are communicating, can have a high-impact and improve the accuracy of what Haufe Group decides to offer to customers, and how it is offered. 

## Areas of Application
General application social network analysis are - 
- To locate aspects of a network like dense areas and social gaps
- People who are highly popular in a network
-  

## Technology choices/solutions ##

Technology choices may be made in two areas:
- Storage 
- Visualization

Storage can be done via graph databases (but doesn't have to be). One special characteristic of graph databases is that relationships (connections) are first class citizens. This gives graph databases a semantic and performance advantage as the data store for "networks" of all types. Popular graph databases are:
- Neo4J
- Stardog
- AllegroDB

Visualization tools enable creating presentation-ready social network graph visuals and to use these visuals for analysis.
- Gephi
- Neo4J Bloom
- Pajek 

Software visualization libraries
- Sigma.js
- VivaGraph by Anvaka

## Our projects ##

DLX - by Akademie is experimenting with the NEO4J graph database as the underlying datastore for this product, storing entities like people, learning topics, video clips as nodes and events - "likes", "watched", "has_a_skil" - as relationships. Nodes and relationships are to be based on the 10%, 20%, 70% learning principle: where learning takes place as - 
- 10% formal training
- 20% mentoring
- 70% learning on the job

## Contact ##

Felix.Kubasch@haufe-lexware.com - Product Owner DLX

Scott.Speights@haufe-lexware.com - Social network and graph database research DLX



