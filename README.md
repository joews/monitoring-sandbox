# monitoring-sandbox

Sandbox environment with:

- Prometheus
- node_exporter
- Grafana
- Node services with PM2 (emulating a non-container setup)
- MongoDB

## Usage

Install Docker.

```
docker-compose build
docker-compose up
```

Open:

- Prometheus on http://localhost:9090/
- Grafana on http://localhost:3000/ (creds admin/admin)
