# Electric Vehicle Use in New South Wales
## Table of Contents
- [Project Overview](#project-overview)
- [Code Contributors](#code-contributors)
- [File Layout](#file-layout)
- [SQL database section](#sql-database-section)
- [Flask API section](#flask-api-section)
- [Plotly JavaScript bar chart](#plotly-javascript-bar-chart)
- [Plotly JavaScript pie chart](#plotly-javascript-pie-chart)
- [MapBox visualisations](#mapbox-visualisations)
- [EV charger locations map markers](#ev-charger-locations-map-markers)
- [Suburb information breakdown](#suburb-information-breakdown)
- [Sources](#sources)

## Project Overview
The Electric Vehicle (EV) Use in New South Wales (NSW) project created a JavaScript dashboard that enables users to explore and interact with a collection of data through a combination of charts and map visualisations. NSW is the frontrunner in the electric vehicle movement within Australia, boasting the highest number of EV registrations in the country. NSW has been proactive in its approach to accelerating the adoption of EVs, partly due to the introduction of a $663 million Electric Vehicle Strategy in June 2021 and other incentives. 

The project's objective is to analyse the influence of electric vehicles (EVs) in NSW and whether the surge in EV adoption correlates with a change in primary fuel sources used within the state. Additionally, it seeks to provide insightful comparisons between NSW and other key Australian states, namely Queensland, Victoria, South Australia, and Tasmania. 

Utilising CSV datasets sourced from the Australian Government NationalMap website, data has been collated on EV registrations between 2017 and 2021, as well as the latest information on EV charger locations as of June 2023 within NSW. Additionally, data from the Australian Energy Market Operator website has been gathered to provide insights into the National Electricity Market (NEM), specifically focusing on the breakdown of fuel used by aforementioned states between October 2022 and October 2023. 

The dashboard showcases an array of visualisations, including a bar chart displaying total EV registrations per year, a pie chart comparing fuel use for aforementioned states, and an interactive map that pinpoints the locations of EVs chargers. The map will also highlight specific suburbs, displaying pop-up information with details on EV registrations and total number of available EV chargers.

## Code Contributors
Cayley Morrow

Chang Yu

Damian Kifuso

Julian Ravelo

## File layout
### [Resources](#resources)
- [chargers_by_postcode_prototype.csv](Resources/chargers_by_postcode_prototype.csv)
    - The dataset contains number of Electric Vehicle (EV) registrations by postcode for a specified year. The data documents the total number of vehicles registered in that year, regardless of whether they are new registrations or a re-registration. The years documented in the dataset are between 2017 and 2021. There are 4,751 rows and 832 columns of data.
- [ev_evc_prototype.csv](Resources/ev_evc_prototype.csv)
    - The dataset contains the number and location of current Electric Vehicle (EV) charging stations. The dataset contains information such as name, location details, charger type, plug type, charging network, power (kW), and hardware brand. There are no dates documented in the dataset. There are 505 rows and 12 columns of data.
- [NEMFUELMIX_ALL_202311022059.csv](Resources/NEMFUELMIX_ALL_202311022059.csv)
    - The dataset is a breakdown of energy sources in the Australian National Electricity Market (NEM), containing energy source distribution of all Australian States (not including WA, NT, and ACT) between 29th October 2022 to the 21st October 2023. There are 1,524 rows and 5 columns of data.

### [Coding]()
- [app.py](app.py)
    - This python file contains the code used to create Python Flask-powered API for each of the csv files. 
- [Data_Engineering.sql](Data_Engineering.sql)



## SQL database section

## Flask API section

## Plotly JavaScript bar chart

## Plotly JavaScript pie chart

## MapBox visualisations 

## EV charger locations map markers

## Suburb information breakdown

## Sources
### Australian Government NationalMap 

https://nationalmap.gov.au/
                                   
https://ev-infrastructure-mapping.s3-ap-southeast-2.amazonaws.com/ev_evc_prototype.csv

https://ev-infrastructure-mapping.s3-ap-southeast-2.amazonaws.com/chargers_by_postcode_prototype.csv

### Australian Energy Market Operator

https://aemo.com.au/energy-systems/electricity/national-electricity-market-nem/data-nem/data-dashboard-nem

### GeoJSON information
