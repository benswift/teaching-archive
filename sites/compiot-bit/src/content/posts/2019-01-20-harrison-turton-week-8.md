---
author: Harrison Turton
date: 2019-01-20
title: Blocked Ops & Distance Routing
description: Routing protocols
week: 8
---

We've yet to receive our boards, and so development has stalled slightly. Instead of discussing our
physical artefact, I'm going to explore some routing algorithms/protocols for the final product.

[Prof. Olivier Bonaventure](https://inl.info.ucl.ac.be/obo) (Université catholique de Louvain, Belgium) authored a
[fantastic overview](http://cnp3book.info.ucl.ac.be/principles/dv.html) of *Distance Vector Routing*.

## Distance Vector Routing

This is possibly one of the simplest distributed routing protocols I've come across<sup>1</sup>. It allows routers to discover
all (reachable) destinations within the network -- i.e. if three nodes are connected:

```
Node A > Node B > Node C
```

Then `Node A` will consider itself "connected" to `Node C`, even though they are not immediate neighbours.

Distance vector routing will also discover the "shortest path" between two nodes. "Shortest" doesn't necessarily mean physical
distance, or even the number of hops. Each edge is associated with a *cost*. This could represent distance, or (for example), power
draw. Perhaps we'll prefer routes with lower power requirements, despite them spanning a longer physical distance.

**The Algorithm**

Each node maintains a *routing table*. For each known destination *d*, the table stores the following information:

* `link` as the outgoing edge the node is using to communicate towards the destination (but not necessarily the destination itself).
* `cost` the sum cost of the shortest path to reach the destination.
* `time` the timestamp of the last record containing the destination.

The node regularly broadcasts its own routing table. This allows the network to continuously update their topology, and learn of
shorter routes.

```
# This runs every few seconds
broadcast_table():
	routes = []
	for node in routing_table:
		route = (node, routing_table.getCost(destination))
		routes.add(route)
	broadcast(routes)
```

This is all well & good – but how do we get started? On initialization, no-one knows anything!

At the beginning, a node only knows itself, thus the routing table will only have one entry -- the node itself. This is
then broadcast (as described) with a distance of 0.

When a node receives a response, it will check if the foreign node already exists in its routing table. Two things could happen:

1. The foreign node is unknown, and thus saved to the routing table.
2. The foreign node has been seen before – we compare the new route with our existing one. If it is more efficient, then we update the routing table.

```
# Invoked when a node sends its routing table
# table: the routing table
# node: the node that sent it
handle_receive_table(table, node):
	for route in table:
		if !routing_table.contains(route):
			routing_table.add(route)
			return
		current_distance = routing_table.getRoute(route.node)
		if current_distance + 1 > route.cost:
			routing_table.replace(route.node, route)
```

The existing table entry is updated if:

1. The new route is cheaper than the already known one
2. The new route was received from the same node as the current best route -- this indicates that the network topology has changed.

Now, this doesn't take into account connection & node failures. To handle this, we attach a handy timestamp to every route in the routing table. Since all
nodes broadcast their table every `n` seconds, we can assume that nodes have died (or become unreachable due to network topology changes) if we don't receive
any messages from them within some threshold.

<sup>1</sup> Much of this explanation is taken from [Prof. Bonaventures article](http://cnp3book.info.ucl.ac.be/principles/dv.html)
