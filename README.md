<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]


-->
<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/ViktorTap/dev-academy-2023-pre">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Helsinki City Bike App | PRE-ASSIGNMENT </h3>

  <p align="center">
    This is the pre-assignment for <a href="https://github.com/solita/dev-academy-2023-exercise">Solita</a> Dev Academy Finland 2023.
    <br />
    <a href="https://github.com/ViktorTap/dev-academy-2023-pre"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <!-- 
    <a href="https://github.com/github_username/repo_name">View Demo</a>
    ·
    <a href="https://github.com/github_username/repo_name/issues">Report Bug</a>
    ·
    <a href="https://github.com/github_username/repo_name/issues">Request Feature</a>
    -->
  </p>
</div>



TABLE OF CONTENTS 
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

ABOUT THE PROJECT 
## About The Project

<!-- [![Product Name Screen Shot][product-screenshot]](https://example.com) -->

This is the pre-assignment for <a href="https://github.com/solita/dev-academy-2023-exercise"> Solita Dev Academy Finland 2023 </a>. Fullstack web application with own backend and frontend. 

In this application, you can find every bike ride made through Helsinki City App from May 2021 to July 2021. You can look, find or order by column given journeys or stations.

<p align="right"><a href="#readme-top">back to top</a></p>


### Built With

#### [REACT][React-url]
#### [MYSQL][Mysql-url]
#### [NODEJS][Nodejs-url]

<p align="right"><a href="#readme-top">back to top</a></p>


## Getting Started

In this section I will provide necessary information to install this application locally that you can test, destroy and build again. 😉

### Prerequisites
# Setting up database

In this project I use MySQL database. In this tutorial, I will guide you through every step in working with MySQL database. We are going to cover:

1. Installing MySQL server on your machine.
2. Creating and setting up database.
3. Adding and validating data without data loss (hopefully).

I use Windows machine and if you are not, please look for additional information through official websites how to install and deal with possible problems on your OS. So without further do, let’s begin from phase 1.

## 1. Install MySQL

1. We are going to use “**MySQL Installer**” through we can install all necessary programs. Go visit
    
    [https://dev.mysql.com/downloads/installer/](https://dev.mysql.com/downloads/installer/) and install **MySQL Installer** on your machine.
    

2. After installation, open **MySQL Installer** and you will see this kind of menu (without already installed programs)

<p align="center" width="100%">
<img src="https://github.com/ViktorTap/dev-academy-2023-pre/blob/main/images/001-my-sql.png" alt="my-sql menu")>
  </p>

3. Click Add and choose **MySQL Server** and **MySQL Workbench** to install. Press arrow to the right and install those programs. We will need them for running MySQL server and for working with databases. 

<p align="center" width="100%">
<img src="https://github.com/ViktorTap/dev-academy-2023-pre/blob/main/images/002-my-sql.png" alt="my-sql menu")>
  </p>

