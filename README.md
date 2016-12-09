#Sourcerer

----------

##RethinkDb setup

Sourcerer uses RethinkDb.
You can find more information about it [here](https://www.rethinkdb.com/)

###RethinkDb server start
To setup RethinkDb instance for project:

1. [Download RethinkDb](https://www.rethinkdb.com/docs/install/) and follow installation instructions
2. Move to srcr/webserver
3. Start RethinkDb server

        rethinkdb
After this step RethinkDb instance should listen for driver connection on localhost:28015,
for intracluster connection on localhost:29015,
and RethinkDb Administrative console should be available on localhost:8080

###Run migrations
To create database structure and populate it with some data you should run migrations

1. Install rethink-migrate (It should be installed by npm install)
2. Run migrations

        npm run db-migrate-up
3. To undo migrations run npm run db-migrate-down
4. To get more possibilities to work with rethink-migrate run

        ./node_modules/.bin/rethink-migrate
Find more about rethink-migrate [here](https://github.com/JohanObrink/rethink-migrate)
