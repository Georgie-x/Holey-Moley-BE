This is the backend repo for NC group project by The Viscounts (August 2023 cohort). This repo holds information on users, shows, show characters, games and results for the Holey Moley game.

Clone this repo:
    git clone https://github.com/Georgie-x/Holey-Moley-BE.git

Install dependencies:
    npm i

Seed local database:
    npm run setup-dbs
    npm run seed

Add environmental variables:
    .env.development (PGDATABASE=holey_moley) 
    .env.test (PGDATABASE=holey_moley_test)

Add to .gitignore:
    node_modules
    .env.*
    helper.sql
    helper.txt

Run tests:
    npm t

View DB and check tables:
    npm run helper

The Holey-Moley frontend repo can be found at:
    https://github.com/Georgie-x/Holey-Moley.git

