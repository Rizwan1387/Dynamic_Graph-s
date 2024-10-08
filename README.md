# Chart Dashboard Project

This project consists of two parts:

- **ChartAPI**: A Django API backend that provides data for the dashboard.
- **Chart Dashboard**: A Next.js frontend application that displays various charts (Candlestick, Line, Bar, and Pie) using data from the Django backend.

## Table of Contents
1. [Overview](#overview)
2. [Prerequisites](#prerequisites)
3. [Installation](#installation)
4. [Running the Development Servers](#running-the-development-servers)
5. [Libraries Used](#libraries-used)
6. [Additional Notes](#additional-notes)

## Overview

### ChartAPI (Django Backend)
The ChartAPI is a Django-based backend service that provides data for various charts used in the Chart Dashboard. It serves data in the form of API endpoints for different chart types.

### Chart Dashboard (Next.js Frontend)
The Chart Dashboard is a Next.js application that displays a dashboard with various charts, including Candlestick, Line, Bar, and Pie charts. The frontend fetches data from the Django backend to populate these charts.

## Prerequisites

### Backend (Django)
- Python (version 3.8 or later)
- Pip (Python package manager)

### Frontend (Next.js)
- Node.js (version 14 or later)

## Installation

1. **Clone the Repository**
    ```bash
    git clone https://github.com/Rizwan1387/Dynamic_Graph-s.git
    cd your-repository
    ```

2. **Install Backend Dependencies**
    Navigate to the Django backend directory:
    ```bash
    cd chartapi
    ```
    Install the required Python packages:
    ```bash
    pip install -r requirements.txt
    ```

3. **Install Frontend Dependencies**
    Navigate to the Next.js frontend directory:
    ```bash
    cd ../chart-dashboard
    ```
    Install the required Node.js packages:
    ```bash
    npm install
    ```

## Running the Development Servers

1. **Start the Django Backend**
    Navigate to the Django backend directory:
    ```bash
    cd chartapi
    ```
    Run the development server:
    ```bash
    python manage.py runserver
    ```
    The Django server will start at [http://127.0.0.1:8000/](http://127.0.0.1:8000/).

2. **Start the Next.js Frontend**
    Navigate to the Next.js frontend directory:
    ```bash
    cd ../chart-dashboard
    ```
    Run the development server:
    ```bash
    npm run dev
    ```
    The Next.js application will start at [http://localhost:3000/](http://localhost:3000/).

## Libraries Used

### Backend (Django)
- **Django**: The web framework used for building the API.
- **Django REST Framework**: For creating and managing API endpoints and serializers.

### Frontend (Next.js)
- **Chart.js with react-chartjs-2**: For creating Bar and Line charts.
- **Lightweight Charts**: For creating Candlestick charts.
- **Chart.js with react-chartjs-2**: For creating Pie charts.

## Additional Notes
- Ensure both servers (Django backend and Next.js frontend) are running simultaneously for the full functionality of the application.
- You can modify the API endpoints or the chart configurations based on your specific requirements.

