
# News Aggregator

## Introduction

The News Aggregator is a user interface for a website that collects and displays articles from various sources. The application presents the news in a clean, easy-to-read format, providing users with the latest updates from multiple outlets.

## Setup

### Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (v14 or later)
- **Docker** (v20 or later)

### Installation

Follow these steps to set up and run the application:

1. **Clone the Repository:**

   Start by cloning the repository to your local machine:

   ```bash
   git clone git@github.com:danyal36/News-Aggregator.git
   cd News-Aggregator
   ```

2. **Build the Docker Image:**

   Build the Docker image for the application using the following command:

   ```bash
   docker build -t my-news-aggregator .
   ```

3. **Run the Docker Container:**

   After building the image, run the Docker container:

   ```bash
   docker run -p 3000:3000 my-news-aggregator
   ```

   This command will map port `3000` on your local machine to the container's port `3000`.

4. **Access the Application:**

   Open your web browser and navigate to the following URL to view the application:

   ```
   http://localhost:3000
   ```

5. **Stopping the Container:**

   To stop the running container, you can either press `Ctrl+C` in the terminal or use the following commands:

   ```bash
   docker ps  # To list running containers and get the container ID
   docker stop <container-id>
   ```

## Additional Information

For troubleshooting and further details on the project, please refer to the documentation or the project’s wiki.