4. For further information about installation, please read this guide → [https://phoenixnap.com/kb/install-mysql-on-windows](https://phoenixnap.com/kb/install-mysql-on-windows)
5. Run **MySQL server.** You can do it through console like in the guide above, or you can open your task manager and find MySQL80 in services and click START.

## 2. Creating and setting up database.

1. Open **MySQL Workbench** and set up your first connection. Use this guide → [https://www.delftstack.com/howto/mysql/create-new-database-in-mysql-workbench/](https://www.delftstack.com/howto/mysql/create-new-database-in-mysql-workbench/)

---

**BUT before creating any database**, we need to see what kind of data we are going to use in this project. Download files below:

**The data is owned by City Bike Finland.**

- [https://dev.hsl.fi/citybikes/od-trips-2021/2021-05.csv](https://dev.hsl.fi/citybikes/od-trips-2021/2021-05.csv)
- [https://dev.hsl.fi/citybikes/od-trips-2021/2021-06.csv](https://dev.hsl.fi/citybikes/od-trips-2021/2021-06.csv)
- [https://dev.hsl.fi/citybikes/od-trips-2021/2021-07.csv](https://dev.hsl.fi/citybikes/od-trips-2021/2021-07.csv)

Also, there is a dataset that has information about Helsinki Region Transport’s (HSL) city bicycle stations.

- Dataset: [https://opendata.arcgis.com/datasets/726277c507ef4914b0aec3cbcfcbfafc_0.csv](https://opendata.arcgis.com/datasets/726277c507ef4914b0aec3cbcfcbfafc_0.csv)
- License and information: [https://www.avoindata.fi/data/en/dataset/hsl-n-kaupunkipyoraasemat/resource/a23eef3a-cc40-4608-8aa2-c730d17e8902](https://www.avoindata.fi/data/en/dataset/hsl-n-kaupunkipyoraasemat/resource/a23eef3a-cc40-4608-8aa2-c730d17e8902)

---

1. Open CSV file in Excel and look for first line. You will see this:
<p align="center" width="100%">
<img src="https://github.com/ViktorTap/dev-academy-2023-pre/blob/main/images/003-my-sql.png" alt="my-sql menu")>
  </p>
So we have: 

Departure, Return, 

Departure Station ID, 

Departure Station Name, 

Return Station ID, 

Return Station Name, 

Covered Distance (m) and Duration (sec.) 

This information we need to properly establish our database for this project.

### 2.1 Creating database and importing CSV files.

Establish your first database using MYSQL Workbench, which we installed already. Use this link for help → [https://blog.devart.com/creating-a-new-database-in-mysql-tutorial-with-examples.html](https://blog.devart.com/creating-a-new-database-in-mysql-tutorial-with-examples.html)

I called my database jouney_db. In workbench’s main window, I write the following query:
```sh

use journey_db;

CREATE TABLE may
(
Departure VARCHAR(255),
Arrival VARCHAR(255),
DepartureStationID INT,
DepartureStationName VARCHAR(255),

ArrivalStationID INT,
ArrivalStationName VARCHAR(255),

CoveredDistance INT,
Duration INT);

```
As you can see, we only created may table. Please do the same for June and July.

Then we need a table, which will contain addition information about stations.

```sh

CREATE TABLE station_information(
FID INT PRIMARY KEY,
ID INT,

Nimi VARCHAR(255),
Namn VARCHAR(255),
StationName VARCHAR(255),

Osoite VARCHAR(255),
Adress VARCHAR(255),

Kaupunki VARCHAR(255),
Stad VARCHAR(255),

Operaattor VARCHAR(255),
Kapasiteet VARCHAR(255),

x VARCHAR(255),
y VARCHAR(255)
);

```
Now we are ready to load data from CSV file into our database. We will use MYSQL own method called LOAD DATA INFILE.
We are going to pass NULL values also.

After you created all necessary tables, do the following:
**Copy or move CSV files into your MySQL Uploads folder. Example path you can see in the query below | your folder structure may be different.**
```sh
LOAD DATA INFILE 'C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/may.csv' INTO TABLE station_information
FIELDS TERMINATED BY ','
OPTIONALLY ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 LINES
(Departure, Arrival, DepartureStationID, DepartureStationName, ArrivalStationID, ArrivalStationName, @CoveredDistance, @Duration )
SET CoveredDistance, Duration = IF(@CoveredDistancer = ",,", NULL, @CoveredDistance), Duration = IF(@Duration = "", NULL, @Duration); 

// FOR STATION INFORMATION CSV:

LOAD DATA INFILE 'C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/station-information.csv' INTO TABLE station_information
FIELDS TERMINATED BY ','
OPTIONALLY ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 LINES
(FID, ID, Nimi, Namn, StationName, Osoite, Adress, Kaupunki, Stad, @Operaattor, Kapasiteet, x, y)
SET Operaattor = IF(@Operattor = ",,", NULL, @Operattor);

```
I hope everything works fine at your end. :) 

Now it’s the time to move into REACT and set up code itself.

### Installation REACT Front- and Back-end

1. Get a free API Key at [https://example.com](https://example.com)
2. Clone the repo
   ```sh
   git clone https://github.com/github_username/repo_name.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `config.js`
   ```js
   const API_KEY = 'ENTER YOUR API';
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES 
## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>
-->

<!-- LICENSE 
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

-->

## Contact

Viktor Tap - [GitHub Profile](https://github.com/ViktorTap)

Project Link: [GitHub REP.](https://github.com/ViktorTap/dev-academy-2023-pre)

<p align="right"><a href="#readme-top">back to top</a></p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[React-url]: https://reactjs.org/
[MySQL-url]: https://www.mysql.com/
[Nodejs-url]: https://nodejs.org/en
