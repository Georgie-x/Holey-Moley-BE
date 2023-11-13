
 1. user arrives on home page - text input box for username and submit button
        check if valid username
        check if username on db
        if on db PATCH user 
        if not on db POST user 

 2. user taken to menu page 

 3. button input start single player - user taken to game setup page
 4. button input start multiplayer - user taken to game setup page
 5. button input join multiplayer - user taken to game loading page

 6. user on game setup page - buttons with imgs of shows
        GET shows
        on submit: 
        create game_id 
        GET cast
        randomise 10 Qs
        POST games

7.  host on game setup page - display logged in users to select for invite
        GET users
        send invites to users

8. user on game loading screen - timer til game start, players joined, host username
        GET users
        GET game_id
    
9. host on game loading screen - timer til game start, players joined, start button

10. user on game page - pic, launcher, pic cover, mole, answer input, timer
        GET games
        send back array of the 10 pics
        PATCH results
        PATCH games

11. user taken to results page after game - scores and answers
        GET games
        GET users
        GET results
        use all to calculate scores to send back
        GET cast
        send back answers


 