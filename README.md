# IconoGraph
## Information Visualization Final Project - DHDK University of Bologna

## Abstract

The IconoGraph project comprises a Jupyter Notebook, named `IconoGraph_EDA.ipynb`, where I conduct an exploratory data analysis (EDA) in different phases. The analysis focuses on an RDF dataset sourced from two distinct repositories.

## Datasets

#### Iconology Dataset
The first RDF dataset is an integral part of a Digital Humanities PhD project at the University of Bologna, spearheaded by Sofia Baroncini. It contains structured content, including interpretations by renowned art historian Erwin Panofsky and other esteemed art historians. This dataset is published under the CC-BY-SA 4.0 license and is accessible at [Iconology Dataset](https://w3id.org/icon/data/).

#### Zeri Photo Archive Collection
The second dataset, known as the Zeri Photo Archive RDF, represents a significant subset of data available at the Zeri Catalog website and discoverable through the Europeana Portal. The Federico Zeri Foundation established this collection to honor Federico Zeri's legacy, encompassing an Art Library with 46,000 volumes, 37,000 auction catalogs, and 60 periodicals. Additionally, the collection includes a Photo Archive containing 290,000 photographs of monuments and artworks. Although the SPARQL endpoint is currently under maintenance at [Zeri Photo Archive Collection](http://data.fondazionezeri.unibo.it/sparql), the data used can be sourced from [AMS Acta](https://amsacta.unibo.it/id/eprint/5497/).

## Exploratory Analysis
In the final phase of the exploratory analysis, cleaned JSON data is saved. This prepared dataset serves as the foundation for the second part of the project - a web application developed using Next.js. The web app includes various visualizations and aims to provide insights into the realm of art history. By merging these two datasets, a larger graph is created, potentially revealing a multitude of new information.

## Project Status and Attribution
I, Stefano Renzetti, have undertaken all parts of this project. It is currently in a draft form, representing an idea or framework. The ultimate objective is to further enhance and complete the project in the future. The project is licensed under CC BY-NC 4.0.

[![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/sterenz/IconoGraph/main?labpath=IconoGraph_EDA.ipynb)