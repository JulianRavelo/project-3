# Electric Vehicle Use in New South Wales
## Table of Contents
- [Project Overview](#project-overview)
- [Code Contributors](#code-contributors)
- [File Layout](#file-layout)
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
## - File Layout
All links in this section take you directly to the file in the repository.

- [EV_Chargers.pdf](EV_Chargers.pdf)
    - The file is the project proposal, that outlines the scope and purpose of the project. It is a brief summary of our interests and intent for the project.
- [app.py](app.py)
    - The python file contains the code used to create Python Flask-powered API for each of the csv files and geojson file. 
- [index.html](index.html)
    - The file contains HTML documentation to display the visualisations created in other files. 

### [Coding](Coding)
- [Data_Engineering.ipynb](Coding/Data_Engineering.ipynb)
    - The file contains code that converts the data from csv files into Pandas DataFrames. The data has been cleaned to display relevant columns and Null values have been changed to zero values. The data has then been converted to a SQL database and reflected in Data_Engineering.db file. 
- [Coding / static / css / style.css](Coding/static/css/style.css)
    - The file contains coding for the styling of the visualisation created using JavaScript.
- [Coding / static / js / logic1.js](Coding/static/js/logic1.js)
    - The file contains JavaScript coding for an interactive map displaying markers for Electric Vehicle Chargers and details about the charger. 
### [Resources](Resources)
- [Data_Engineering.db](Resources/Data_Engineering.db)
    - The file contains the cleaned data from the below csv files.
- [EV_marker.jpg](Resources/EV_marker.jpg)
    - The file contains the image used for the map marker in the interactive map visualisation.
- [chargers_by_postcode_prototype.csv](Resources/chargers_by_postcode_prototype.csv)
    - The dataset contains number of Electric Vehicle (EV) registrations by postcode for a specified year. The data documents the total number of vehicles registered in that year, regardless of whether they are new registrations or a re-registration. The years documented in the dataset are between 2017 and 2021. There are 4,751 rows and 832 columns of data.
- [ev_evc_prototype.csv](Resources/ev_evc_prototype.csv)
    - The dataset contains the number and location of current Electric Vehicle (EV) charging stations. The dataset contains information such as name, location details, charger type, plug type, charging network, power (kW), and hardware brand. There are no dates documented in the dataset. There are 505 rows and 12 columns of data.
- [NEMFUELMIX_ALL_202311022059.csv](Resources/NEMFUELMIX_ALL_202311022059.csv)
    - The dataset is a breakdown of energy sources in the Australian National Electricity Market (NEM), containing energy source distribution of all Australian States (not including WA, NT, and ACT) between 29th October 2022 to the 21st October 2023. There are 1,524 rows and 5 columns of data.
- [final_nsw.geojson](Resources/final_nsw.geojson)
    - description of the file
- [group_table_df.csv](Resources/group_table_df.csv)
    - description of the file

## Sources
### Electric Vehicle Council

https://electricvehiclecouncil.com.au/wp-content/uploads/2023/07/State-of-EVs_July-2023_.pdf 

### NSW Government (NSW Climate and Energy Action)

https://www.energy.nsw.gov.au/sites/default/files/2022-09/nsw-electric-vehicle-strategy-210225.pdf

### Australian Government NationalMap 

https://nationalmap.gov.au/
                                   
https://ev-infrastructure-mapping.s3-ap-southeast-2.amazonaws.com/ev_evc_prototype.csv

https://ev-infrastructure-mapping.s3-ap-southeast-2.amazonaws.com/chargers_by_postcode_prototype.csv

### Australian Energy Market Operator

https://aemo.com.au/energy-systems/electricity/national-electricity-market-nem/data-nem/data-dashboard-nem

### GeoJSON information

https://github.com/tonywr71/GeoJson-Data/blob/master/suburb-2-nsw.geojson

### Websites used

https://stackoverflow.com/questions/22521982/check-if-point-is-inside-a-polygon  
