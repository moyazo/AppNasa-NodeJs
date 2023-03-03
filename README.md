# AppNasa-NodeJs

<h3 align="left">Languages and Tools:</h3>
<p align="left"> <a href="https://getbootstrap.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="40" height="40"/> </a> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://expressjs.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40"/> </a> <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40"/> </a> <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a> </p>


# Instalation:

  - First of all you will have to clone this repository in your cmd:

  ```bash
    cd existing_folder
    git clone [LINK DEL REPOSITORIO]
    ```
  - After this you will have to insttal the depencencies of de package.json
          - NPM
              ```bash
                   npm install
                ```
          - YARN
              ```bash
                   yarn
                ```
 # Deployment:
  - If you want to use docker for the DB connection, you will have to use de docker-compose.yml
    After your  .yml configuraton just use this command:
          ```bash
              docker-compose up
          ```
  - If you want to use Atlas from mongoDB, you will have to checkout the env.example and use your own enviroment variables and create a .env file.
  -After this you will have to start your app:
          - NODEMON
              ```bash
                   Nodemon start
                ```
          - YARN
              ```bash
                   yarn start
               ```


   # API USAGE:

    -We will be using <a href="https://api.nasa.gov/">NASA API</a>. This api give us many links to use. In our case we will be using the 
    <a href="https://api.nasa.gov/planetary/apod?start_date=2023-01-01&api_key=DEMO_KEY">apods api</a>
        - https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY, this the general link, but if you add the date from you want to get data you have to use these ones:
                - https://api.nasa.gov/planetary/apod?start_date=2023-01-01&api_key=DEMO_KEY
                - https://api.nasa.gov/planetary/apod?start_date=2022-01-01&api_key=DEMO_KEY
          It depends on the "start_date" you want recieve data
     - This api will bring us data in JSON format and we will insert it on or mongoDB

  # APP SECTIONS:

    - Dashboar view, all data from api.
    - Details view, view of each data.
    - User view, with favorites.
    - ...
