---
title: "Streams, Lakes, and the Messy Middle: Field Notes from Enterprise Data Architecture"
date: "2026-02-02"
tags: ["data-architecture", "streaming", "data-mesh", "databricks", "kafka", "enterprise", "consulting"]
featured: true
description: "Lessons from enterprise data transformations: why technology selection matters less than ownership, and how streaming and lakehouse architectures actually complement each other."
---

Picture six stakeholders in a conference room, each claiming to have "the customer data." One pulls from batch jobs that ran 48 hours ago. Another built shadow queries against production because they couldn't wait for IT. A third reconciles everything in spreadsheets weekly, which everyone secretly uses for board reports.

This wasn't a technology problem. They had Databricks. They had Kafka. They had a data lake that cost more annually than some teams' entire budgets.

What they didn't have was alignment on who owned what, or why any of this existed in the first place.

I've seen this pattern across multiple enterprise engagements—organizations that bought the right platforms but couldn't answer basic questions about data ownership. The technology stack becomes a distraction, a way to avoid the harder conversations about organizational design and accountability.

## The False Promise of the All-in-One Platform

Databricks sells a compelling vision: one platform for everything. Ingest your data, transform it, train your models, serve your dashboards. The lakehouse architecture promises to unify data warehousing and data science, and honestly, for analytical workloads, it delivers.

But here's what I kept running into: operational systems don't think in batches.

Your fraud detection system can't wait for a scheduled Spark job. Your inventory alerts need to fire within seconds of a stockout, not hours. The customer service rep needs to see that the payment just failed, not that it failed yesterday.

Think of it like this: a warehouse optimizes for storage and retrieval. You know where everything is, you can find patterns across millions of items, but nothing happens until someone places an order. A command center, by contrast, optimizes for reaction. You're watching live feeds, making decisions in real-time, coordinating responses as events unfold.

