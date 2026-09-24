**The vision**  
When I started this project I wanted to make a web extension that logged in to the different streaming service platforms. Then took the subscribed/followed channels that were live on the different platforms. Displayed theses different channels and provided a link to them.

**The result**  
This is a web extension that makes a pop up when clicked. Gives a list of the channels you follow on "Twitch.tv" and makes each channel a button that links to it. Each button is a card with channel name, viewer count, title, platform icon and a preview. Provides a dark and light mode that can be switched with a button. Takes the profile picture of the twitch profile that is logged in and replaces the "log in" button so the user knows if they are logged in or not. There is a search function as well that runs a filter thro the channel names.     
<img width="373" height="494" alt="image" src="https://github.com/user-attachments/assets/84ddba65-4c0d-4a2d-9eb5-dade6fab7799" />

**What I learned**  
So I definitely met a few walls on the way, even though I am pretty happy with what I ended up creating. Because it is a product I am using day to day and I learned a lot thro creating it.

- Darkmode 
was one of the things I wanted to get a hand in. I would definitely say I achieved it. But my first approaches was apparently a old syntax for tailwind and had been updated. That of course took time to figure out but I figure it out. One thing I am not the biggest fan of is the way I did my buttons I would like to at some point make a switch button instead of the one button that changes color and icon solution.
- Fonts
was probably the biggest eye opener in this project. While I always have seen design to be important, I have never really until this realised how important fonts was. Going from default to a real font made a huge improvement of the design. Do note that I think I could improve the design even more in this project it was not the goal of the project. But it opened my eyes so I now know I should aim to improve my designs and especially my font uses.
- Youtube
was definitely the biggest hit in the gut thro this project. I found out after implementing the Twitch API handler, that even though I had sat up the project with multiple platforms in mind. It was not going to happen. So the 2 platforms my aim was for in this project was Youtube and Twitch. So when preparing for the project I found documentation and calls I could use too achieve my vision. So to my surprise when I looked at Youtube documentation it looked fine, until I started out planning how I would code my solution. So apparently you can get a list of the subscribed channels by the user, can check if they are live. But you have to send a new API call to Youtube for each and every single channel to check if they are live. This meant while it is possible to make it the API call limit would be reached very fast if more users used it. 
- Publishing
was probably the thing I was most excited for. But was quite a let down then I found out that to make my extension public, on the Microsoft extension shop I would have to give my real address and real phone number. While it prbably would have been fine to give Microsoft it, they need it so they can show it on every single developer. So this would mean any users going to the shop and seeing my extension, would give them my real address and real phone number. This is obviously a issue because if any ill willed people can have access to such information so easy. It is a risk I am not willing to take.
