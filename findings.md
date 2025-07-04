# Findings: Initial Debugging Report

## Environment Setup
- Python 3.13 installed
- Poetry installed and configured successfully
- All dependencies installed via `poetry install`

## Issue Observed During Execution
- Tried running: `poetry run python src/signi_rest_test_runner/runner.py`
- Error: `httpx.ConnectError: [Errno 11001] getaddrinfo failed`
- Cause: The test runner is trying to access a REST API, but no server is currently running.

## Conclusion
- The test runner works as expected.
- It needs a working REST API and a test scenario YAML file to proceed further.

## ⏭Next Step
- I will create a sample REST API (`GET /status`) and configure the test runner to call it.
