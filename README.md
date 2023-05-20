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
    

1. After installation, open **MySQL Installer** and you will see this kind of menu (without already installed programs)

[[https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7523966b-bc33-416b-acbf-8d886d5c49ab/Untitled.png|alt=mysql-menu]

1. Click Add and choose **MySQL Server** and **MySQL Workbench** to install. Press arrow to the right and install those programs. We will need them for running MySQL server and for working with databases. 

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/903e581d-3d14-4a48-a038-4fc8d1ba5ccf/Untitled.png)

1. For further information about installation, please read this guide → [https://phoenixnap.com/kb/install-mysql-on-windows](https://phoenixnap.com/kb/install-mysql-on-windows)
2. Run **MySQL server.** You can do it through console like in the guide above, or you can open your task manager and find MySQL80 in services and click START.

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
<p>
<img src="https://s3-us-west-2.amazonaws.com/secure.notion-static.com/bd33865a-1bba-4904-a68b-899f5c3d3a12/Untitled.png" alt="caption 1")>
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

### Installation

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
