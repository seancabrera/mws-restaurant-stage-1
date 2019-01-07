# Restaurant Reviews
---

## Project Overview

For the **Restaurant Reviews** project, the goal was to convert a static webpage to a mobile-ready web application. In **Stage One**, the requirements were to take a static design that lacks accessibility and convert the design to be responsive on different sized displays and accessible for screen reader use. Also a service worker was added to begin the process of creating a seamless offline experience.

Udacity provided starter code for a restaurant reviews website. The code has a lot of issues. It’s barely usable on a desktop browser, much less a mobile device. It also doesn’t include any standard accessibility features, and it doesn’t work offline at all. My job was to update the code to resolve these issues while still maintaining the included functionality.

## Instuctions

To run this project locally, first clone or download the project:

`git clone https://github.com/seancabrera/mws-restaurant-stage-1.git`

Then, in a terminal, navigate to the downloaded repositry and use Python to start an HTTP server.
For Python 2, use: 
`python -m SimpleHTTPServer 8000`

For Python3, use: 
`python3 -m http.server 8000`

If running Python3 on Windows, use: 
`python -m http.server 8000`

### Leaflet.js and Mapbox:

This repository uses [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/). You need to replace `<your MAPBOX API KEY HERE>` with a token from [Mapbox](https://www.mapbox.com/). Mapbox is free to use, and does not require any payment information.
