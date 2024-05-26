A Pastebin is a web application designed for storing and sharing plain text. Users can paste their text, set an expiration time, and receive a unique URL to share with others. This allows for easy and temporary sharing of information, facilitating collaboration and communication.

This repository contains the frontend part of the Pastebin project. To view the backend part, please click [here](https://github.com/saba1111111/Pastebian-backend).

To run this Angular project, you need to have Node.js and npm installed. You can download and install Node.js from the Node.js official website. npm is distributed with Node.js, and you can verify its installation by running npm -v in your terminal. Additionally, you need to install the Angular CLI globally by running npm install -g @angular/cli.

After setting up the prerequisites, clone the repository using git clone https://github.com/your-username/pastebin-frontend.git and navigate into the project directory with cd pastebin-frontend. Install the project dependencies by running npm install.

To start the development server and run the application locally, execute the command ng serve. By default, the application will be accessible at http://localhost:4200/.

## Project Structure

```
src/
   /app
      /pages
          |--share-content/      # Implementing a user-friendly interface and functionality for sharing content.
          |--view-content/       # Implementing dynamic view content page.
          |--content-not-found/  # Implementing default content not found page for good user experience.

      /shared   #  Contains shared components, services, and helper functions used by multiple modules.

```
