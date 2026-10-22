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

When the user submits their sign in info, it correctly goes to Firebase and is stored there. I have not yet tested duplicate emails or any other possible bugs so I will work on that in the future.

#### 13/10

I want to do a few things but probably won't have the time to do all of it today. I want to try things like duplicates and also deleting data, but most importantly learn how to use this data. I will want in the future a database where each user has details stored so I need this to be implemented but for now I want to learn how.

I found this [FireBase Article](https://firebase.google.com/docs/auth/flutter/errors) where it explains some of the error messages so I will use this to make my program return an error message, for now just in the script but in the future it will be sent back to be shown to the user on the website.

I have a list of if statements for all the errors because that is the only method I can think of and I want to send the error to the HTML so I will add script logic that shows the error message to the user.

#### 14/10

Today I really struggled with sending the data back to the frontend mainly because of my file structure so I decided to revamp that and I had to handle a few errors with Typescript that came from that revamping. I created a new auth.ts file concerned with only front end and now I need to send the error data from not renamed "server.ts" to the new auth file that can then be served to the user.

Today I barely did anything because I faced errors at every step so the last thing I did was learn that since my server files are written in CommonJS it did the same for my front end files but it turns out browsers don't support CommonJS so I will need to figure out how to change my server.ts and tsconfig.json files to suit the format I need.

#### 15/10

I need to now convert my project from CommonJS to ESM which I learned is the new standard that will be very useful for the future.

[This article](https://tsmx.net/convert-existing-nodejs-project-from-commonjs-to-esm/) made converting very simple and now it seems to all be working. The next thing that needs to be done is sneding the error string from the server script to the client-side auth script.

I had a small issue with Typescript and HTML compatability but adding a small thing into tsconfig.json [found here](https://bobbyhadz.com/blog/typescript-cannot-find-name-window-document) fixed it right away. I now just need to send the data as a response to the original POST request and then it should hopefully work.

#### 19/10

The page reloading has become a problem so I found [this](https://www.tutorialspoint.com/article/how-to-stop-refreshing-the-page-on-submit-in-javascript) to solve it.

This step has been really difficult and much more complicated than I thought. I have finally been able to send the data correctly but now the problem is properly reading it from the client-side script to show it to the user.

Still stuck with this problem, I decided to submit the data not directly from the HTML form but using FormData in the client script. This still results in an error but now the two files are correctly communicating so hopefully I can soon sort out this part of the program.

#### 20/10

After back and forth understanding how to find the values of a promise I was finally able to receiver the error code into the client file and then able to display it to the user.

Another error popped up becuase JSON.stringify(formData) was returning empty so I need to convert the formData to object to JSON which [this](https://www.xjavascript.com/blog/how-to-send-a-json-object-using-html-form-data/) can help me with.

After 6 days of struggling with the same issue, I have finally solved it and now the error returns to the user, I will quickly add some extra logic explaining to user things like why their password is invalid but that will take 10 minutes max. After that I want to learn how the page knows a user is logged in and displays results unique to that user so that in the future I can use it to allow a user to view their flashcards or things like that.