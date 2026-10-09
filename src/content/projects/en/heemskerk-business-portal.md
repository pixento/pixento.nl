---
key: food-business-portal
start: 2024-05-01
period: 'May 2024 – Jul 2025'
client: 'Heemskerk Fresh & Easy'
title: 'Rebuilding an internal business portal'
summary: 'The next version of an internal business portal, replacing an existing Flask application: FastAPI, React and a complete CI/CD pipeline.'
stats:
  - { value: '15 mo', label: 'engagement' }
  - { value: 'FastAPI', label: 'new backend, replacing Flask' }
  - { value: 'K8s', label: 'deploys with Helm' }
tags: ['Python', 'FastAPI', 'SQLAlchemy', 'React', 'Tailwind CSS', 'Kubernetes']
tone: neutral
---

## The assignment

The internal business portal has several modules that improve internal communication and work processes across the organisation. The existing Flask application is being replaced by a new version.

## What I do

- Design the database structure, ORM models and migrations (SQLAlchemy, Alembic).
- Write API endpoints with FastAPI, including validation models, based on the specs of the existing application.
- Design a consistent, component-based front-end with reusable components (React, Tailwind CSS).
- Introduce professional ways of working: code reviews, unit tests and integration tests (Pytest, Cypress).
- Build a CI pipeline for static code analysis, tests and Docker images (GitHub Actions).
- Optimise deploys with pre-built images and Helm as templating engine (Skaffold, Kubernetes).
- Improve the architecture for maintainability, testability and scalability, among other things through better caching (Redis).
- Add a Docker Compose stack to run the development environment locally.
