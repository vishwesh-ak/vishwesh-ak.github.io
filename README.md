# LibraryLife

#### Projection Submission by Vishwesh Anantha Krishnan, IIIT Kottayam

## Inspiration
Due to the Coronavirus, many people find themselves stuck inside their house. Reading is an excellent solution to alleviate boredom. However, having multiple people accessing a single library is quite undesirable nowadays. This website removes that problem.

## What it does
This website introduces an online platform where customers can see the full list of available books. These can be booked in advance before he even steps out of the house! After selecting the books he wants, he can arrange the date when he takes the books and the date when he will submit the book. Then, the website will give him a time slot to arrive at, so that the customer can come and directly accept his books. Time slots can be arranged so that no customers have the same slot, increasing safety.
The same applies for returning the books. Using the website, the customer can schedule the books for return on his choice of date. If the values he entered are true, then the website will give him a time slot to come and return the books.

An important point is that users should be signed in to the LibraryLife website. Normal users will see and interact with only the available books, but the Admin can see the details of all books.

## How we built it
This Website was built mainly with HTML and Javascript, with a bare minimum of CSS.

IMPORTANT INFO : There are three accounts in this site, and they are -
1. **Username :** ADMIN
   **Password :** mypass

2. **Username :** user1
    **Password :** pass1

3. **Username :** user2
 **Password :** pass2

(all are case-sensitive)

## Challenges we ran into
At first, I worked with multiple HTML files for Signin window, Rent window, Return window, planning to unite them with frames. However, I realized that certain required variable values were lost when moving from file to file. There is also the time constraint : I would have liked to focus a bit more on the appearance of the website, but I was only able to apply a small amount of CSS. One big problem that has not been resolved is that if the screen is refreshed, all the data and the changes made are lost and the code goes back to the beginning state.

## Accomplishments that we're proud of
I am proud that I could surpass the first difficulty mentioned above, by implementing the main part as a single HTML file with tables instead of frames. I'm also happy that I was able to apply many of the concepts that I have learned on the topics of HTML and Javascript in this project.

## What we learned
From working on this project, I learned a lot of new features and properties of elements of HTML and Javascript. 

## What's next for LibraryLife
Extra features I would like to add - 
1. Option for creation of new accounts
2. Option for Admin to alter the list of books in the library.
3. Late submission if return date is later than finishing date
4. Make the site more visually appealing by utilizing more of CSS.
5. Improve the dates concept.
6. Store the time slots so that no two users get same slot.
7. Other small changes to improve the functionality of this website.
