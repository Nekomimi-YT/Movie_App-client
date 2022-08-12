### Movie-App-client

Creating frontend UI for myFlix Movie App with React, React-Bootstrap 
Building using Parcel 

Root files: 
* index.html 
* index.jsx
* index.scss (for global styling)

Component/view files: 
* main-view.jsx (MainView) : Main view set-up that imports other view components and contains the movies array (model) and logic for switching between views
* movie-card.jsx (MovieCard) : individual movies rendered in the MainView 
* movie-view.jsx (MovieView) : further details that are displayed when a MovieCard is clicked in the MainView
* login-view.jsx (LoginView) : A form that is rendered for users to log in or choose to register
* registration-view.jsx (Registrationview) : A form that is rendered for new users to register with the myFlix Movie App
* navbar-view.jsx (NavbarView): The welcome navbar that the client-user sees before logging in
* navbar-user-view.jsx (NavbarUserView): The navbar a logged-in user sees with dropdown to access option to edit profile, edit (delete) favorite movies and logout