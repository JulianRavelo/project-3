# Import the required libraries\n",
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, text, inspect, MetaData
from flask import Flask, jsonify

# Flask setup
app = Flask(__name__)

# Database Setup
engine = create_engine("sqlite:///Coding/Data_Engineering.db")
metadata = MetaData()
metadata.reflect(engine)
inspector = inspect(engine)
#print(inspector.get_table_names())
# reflect an existing database into a new model
Base = automap_base()

# reflect the tables
Base.prepare(autoload_with=engine)

for cls in Base.classes:
    print(cls.__name__)

#print(Base.classes.keys())

# #Define classes for each database
# EVs = Base.classes.registration
# EV_Chargers = Base.classes.ev_charger
# Fuel_Source = Base.classes.fuel_type

# # Create an API route for EVs
# @app.route("/api/v1.0/evs")
# def get_EVs():
#     session = Session(engine)
#     results = session.query(EVs).all()
#     session.close()

#     EVs_data = []
#     for result in results:
#         EVs_data.append(result)
#     return jsonify(EVs_data)

# # Create an API route for EV Chargers
# @app.route("/api/v1.0/ev_chargers")
# def get_EVs():
#     session = Session(engine)
#     results = session.query(EV_Chargers).all()
#     session.close()

#     EV_Charger_data = []
#     for result in results:
#         EV_Charger_data.append(result)
#     return jsonify(EV_Charger_data)

# # # Create an API route for Fuel Sources
# @app.route("/api/v1.0/Fuel_Sources")
# def get_fuel_sources():
#     session = Session(engine)
#     results = session.query(Fuel_Source).all()
#     session.close()

#     fuel_sources_data = []
#     for result in results:
#         fuel_sources_data.append(result)
#     return jsonify(fuel_sources_data)

# # Create an API route for the Suburbs GeoJSON
# @app.route("/api/v1.0/NSW_Geo")
# def get_geojson_data():
#     # Read GeoJSON data
#     with open("Resources/suburb-2-nsw.geojson", 'r') as geojson_file:
#         geojson_data = geojson_file.read()
#     return jsonify(geojson_data)
