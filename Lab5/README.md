
Lab 5
_____________________________________

**This was an individual lab**

------------------------------

For this lab, I started by partially preloading my MongoDB collection. Unfortunately, some of the JSON files I downloaded from my API
did not successfully import to MongoDB. I preloaded around 45 documents before I decided to start making the node endpoints for 
testing. Since get endpoints are the easiest, I started with the get endpoint for the main db endpoint. I originally planned to use the
preconfigured filter code that MongoDB provides if you perform a filter search within Compass. For some reason this code did not work.
I decided to use w3schools to get a basic template code of how to access and perform functions on my collection. This worked very well.
I was able to setup the get, post, put endpoints on the main db endpoint. I saved delete for last since that would require me to rebuild the collection after each test.

I had the most trouble trying to get angular to connect to my second level db endpoint. While the endpoint worked fine when testing with just node, I could not get Angular to change the api url in my http service file. After finding no useful solutions online, I got frustrated and tried to use a string literal to pass the specific endpoint request. Luckily, this worked. I was able to finish the get, put, and delete endpoints. I had little to no issues when testing them and they all ran successfully.

The last part was showing the results and messages on the frontend. This took some time since this was my first time using 
angular binding for innerhtml changes. I decided to display the returned results from the get requests in a textarea box. The
documents are automatically prettified for easier viewing. I was not sure if the prof. wanted us to display it in a certain manner
but I just assumed he wanted the document to be displayed as is. For the other endpoints, I just displayed either a success message or
an "error" message depending on the results returned from my API and what values are being sent to the API.

For design, I kept things the same as I did for labs 3 and 4. I originally wanted the textarea results box to show after an HTML verb request was sent; however, I had some trouble implementing that with the bindings. I successfully did it with *jQuery* but that caused other problems with my code so I shelved that plan.

Overall, I think this was a good lab. We finally got to work with all main HTML verbs for the endpoints. Getting to work with the second level endpoints was also a good experience. Working with Mongo was surprisingly easier than I thought.