# tvshowstracker

Test project to learn the Facebook stack (React, Flux, Relay, Hack...).

The project should help you browse the tv shows and track those you follow. It's a very simple and very bad clone of [betaseries](http://betaseries.com).

_**Friendly disclaimer:** this is a test project I use to learn. Code may be broken, disorganized or simply not following the best patterns!_

## Prerequisites

* nginx
* npm
* bower
* hhvm

By default, the following ports must be free:
* `9000` is used for hhvm
* `9001` is used for the backend server
* `9002` is used for the frontend

## Install

* Clone the project `git clone git@github.com:vdurmont/tvshowstracker.git`
* Setup nginx

```
server {
  listen       9001;
  server_name  localhost;

  location / {
    root <PROJECT_HOME>/back/;
    fastcgi_pass   127.0.0.1:9000;
    fastcgi_index  index.php;
    fastcgi_param  SCRIPT_FILENAME $document_root$fastcgi_script_name;
    include        fastcgi_params;
  }
}

server {
  listen       9002;
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
* Run hhvm on port 9000 `hhvm --mode server -vServer.Type=fastcgi -vServer.Port=9000`
* Go to [http://localhost:9002](http://localhost:9002)
