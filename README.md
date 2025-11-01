![Frontend](https://img.shields.io/badge/Frontend-Next.js-000?logo=next.js)
![Python](https://img.shields.io/badge/Language-Python-3776AB?logo=python)
![FastAPI](https://img.shields.io/badge/Backend-FastAPI-009688?logo=fastapi)
![SQLAlchemy](https://img.shields.io/badge/ORM-SQLAlchemy-000?logo=sqlalchemy)
![PostgreSQL](https://img.shields.io/badge/Database-PostgreSQL-336791?logo=postgresql)
![Prometheus](https://img.shields.io/badge/Monitoring-Prometheus-E6522C?logo=prometheus)
![Grafana](https://img.shields.io/badge/Visualization-Grafana-F46800?logo=grafana)
![Pytest](https://img.shields.io/badge/Testing-Pytest-0A9EDC?logo=pytest)
![Mocha](https://img.shields.io/badge/Testing-Mocha-8D6748?logo=mocha)
![Selenium](https://img.shields.io/badge/Testing-Selenium-43B02A?logo=selenium)
![Jenkins](https://img.shields.io/badge/CI/CD-Jenkins-D24939?logo=jenkins)
![Pandas](https://img.shields.io/badge/Analytics-Pandas-150458?logo=pandas)

# ⚙️📊 Software Quality Engineering & Observability Platform

A multi-service application using Docker Compose, orchestrating frontend (Next.js), backend (FastAPI + SQLAlchemy), and PostgreSQL. 

This project is heavily focused on software quality engineering, incorporating robust testing strategies, CI/CD pipelines, and observability tools like Prometheus and Grafana to monitor application performance and reliability.

---

## 📋 Table of Contents

- [💻 Technologies Used](#technologies-used)
- [🚀 Getting Started & Prerequisites](#getting-started-&-prerequisites)
- [🧪 Testing](#testing)
- [🤝 Contributing](#contributing)
- [📜 License](#license)

---

## 💻 Technologies Used
- **Frontend:** Next.js(App Router), Tailwind CSS, ShadCN UI
- **Backend:** Python, SQLAlchemy, PostgreSQL, FastAPI
- **Infra & Monitoring:** Prometheus, Grafana
- **Unit & Integration Testing:** Pytest, Mocha
- **E2E Testing:** Selenium
- **CI/CD:** Jenkins
- **Analytics:** Pandas (Python)

## 🚀 Getting Started & Prerequisites

To get started with this project, you will need to have [Node.js](https://nodejs.org) and [Docker Desktop](https://docker.com) installed on your machine. Once you have that installed, follow these steps:

1. Clone the repository to your local machine:
```
git clone https://github.com/mahdiuahmed/Software-Quality-Engineering-Observability-Platform.git
```
2. To start up the frontend, backend and DB In the project root:
```
docker compose up --build frontend
```
3. To run ...:
```
docker compose up --build frontend
```

## 🧪 Testing

The testing suite we are using for end-to-end testing is [Cypress](https://www.cypress.io/#create)

1. Run cypress and select e2e testing to view the specs to run:
```
npm run cypress:open
```

## 🤝 Contributing

Contributions are welcome! To contribute to this project, follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b new-feature`)
3. Make your changes
4. Commit your changes (`git commit -am 'Added some feature'`)
5. Push to the branch (`git push origin new-feature`)
6. Create a new Pull Request


## 📄 License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
