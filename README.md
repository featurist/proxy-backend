# proxy-backend

A diagnostic web server, that returns details about the request, useful in debugging forward proxies.

E.g.

    curl 'localhost:4000/one?sldkf=asdf' -H 'Host: absdlfksd' -H 'X-Blah: alsdkf'

    {
      "host": "surf.local",
      "url": "/one?sldkf=asdf",
      "method": "GET",
      "headers": {
        "user-agent": "curl/7.37.1",
        "accept": "*/*",
        "host": "absdlfksd",
        "x-blah": "alsdkf"
      }
    }

Available as a docker image: [refractalize/proxy-backend](https://registry.hub.docker.com/u/refractalize/proxy-backend/)
