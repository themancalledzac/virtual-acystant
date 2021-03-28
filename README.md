<h1 align="center">Virtual Acystant</h1>

<p align="center">
    <img src="https://img.shields.io/github/repo-size/themancalledzac/virtual-acystant" />
    <img src="https://img.shields.io/github/languages/top/themancalledzac/virtual-acystant"  />
    <img src="https://img.shields.io/github/issues/themancalledzac/virtual-acystant" />
    <img src="https://img.shields.io/github/last-commit/themancalledzac/virtual-acystant" >
    <img src="https://img.shields.io/travis/com/themancalledzac/Student-Management-System/main" >

</p>
  
<p align="center">
    <img src="https://img.shields.io/badge/Javascript-red" />
    <img src="https://img.shields.io/badge/React-orange"  />
    <img src="https://img.shields.io/badge/-Axios-yellow" />
    <img src="https://img.shields.io/badge/-Express-blue" >
    <img src="https://img.shields.io/badge/-Mongoose-teal" />
    <img src="https://img.shields.io/badge/-Passport-blue" />
    <img src="https://img.shields.io/badge/-Material UI-indigo" />
    <img src="https://img.shields.io/badge/-Tensorflow-violet" />
</p>

## Table of Contents

- [Description](#description)
- [User Story](#user-story)
- [Installation](#installation)
- [Usage](#usage)
- [Key Technologies Used](#key-technologies-used)
- [Contributing](#contributing)
- [Credits](#credits)

## Description

An application that uses machine learning to detect, based off a user uploaded image, what would be the most statistically likely skin cancer, along with a maps page to help locate a doctor.  All use cases are hypothetical and are not to be used in place of a doctor.

## User Story

```
AS A person with an odd mark on my skin
I WANT an app that, after uploading an image, will help me determine if my skin might be cancerous,
SO THAT I can be given a map app to the nearest hospital.
```

## Installation

No installation required

## Usage

* Live application: https://virtual-acystant.herokuapp.com/
* Repository: https://github.com/themancalledzac/virtual-acystant

To use the application, users must first sign up with an email and password, then sign in to the application.

### Home Page
![Home Page](https://user-images.githubusercontent.com/71162422/112768288-434cac80-8fd0-11eb-9faa-829b9be64a80.png)
    width:40%;

### Upload Image & Results Section
![Upload Image & Results](https://user-images.githubusercontent.com/71162422/112768302-55c6e600-8fd0-11eb-9889-28d02f1130b8.png)

### Find A Provider Page
![Find A Provider page](https://user-images.githubusercontent.com/71162422/112768311-61b2a800-8fd0-11eb-80a6-183d796f67f0.png)

## Key Technologies Used

Machine Learning
* [@tensorflow/tfjs](https://www.npmjs.com/package/@tensorflow/tfjs)

Authentication
* [body-parser](https://www.npmjs.com/package/body-parser)
* [bcrypt](https://www.npmjs.com/package/bcrypt)
* [fastest-validator](https://www.npmjs.com/package/fastest-validator)
* [jwt-decode](https://www.npmjs.com/package/jwt-decode)
* [Passport](http://www.passportjs.org/)
* [passwport-jwt](http://www.passportjs.org/packages/passport-jwt/)

Database
* [mongoose](https://mongoosejs.com/)
* [seedrandom](https://www.npmjs.com/package/seedrandom)

User Interface
* [Material UI](https://material-ui.com/)

Google Maps
* [Combobox](https://reach.tech/combobox/)
* [React Google Maps](https://www.npmjs.com/package/@react-google-maps/api)
* [use-places-autocomplete](https://www.npmjs.com/package/use-places-autocomplete)

Google Maps APIs
* [Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/overview)
* [Places API](https://developers.google.com/maps/documentation/places/web-service/overview)
* [Geocoding API](https://developers.google.com/maps/documentation/geocoding/overview)

Application
* [axios](https://www.npmjs.com/package/axios)
* [concurrently](https://www.npmjs.com/package/concurrently)
* [express](https://www.npmjs.com/package/express)
* [formidable](https://www.npmjs.com/package/formidable)
* [if-env](https://www.npmjs.com/package/if-env)

Development Dependencies
* [dotenv](https://www.npmjs.com/package/dotenv)
* [ESlint](https://eslint.org/)
* [nodemon](https://www.npmjs.com/package/nodemon)
* [react-native-dotenv](https://www.npmjs.com/package/react-native-dotenv)

## Contributing
* Kat Gomozova [https://github.com/kgo87](https://github.com/kgo87)
* Max Lechner [www..github.com/maxlechner](https://github.com/maxlechner)
* Zac Edens [www.github.com/themancalledzac](https://github.com/themancalledzac)
* Macz Norton [https://github.com/macz-norton](https://github.com/macz-norton)

## Credits
* [The HAM10000 dataset, a large collection of multi-source dermatoscopic images of common pigmented skin lesions, Harvard Dataverse](https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/DBW86T)
* [Snazzy Maps, No Levels Map](https://snazzymaps.com/style/287670/no-levels)
* [Google Maps & Google Places in React Tutorial, Leigh Halliday](https://www.youtube.com/watch?v=WZcxJGmLbSo)
* [Pause08 & Freepick, Freepick Icons from Flaticon](https://www.flaticon.com/)