# URL Shortener Project

## Overview

The URL Shortener project is designed to efficiently convert long URLs into short and manageable links. This project utilizes the Node.js framework with Express.js for the server-side development, while MongoDB Atlas serves as the database. On the client side, React.js is employed to create a user-friendly interface for generating and managing shortened URLs.

## Technologies Used

- **Server-Side Development:**
  - Node.js with Express.js framework: Provides a robust and scalable backend environment for handling HTTP requests and responses.
  - MongoDB Atlas: Cloud-based database service used to store and manage the original and shortened URLs efficiently.

- **Client-Side Development:**
  - React.js: JavaScript library utilized to create an interactive and responsive user interface for users to input and manage URLs.

## Getting Started

To set up and run the URL Shortener project locally, follow these steps:

1. **Clone the Repository:**
   ```shell
   git clone <UrlShotner>
2. **Install Dependencies:**
    ```shell
    cd urlShortener
    npm install
    cd urlshorterclientside
    npm install
3. **Configure MongoDB Atlas:**

    - Create a MongoDB Atlas cluster and obtain the connection URI.
   
   - Update the server configuration  with the MongoDB connection URI (file : dbconnection.js line:2).
3. **Run the Application:**
   - In the root directory, start the server:
      ```shell
      npm start
  - In the client directory, start the React development server:
      ```shell
      npm start
4. **Access the Application:**
   - Open a web browser and navigate to http://localhost:3000 to access the URL Shortener application.
  
 ## Usage
 1. **Shorten a URL:**
    - Enter a long URL in the input field and click the "Shorten" button.
    - The application will generate a shortened URL, which can be copied and shared.
 2. **Access Original URL:**
    - When a user accesses a shortened URL, they will be redirected to the original long URL.
 
     

