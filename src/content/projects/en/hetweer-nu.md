---
key: hetweer-nu
start: 2026-09-01
period: 'Sep 2026 – present'
client: 'Pixento (own product)'
title: 'hetweer.nu: measurements and forecast in one graph'
summary: 'A weather site that combines a 15-day forecast for every place in the Netherlands with the latest measurements from the nearest KNMI weather station.'
stats:
  - { value: '15 days', label: 'forecast ahead' }
  - { value: '50', label: 'ensemble members per forecast' }
  - { value: 'KNMI', label: 'measurements in the same graph' }
tags: ['Python', 'FastAPI', 'TypeScript', 'React', 'GCP Cloud Run']
tone: orange
---

## The idea

Most weather apps show a single forecast, as if it were certain. [hetweer.nu](https://hetweer.nu) shows the uncertainty instead, next to what was actually measured.

## What I build

- **A forecast plume per place.** The forecast line is the median of 50 ECMWF ensemble members. A band shows where 80% of the members fall, so you can see how certain the forecast is.
- **Measurements next to the forecast.** The latest measurements from the nearest KNMI station sit in the same graph, and the earlier forecast stays visible. You can see right away how well it holds up.
- **A page for every place.** Use your location, save favourites or browse by province, with place names from PDOK.

The backend runs on FastAPI, the front-end is built with React, and everything is hosted on Google Cloud Run. The data comes from KNMI Open Data and ECMWF Open Data.
