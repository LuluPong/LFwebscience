
Lab 3
_______________
**Individual Lab**
------------------

*I have chosen **SHODAN API** for my API*

While a lot of the APIs I looked at had a npm installs available, i preferred to use http to get the API data just out of simplicity.

For this lab, we created a web application that utilises are own endpoints to connect to third-party endpoints and retrieve data on the users behalf. When I started this lab, creating the endpoints was fairly simple. Connecting to the endpoints via node took a little research but nothing too complicated. I ended up using a deprecated version of node-fetch because the latest version of node-fetch is not supported by the normal npm(I am currently using version npm 2.6.6). 

The hardest part was connecting to my api endpoint via ajax. Before this lab, I almost never used AJAX. It took some looking but I was able to find a resource online that provided the basic steps. Once I was able to send the JSON to my web app, I was able to manipulate the data to my liking. One of my struggles was figuring out which data should be displayed. At first, I displayed vulnerability data along with all my data; however, the vulnerability data only works for rpi websites. My guess is that the API only shows vulnerability data for your internal network only for security reasons.

For design, I kept it fairly simple to make it professional.
