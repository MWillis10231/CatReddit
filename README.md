## Brief

"For this project, you will build an application for Reddit using everything you’ve learned, including React and Redux. Reddit is a website where people share links to articles, media and other things on the web. The Reddit API provides data which you will integrate into your application. The application will allow users to view and search posts and comments provided by the API."

## Concept & Implementation

I decided to focus mainly on cats and r/cats - mostly because I didn't have any other original ideas and I didn't want to make a more generic Reddit client. I also wanted to make something with a theme that I had to design around. I'm not the best UI designer of all time so this helped me create something cohesive design-wise.

My initial mock-up focused on having one kind of sidebar on the left - however, while actually using and developing it turned out that this wasn't really usable. I moved this to the right, and hard-coded some stuff that I couldn't find from the Unofficial Api (Rules etc.) that was specific to the r/cats subreddit.

It eventually ended up perhaps a little childish, but I think in general design-wise it looks pretty good.

## General Thoughts

I felt pretty comfortable with React before this project, but I still learnt a lot of things about stucturing my components and overall app by doing this project. If I did it again, I'd probably use a completely different naming structure, folder structure and probably approach building the whole thing differently, but this is something I learnt simply through trial and error that's hard to pick up any other way. Fixing a React Router error with a React Fragment was really satisfying too - this really helped explain why people use them in a practical way. Another highlight was getting the comments to display in a way that's very similar to the original Reddit design.

Redux... This is where I struggled. I found keeping my state in React to be fine, but initially I really struggled with Redux. I ended up running through the tutorials again a few times on the Redux website and really breaking them down stage by stage. By the end it paid off - I got the hang of Redux state and the ability to not have to pass certain bits of state through a million React components is really helpful. There's a time and a place it seems, and this helped illustrate some of the whens and when-nots. I'm still not super happy with the Thunks, but this is something I'm looking forward to practicing in the future. 

Javascript / CSS - I learnt some new tricks here, including CSS animations, and I'm feeling pretty comfortable with Javascript in general. Happy to solidify my skills and add a few new ones too. 

## Features

List of features:
* Posts obtained from r/cats
* Working reddit filters
* Media content visible with posts
* Scores / time posted / other meta-data visible
* Posts with their comments viewable in a separate window
* Colour changing design options
* Error pages
* Desktop / Tablet / Mobile views

## Features I'd like to implement
(easy)

* Stickied posts tagged
* Admin posts tagged
* Author replies highlighted in a special way
* Persistent colour-scheme on revisits (remembers preferences)

(more tricky)

* Back-button/refresh button functionality (This breaks the app at the moment)
* A working searchbar (tips here very welcome, mine at the moment filters only)
* Some more interactivity (if possible using the unofficial API)

## Known Bugs

* Refreshing or pressing back breaks the app
* Search Bar does not work as intended
* If using a very small mobile view, deeply nested comments can overflow off the sides
* Zero score comments (and probably posts) do not load the upvote/downvotes properly

### Credits

Thanks to unsplash & Tuna for this image:

https://unsplash.com/photos/IXnZZLi6xkA
Photo by [Tuna](https://unsplash.com/@tunascats?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/)

And pixabay for these:
Photo by [ArousalandPublicDomain](https://pixabay.com/users/arousalandpublicdomain-7400657/) on [Unsplash](https://unsplash.com/)
https://pixabay.com/illustrations/cat-kitten-ball-cute-pet-wool-4475583/


https://pixabay.com/photos/cat-pet-licking-animal-tabby-cat-323262/
Photo by [TeamK](https://pixabay.com/users/teamk-222368/) on [pixabay](https://pixabay.com/)

