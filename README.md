# This is the reboxit!

Stack:
- Typescript
- Node.js
- Jest


### Database migration
Creation and migration of database schema is done by __knex__. 
In order to create a new migration script run: 

`npm run makeMigration --name=script_name`

In order to migrate the database to the latest schema run:

`npm run db:makeMigration`

