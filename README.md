# NetflixGPT

NetflixGPT is an AI-powered application that uses GPT to provide smart movie and series recommendations, summaries, or search results—just like your personal AI assistant for Netflix-style content.


## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



# Netflix-GPT

    -Created a react application using vite
    -Configured TailwindCSS
    -Header
    -Routing
    -Login Form
    -Signup Form
    -Form Validation
    -useRef Hook
    -Firebase setup
    -Deploying our app to production
    -Create a signup user account in firebase
    -Implement sign in user api
    -Created Redux store with userSlice
    -Implement Sign Out
    -Update Profile
    -BugFix: Sign up user displayName and profile picture update
    -BugFix: if the user is not logged in Redirect /browse to Login Page and vice-versa(Error: useNavigate() may be used only in the context of a <Router> component.)
    -Unsubscribed to the onAuthStateChanged callback
    -Add hardcoded values to the constants
    -Register for TMDB API & create an app & get access token
    -Get data from TMDB now playing movies list API
    -Custom hook for nowPlayingmovies
    -Create movieSlice
    -Update store with movies data
    -Planning for main container and secondary container
    -Fetch data for trailer video
    -Update store with trailer data
    -Embedded the youtube video and make it autoplay and mute
    -Tailwind classes to make main container look awesome
    -Build Secondary component
    -Build MovieList
    -Build Moviecard
    -TMDB Image cdn url
    -Made the browse page using Tailwind CSS
    -usePopularMovies, useToprated, useUpcoming custom hooks
    -GPT Search
    -GPT Search Bar
    -Multi Language feature in the app
    -Integrate GPT APIs

    


# Features
    -Login/Signup Page
        -Login/ Signup form
        -Redirect to Browse page

    -Browse(After authentication)
        -Header
        -Main Movie
            -Trailer in the background
            -Title & Description
            -Movie suggestions
                -MovieLists * N
    
    -NetflixGPT
        -Search Bar
        -Movie suggestions
