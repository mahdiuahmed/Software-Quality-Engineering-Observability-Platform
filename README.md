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
- [🧪 Testing & Analytics](#testing-&-analytics)
- [📊 Monitoring the System](#monitoring-the-system)
- [🔄 Stopping the System](#stopping-the-system)
- [🧩 Running Jenkins CI/CD](#running-jenkins-ci/cd)
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

---

## 🚀 Getting Started & Prerequisites

To get started with this project, you will need to have [Node.js](https://nodejs.org) and [Docker Desktop](https://docker.com) installed on your machine. Once you have that installed, follow these steps:

1. Clone the repository to your local machine:
```
git clone https://github.com/mahdiuahmed/Software-Quality-Engineering-Observability-Platform.git
```
2. To start up the frontend, backend and DB In the project root:
```
docker compose up --build
```
3. Build and start all services:
```
docker compose up --build frontend
```
This will build and start the following services:
| Service        | Description                     | Port                                                      |
| -------------- | ------------------------------- | --------------------------------------------------------- |
| **frontend**   | Next.js app (Tailwind + ShadCN) | [http://localhost:3000](http://localhost:3000)            |
| **backend**    | FastAPI REST API                | [http://localhost:8000/docs](http://localhost:8000/docs)  |
| **db**         | PostgreSQL database             | localhost:5432                                            |
| **jenkins**    | CI/CD automation server         | [http://localhost:8080](http://localhost:8080)            |
| **grafana**    | Dashboard & visualization       | [http://localhost:3001](http://localhost:3001)            |
| **prometheus** | Metrics collector               | [http://localhost:9090](http://localhost:9090)            |
| **selenium**   | E2E testing environment         | [http://localhost:7900](http://localhost:7900) (noVNC UI) |

4. For Non-ARM Users (Windows/Linux/Intel Macs)
By default, Selenium uses the ARM-compatible image seleniarm/standalone-chromium:latest.
If your machine is not ARM64 (e.g., Intel), edit the Selenium service in docker-compose.yml:
```
selenium:
  image: selenium/standalone-chromium:latest
  shm_size: 2gb
  ports:
    - "4444:4444"
    - "7900:7900"
```
Then rebuild:
```
docker compose build selenium
```
---

## 🧪 Testing & Analytics

✅ Backend Tests (Pytest):
```
docker compose run --rm backend-tests
```

✅ Backend Tests (Pytest)
```

docker compose run --rm backend-tests
```
✅ Frontend Tests (Mocha)
```

docker exec -it frontend npm test:unit
```

✅ End-to-End Tests (Selenium)
```
docker compose run --rm e2e-tests
```
You can also visually inspect the test runs via the Selenium noVNC dashboard:
👉 http://localhost:7900

✅ Get analytics (Pandas)
```
docker compose run --rm analytics
```

---

## 📊 Monitoring the System

Prometheus and Grafana are preconfigured for observability.

1. Go to Grafana → http://localhost:3001

2. Add Prometheus as a data source (http://prometheus:9090)

3. Import dashboards or create your own to monitor:
  - API latency
  - Error rates
  - Container health
  - Test success/failure trends

---

## 🔄 Stopping the System
To gracefully shut everything down:
```
docker compose down
```

To remove all cached data (including PostgreSQL data):
```
docker compose down -v
```
---

## 🧩 Running Jenkins CI/CD

---

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
