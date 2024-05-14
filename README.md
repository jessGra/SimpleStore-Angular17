# SimpleStore

This is a solution to a technical test that emulates a store's product management with real Amazon data from [Rapid Api](https://rapidapi.com/letscrape-6bRBa3QguO5/api/real-time-amazon-data) and temporary CRUD operations.

Features:

* Get a products list from the api
* Simulated Auth State
* Simulated CRUD operations 
    >I use data services with the approach of Observables and Signals to keep the CRUD operations changes in the execution memory
* Dark and Light Theme
* Create product
* Edit product
* Delete product
* Responsive
* Form Validations

This solution demonstrates knowledge in:

- Angular Framework since (v12) to most recent version (v17)
- Observables and RxJS
- Signals
- Angular Material UI
- Frontend tools and languages (TS, JS, HTML, SCSS, Design)
- Local Storage to keep client data in the browser

## Running on local

If is the first time that you cloned the repo you need to install the dependencies. Run `npm i`.

Run `ng serve` to run the app and navigate to `http://localhost:4200/`.

>if you click the login button tha app emulates an authentication state and stores it in localStorage to "keep" the session and allows the management operations

### Notes
___
* This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.1.

* The quota limit of the Amazon data api is 100 request / month so if the limit is reached you can generate new api keys [here](https://rapidapi.com/letscrape-6bRBa3QguO5/api/real-time-amazon-data) and replace it on the `environment` files.

* The app can work without the amazon data too.

### Possible Features (Because the time was up 🥴)
* Add Placeholders to show when is fetching the data.
* Add more fields to the edit and create forms.
* Tests.
* Displaying snack-bar notifications.
