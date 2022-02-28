
Lab 1
__________________
**Individual Lab**
__________________

For this lab, I had to create a news ticker using html, css, and js. I did not start this lab on time because originally, I was confuused about the rules and didn't quite know how I was going to implement the 5 second interval for the news article. After working on the Hexed project, I had a much better understanding of how I was going to implement the timer interval. I decided to use JSON instead of XML to aggregate the data since it is much easier to extract specific data and is what will be used for the majority of this class and most API calls etc. The first thing I did was gather over 200 news articles from a free news API (Current Events API). Since the API only returns 30 news articles per page/API call, I had to make 6 different API calls to get more news articles from more pages. Once that was done, I just appended the new JSON to the JSON file I was using for the actual page. I decided to do sports news since that's what I have an interest in and it still fits professor Callahan's requirement of using news articles.

When designing the page, my first goal was to make sure that 5 JSON items would output to the page. I was able to do this mostly with ease. I had to stop using the jQuery append command and use the vanilla JS innerHTML command instead because the jQuery command just wouldn't output most of the data in an orderly fashion. After this, I worked on a simple timer that would change data every 5 seconds. This took a little effort and coordination because I had to make sure the timer would change the content on the page without resetting everything. I also had to make sure the news articles would cycle infinitely. I did this by making sure my JS for loop would never reach its conditional limit as to how long it should run. Once I did this, the ticker was able to work as expected. For the CSS, I decided to keep things simple since I had some issues formatting the content into cards that would all be on the same row. I just included a simple background and a navbar. I used bootstrap cards for the news articles because I wanted to make glassmorphism cards; however, because this project was already late, I did not want to spend too much time because I would not be able to get full points regardless of the creative designs used.

__________________________
__________________________
