from prometheus_client import Counter, Histogram, generate_latest, CONTENT_TYPE_LATEST
from fastapi import FastAPI, Response, Request
import time

# Track total requests with method, endpoint, and HTTP status
REQUEST_COUNT = Counter(
    "app_requests_total",
    "Total HTTP requests",
    ["method", "endpoint", "http_status"]
)

# Track latency per request
REQUEST_LATENCY = Histogram(
    "app_request_latency_seconds",
    "Request latency (seconds)",
    ["endpoint"]
)


def setup_metrics(app: FastAPI):
    @app.middleware("http")
    async def metrics_middleware(request: Request, call_next):
        start_time = time.time()
        response = await call_next(request)
        process_time = time.time() - start_time

        # Update counters and latency histogram
        REQUEST_COUNT.labels(
            request.method, request.url.path, response.status_code
        ).inc()
        REQUEST_LATENCY.labels(request.url.path).observe(process_time)

        return response

    @app.get("/metrics")
    async def metrics():
        """Expose metrics to Prometheus."""
        return Response(generate_latest(), media_type=CONTENT_TYPE_LATEST)
