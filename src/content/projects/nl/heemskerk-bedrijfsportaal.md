---
key: food-business-portal
start: 2024-05-01
period: 'mei 2024 – jul 2025'
client: 'Heemskerk Fresh & Easy'
title: 'Een intern bedrijfsportaal opnieuw opbouwen'
summary: 'De volgende versie van een intern bedrijfsportaal, ter vervanging van een bestaande Flask-applicatie: FastAPI, React en een volledige CI/CD-straat.'
stats:
  - { value: '15 mnd', label: 'opdracht' }
  - { value: 'FastAPI', label: 'nieuwe backend, vervangt Flask' }
  - { value: 'K8s', label: 'deploys met Helm' }
tags: ['Python', 'FastAPI', 'SQLAlchemy', 'React', 'Tailwind CSS', 'Kubernetes']
tone: neutral
---

## De opdracht

Het interne bedrijfsportaal bevat meerdere modules die de interne communicatie en werkprocessen binnen de organisatie verbeteren. De bestaande Flask-applicatie wordt vervangen door een nieuwe versie.

## Wat ik doe

- Een databasestructuur, ORM-modellen en migraties ontwerpen (SQLAlchemy, Alembic).
- API-endpoints schrijven met FastAPI, inclusief validatiemodellen, op basis van de specs van de bestaande applicatie.
- Een consistente, componentgebaseerde front-end ontwerpen met herbruikbare componenten (React, Tailwind CSS).
- Professionele werkwijzen introduceren: code reviews, unit tests en integratietests (Pytest, Cypress).
- Een CI-pipeline bouwen voor statische code-analyse, tests en Docker-images (GitHub Actions).
- Deploys optimaliseren met pre-built images en Helm als templating engine (Skaffold, Kubernetes).
- De architectuur verbeteren voor onderhoudbaarheid, testbaarheid en schaalbaarheid, onder andere met betere caching (Redis).
- Een Docker Compose-stack toevoegen om de ontwikkelomgeving lokaal te draaien.
