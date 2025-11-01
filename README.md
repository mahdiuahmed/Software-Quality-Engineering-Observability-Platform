![Vercel Deploy](https://deploy-badge.vercel.app/vercel/uptime-monitor-weld)
![Made with Next.js](https://img.shields.io/badge/Made%20with-Next.js-000?logo=next.js)
![AWS](https://img.shields.io/badge/Cloud--Infrastructure-AWS-FF9900)
![Cypress](https://img.shields.io/badge/Testing-Cypress-69D3A7?logo=cypress&logoColor=white)

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
2. :
```
docker build -t notavox:latest .
docker run -p 3000:3000 notavox:latest
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
