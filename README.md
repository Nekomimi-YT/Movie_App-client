### LisFlix Movie App 

![LisFlix Movie App](/img/LisFlix.jpg)

## Objective
This project uses React, Redux and React-Bootstap to build the client-side UI for a movie information application. This application run on a previously built server-side REST API and NoSQL database.

## User Goals
Users should be able to:
* Create a profile, login, update their profile or delete their profile
* Access information on movies, directors, and genres
* Filter movies by title
* Add or delete movies from their favorites list

## Key Features and Views

# Main view
* Returns a list of ALL movies to the user (each listed item with an image and brief information)
* Displays text input that filters movies by title
* Offers functionality to select a movie for more details

# Single movie view
* Returns data (image, description, genre, director and more) about a single movie to the user
* Allows users to add a movie to their list of favorites

# Login and Registration views
* Allows users to log in with a username and password
* Allows new users to register (username, password, email, birthday)

# Genre view
* Returns data about a genre, with a name and description
* Displays example movies

# Director view
* Returns data about a director (name, bio, birth year, death year)
* Displays example movies

# Profile view
* Allows users to view and update their user info (password, email, date of birth)
* Allows existing users to delete their profile

# Favorites view
* Displays favorite movies
* Allows users to remove a movie from their list of favorites

# Navbar View
* Updates to greet the user by username when user is logged in
* Provides dropdown navigation to profile, favorites views and the option to log out

## Technical Details
* React ^17.0
* React-Bootstrap ^2.5.0
* Redux ^4.0.0
* Parcel ^2.0.0

## Image credits:
* All movie images provided through the TMDB (The Movie Database API). 
* "This product uses the TMDB API but is not endorsed or certified by TMDB."

![LisFlix Movie App](/img/TheMovieDB.jpg)