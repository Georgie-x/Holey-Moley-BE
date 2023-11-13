install dependencies:
npm i

add environmental variables:
    .env.development (PGDATABASE=holey_moley) 
    .env.test (PGDATABASE=holey_moley_test)

add to .gitignore:
    node_modules
    .env.*
    helper.sql
    helper.txt