
Lab 6
________________________________________________

**Received extension from Prof. Callahan**

I honestly did not know what to do for this lab. Even though I went to office hours, I was still confused by what exactly I had to do. That is why I have not turned anything in besides the readme. I'll try my best but I don't really know what to do.

I misunderstood the instructions.

I figured it out.

I did not realize we had to create a schema for the 4 specific apis. I thought we had to make one general schema that would work with any API. Once I figured this out, I had to change which 3 APIs I used. The original 3 I had in mind did not work well with the schema I wanted to create. Finding a free API with an adequate amount of free API calls was very difficult. I had to reduce the number of things I could have in my schema. There was a lot of variance in what the APIs returned. Even ones that were similar would return two very different results for the same query. Searching for google.com will return the DNS IP for Google on Shodan; but on Pulse, the IP returned was completely different. I had to take this into account since Shodan is the primary API I am using.

Once I reduced the schema and found 3 APIs to use, I had issues correctly depicting the data in my schema. In some of the APIs, the registrar key in the JSON object is the ISP; but in others, the ISP was clearly stated as ISP. I had a similar problem for the other keys. It was frustrating.

Once ^^ALL OF THAT^^ was finished, I edited my server.js to accomodate the new changes. At first, I wanted to create a new API for my lab 6 collection; however, I thought it would be easier and save space in my code to just use the *db/number* endpoint for get, put, and delete. The post endpoint was edited in th main */db* endpoint. It works but its weird. I used regular document id numbers from the submitted form and converted them to negative numbers. I passed this to node. Node would then use the absolute value of the negative number specifically for the lab 6 collection. I used several if statements to check if a document was supposed to go to/be accessed from one of the collections. It somehow works.

**Extra**: *My biggest peeve was adding all the documents to the Mongo collection. While I could create an extra endpoint to handle this, just ran out of time.*