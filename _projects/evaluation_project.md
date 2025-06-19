---
layout: page
title: Design of Evaluation Frameworks
img: assets/img/puppy.jpg
importance: 1
category: privacy
related_publications: true
---
What does it mean to protect privacy in large-scale data processing systems?

This is the most basic question we need to answer when designing systems that, we claim, are mindful of individuals’ privacy.
A good privacy definition ideally should capture what privacy means to us but at the same time be precise enough so that it can be implemented and validated against.

On a very high level, the goal of my research is to find such a criterion, that strikes the right balance between interpretability and technical precision, is generalisable across data-processing systems but simultaneously adaptable to context-specific privacy concerns.
On a very high level, the goal of my research is to find such a criterion, that strikes the right balance between interpretability and technical precision, is generalisable across data-processing systems but simultaneously adaptable to context-specific privacy concerns.
To achieve this goal we develop novel frameworks to reason about privacy in large-scale data processing systems and aim to improve existing approaches to evaluate privacy risk.

As an example, we developed a new [framework](https://github.com/spring-epfl/synthetic_data_release) to quantitatively assess claims about the privacy benefits of synthetic data publishing.
Using our framework, we demonstrated that many of the claims made about the "absolute privacy" ([NHS England](https://data.england.nhs.uk/dataset/a-e-synthetic-data)) synthetic data provides do not hold true.

This is one example that shows how important it is to carefully evaluate the privacy properties of data processing systems.


**Impact**

Our paper on evaluating synthetic data as a privacy mechanism {% cite StadlerOT22 %} has already had a significant impact. Upon request, I have presented it to practitioners (Financial Conduct Authority, UK), data protection bodies (EDPS, EU level; CNIL, FR),
and academics in diverse disciplines, (e.g, Harvard Privacy Tools Group, Microsoft Research Cambridge, the Alan Turing Institute, or the "Health Sciences and Technology" program at MIT).
Furthermore, the framework implmentation is in use by multiple industrial partners.
and is cited as a reference evaluation framework in high-profile guidelines such an European Commission [JRC Technical Report](https://publications.jrc.ec.europa.eu/repository/handle/JRC128595) or
the European Data Protection Supervision [TechSonar Report 2021/22](https://edps.europa.eu/system/files/2021-12/techsonar_2021-2022_report_en.pdf).