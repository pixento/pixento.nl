---
key: hetweer-nu
start: 2026-09-01
period: 'sep 2026 – heden'
client: 'Pixento (eigen product)'
title: 'hetweer.nu: metingen en verwachting in één grafiek'
summary: 'Een weersite die voor elke plaats in Nederland een 15-daagse verwachting combineert met de meest recente metingen van het dichtstbijzijnde KNMI-station.'
stats:
  - { value: '15 dagen', label: 'vooruit voorspeld' }
  - { value: '50', label: 'ensembleleden per verwachting' }
  - { value: 'KNMI', label: 'metingen in dezelfde grafiek' }
tags: ['Python', 'FastAPI', 'TypeScript', 'React', 'GCP Cloud Run']
tone: orange
---

## Het idee

De meeste weer-apps tonen één verwachting, alsof die zeker is. [hetweer.nu](https://hetweer.nu) laat de onzekerheid juist zien, en zet daarnaast wat er echt gemeten is.

## Wat ik bouw

- **Een weerpluim per plaats.** De verwachtingslijn is de mediaan van 50 ECMWF-ensembleleden. Een band toont waar 80% van de leden ligt, zodat je ziet hoe zeker de verwachting is.
- **Metingen naast de verwachting.** De meest recente metingen van het dichtstbijzijnde KNMI-station staan in dezelfde grafiek, en de eerdere verwachting blijft zichtbaar. Zo zie je meteen hoe goed die klopt.
- **Een pagina voor elke plaats.** Kies je locatie, bewaar favorieten of blader per provincie, met plaatsnamen uit PDOK.

De backend draait op FastAPI, de front-end is gebouwd met React, en alles is gehost op Google Cloud Run. De data komt van KNMI Open Data en ECMWF Open Data.
