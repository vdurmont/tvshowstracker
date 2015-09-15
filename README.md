# tvshowstracker

Test project to learn the Facebook stack (React, Flux, Relay, Hack...).

The project should help you browse the tv shows and track those you follow. It's a very simple and very bad clone of [betaseries](http://betaseries.com).

_**Friendly disclaimer:** this is a test project I use to learn. Code may be broken, disorganized or simply not following the best patterns!_

## Prerequisites

* nginx
* npm
* bower

## Install

* Clone the project `git clone git@github.com:vdurmont/tvshowstracker.git`
* Setup nginx

```
server {
  listen       9994;
  server_name  localhost;

  location / {
    include /usr/local/etc/nginx/mime.types;
    root   <PROJECT_HOME>/front/dist;
    index  index.html;
    try_files /$uri /index.html;
  }
}
```

* Install the frontend `cd <PROJECT_HOME>; npm install; bower install;`
* Build the frontend `cd <PROJECT_HOME>; grunt`
* Go to [http://localhost:9994](http://localhost:9994)
