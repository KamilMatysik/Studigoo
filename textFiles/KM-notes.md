# Kamil Matysik Notes

## Planning

Since we decided to split this project 3 way among us (excluding a bit of help and additions here and there) I chose to do the backend. I have brief experience with NodeJS but I am unsure if that is what I want to use for this project. Other than that I know I need to use Google Cloud and Firebase for the backend, everything else I need to make a decision on myself. I will now start to do some research to see what is best.

At this moment I think that I will use TypeScript and NodeJS but I may change my mind in the future upon learning more. I know plenty of JavaScript and have started learning TypeScript so using it here will help me develop my knowledge and NodeJS is the perfect blend to use with it.

I am using [this W3Schools article](https://www.w3schools.com/nodejs/nodejs_typescript.asp) to help me set up TS and NodeJS.

Plan starting from now:
1. Set up Firebase and allow users to sign in
2. Ensure full authentication (Probably email and password sign in)
3. Allow each user to store details linked to their account in a database (Need to figure out where I will get this database, maybe from the University?)
4. Using NodeJS allow to read and alter this data correctly and properly
5. Work on linking it all together and iron out big issues

## Beginning Work

#### 10/10
I am adding FireBase authentication to my project on Google Cloud and will follow the steps there to set it up. I have also noticed "FireStore" in the products section so I may look into that in relation to the database.

It asks if I want to use FireBase hosting so I may also set that up in the future depending on options, but not for now.

I have set up all the auth backend code after following the guide, but have not yet done any real functionality. I had a few errors because of using TypeScript but StackOverflow had the help I needed.

When I was setting up the API, I saw that there was a choice between a modular API and namespaced API but I chose the latter as it featured syntax with which I was more familiar.

As it as bugging me, I sorted out the directory structure so everything will be much cleaner.

The last thing that I will do today will be making a simple form for logging in that sends data back to go into creating accounts/logging in.

#### 11/10
The HTML form is made and now I need to work on the logic on sending it to the auth script to use. I will leave verifying the password (to make sure it meets requirements) for later.

I know that I need to use a POST method as GET is not good for sensitive information (such as passwords).

This means that I now need to set up NodeJS to handle this. I install Express.js as [this](https://www.geeksforgeeks.org/node-js/how-http-post-request-work-in-node-js/) article suggests.

After ~2 hours with breaks, progress has been made however there are still bugs and it is not fully working. One problem I faced was that I was using the Live Server extension on VSCode that works over port 5500 but that seems not to work with Express so I am going to use Express to run it on port 3000.

Getting the users' inputs into the script works now, next I need to see if the Firebase functions work or if any extra work is needed. At the moment the program is barebones so there is no password checking or anything similar at the moment, but that will be added after the basics work as they should.