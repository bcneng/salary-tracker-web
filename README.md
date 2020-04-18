# Salary Tracker

## Introduction

[TBD]

## Scope

[TBD]

## Site Structure

  - **/home** : *(Home Page)*
  - **/salaries** (Root Page for Salaries)*
    - **/new-salary** (New Salary Form)*
    - **/:salary-id** (Detail Page for a specific salary entry)*
  - **/about** (About Page)*

## Folder Structure

 - **App.tsx** : *(main entry file)*
 - **App.tsx** : *(root component where routing and navigation is defined)*
 - **public/** : *(where all the static assets are)*
 - **Components/** : *(General UI components, potentyally shared)*
 - **Pages/** : *(representation of every available page route)*
 - **theme/**
    - **main.scss** : *(general styling of the website)*
    - **variables.scss** : *(where theming variables are specified)*

## Getting started


### Install dependencies:

```
  npm install
```

### Run the app locally:

```
  npm run start
```

### To create a production build:

```
  npm run build
```

> Production code to be deploy will be in the `public` root folder.

### Run unit tests:

```
 npm run test
```


### Serve production code with a static server:

```
  npm install -g serve
  serve -s build
```

## Tech Stack

* [Ionic](https://ionicframework.com/docs)
* [React](https://reactjs.org/docs/getting-started.html)

## Continuous Integration

[TBD]

## Continuous Delivery

[TBD]