You need both. The realization that Confluent (Kafka) and Databricks aren't competitors but complements was the first unlock in these transformations. [Kai Waehner's research](https://www.kai-waehner.de/blog/2025/05/02/the-past-present-and-future-of-confluent-the-kafka-company-and-databricks-the-spark-company/) on this pairing convinced me that the "versus" framing was the problem, not the technology.

## Where Streaming Fits (And Where It Doesn't)

Here's a taxonomy that actually helped teams make decisions: operational data moves, analytical data accumulates.

Kafka is the nervous system—carrying signals between operational components in near real-time. When a customer updates their address, seventeen systems need to know immediately. When a payment fails, the retry logic, the customer notification, and the fraud scoring all need to react in seconds.

Databricks is the brain—making sense of patterns across time, training models on historical behavior, generating insights that inform strategy. You don't train a machine learning model on a single event; you need millions of them, correlated and feature-engineered.

In one engagement, we moved from 48-hour batch refreshes to near real-time using Spark Streaming within Databricks, consuming from Kafka topics. The revelation wasn't speed—it was trust. When stakeholders could see data reflecting changes from minutes ago instead of days, they stopped maintaining shadow systems.

Michelin documented something similar in their architecture transformation, [achieving a 35% reduction in operational complexity](https://www.kai-waehner.de/blog/2025/05/02/the-past-present-and-future-of-confluent-the-kafka-company-and-databricks-the-spark-company/) by clarifying which systems owned real-time flows versus analytical aggregations. Confluent's Tableflow feature makes this stream-table duality explicit—your Kafka topics can materialize directly into Iceberg tables that Databricks consumes. The boundary becomes a contract, not a hope.

## The Skill Gap Nobody Talks About

Here's something I didn't expect: the hardest part wasn't integration patterns or schema design. It was people.

Kafka developers think in events. They model state changes, design idempotent consumers, reason about ordering and exactly-once semantics. They're building systems that never stop, that handle millions of events per second, that recover gracefully from failures.

Spark developers think in transformations. They model datasets, design pipelines that read-transform-write, reason about partitioning and shuffle optimization. They're building systems that run, complete, and produce output.

These aren't just different technologies—they're different mental models. It's like the difference between a surgeon and a physical therapist. Both work on human bodies. Both have deep expertise. But one intervenes in moments of crisis; the other guides systems through gradual change. Same domain, fundamentally different ways of thinking.

I watched teams struggle not because they lacked skill, but because they were applying the wrong mental model. Event-driven developers would try to "stream" batch patterns. Batch developers would try to "schedule" event handlers. Neither worked.

The solution wasn't training—it was team composition. You need both perspectives, explicitly acknowledged and respected.

## Data Mesh Isn't a Technology—It's an Operating Model

At some point in every engagement, someone would ask: "Should we implement data mesh?"

The question revealed a fundamental misunderstanding. Data mesh isn't a thing you implement. It's an operating model—a way of organizing people and accountability around data.

The [four pillars](https://www.datamesh-architecture.com/) are straightforward: domain ownership (teams own their data), data as product (data has users and quality standards), self-serve infrastructure (central platforms, decentralized usage), and federated governance (standards without central bottlenecks).

The 2025 State of Enterprise Data Governance Report found organizations [split almost evenly](https://board.org/data/resources/what-we-learned-from-the-2025-state-of-enterprise-data-governance-report/)—36% centralized, 36% federated—with the rest hybrid. That parity reflects genuine uncertainty about the right approach.

Here's what I observed: domain ownership is the easy sell. Teams want control over their data. Self-serve infrastructure makes sense to engineering leadership. Data-as-product thinking has momentum—Thoughtworks put it at "Adopt" in their Technology Radar.

Federated governance is the hard one.

It means domain teams can make local decisions within guardrails. It means the central data team becomes a platform team—setting standards, providing tools, measuring compliance—but not approving every schema change. It means trusting teams to do the right thing while maintaining visibility into whether they actually are.

Most organizations aren't ready for that. They say they want decentralization, but they want central oversight of every decision. You can't have both.

## Certifying Streams as Data Products

A stream isn't a data product just because you declared it one. That's cargo cult thinking.

A data product has consumers who depend on it. It has contracts—schemas, semantic guarantees, freshness SLOs. It has an owner who answers the phone when something breaks.

In practice, this meant establishing data quality SLOs directly in Databricks. Not just "the pipeline ran," but "99.5% of records arrived within 5 minutes, matched their schema, and passed validation rules." When SLOs degraded, alerts fired to the owning team, not to some central triage queue.

Certification became a function of observed behavior, not declared intent. A stream earned "production" status after demonstrating stability. It could lose that status if quality degraded. The designation meant something because it had consequences.

This sounds obvious, but I watched multiple organizations skip directly to "everything is a data product" without the underlying accountability. Labels without behavior change nothing.

## The Win That Actually Mattered

The technical architecture mattered. Near real-time pipelines, properly bounded contexts, observable data quality—all important.

But the outcome that made stakeholders actually care was alignment.

Those six people in the conference room? They stopped arguing about whose data was right because we established which system was authoritative for which questions. The customer service team owned operational customer state. The analytics team owned aggregated customer behavior. The finance team owned reconciled transactional records. Different questions, different owners, different freshness guarantees.

We focused MVPs on value per effort, not technical elegance. The first wins were boring: standardizing customer ID formats across three systems, establishing a single source of truth for product catalog, deprecating shadow queries that duplicated official pipelines.

Every technical decision got connected to a strategic program. Not "we're adopting Kafka" but "we're enabling real-time fraud detection for the payments team." Technology as means, business outcome as end.

And the central data team's role changed from gatekeeper to platform provider. Domain teams owned their data. Central team owned the infrastructure those teams used. Clear boundaries, clear accountability.

## What I'd Tell My Past Self

If I could go back to the start of these engagements, I'd offer three lessons:

1. **Pick the boring problem first.** Ownership and contracts matter more than streaming architecture or lakehouse optimization. Get the organizational model right; the technology will follow.

2. **Technology selection is a trailing indicator.** The companies that struggled had picked Kafka and Databricks hoping the tools would force good behavior. The companies that succeeded had clarified what behavior they wanted, then selected tools that supported it.

3. **Platform thinking beats project thinking.** Projects end. Platforms evolve. Build the data infrastructure as a product with its own roadmap, its own users, its own success metrics.

Those six stakeholders eventually aligned. Not because we picked the right technology—they already had good technology. Because we helped them answer the question that technology can't solve: who owns this, and why does it matter?

---

*The client details in this post are composites, drawn from patterns across multiple engagements. The lessons are real.*
