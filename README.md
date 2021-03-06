# Pix-ls

1. Clone this repo. Enter below command in your terminal:
    - `git clone https://github.com/hamletv/pix-ls.git`

2. Install dependencies from the root directory.
    - `npm install`

3. Create a POSTGRESQL user with CREATEDB and PASSWORD in PSQL.
    - `CREATE USER <name> WITH CREATEDB PASSWORD <'password'>`

4. Create a .env file in the backend directory based on the .env.example found in the same directory.

5. Enter your username and password information into your .env file along with your desired database name, 
a secured combination of characters for your JWT_SECRET and your desired PORT (typically 5000).

6. Add a proxy to your package.json file within your frontend directory, replacing or keeping the 5000 port
to match your PORT configuration found in the .env file.
    - `"proxy": "http://localhost:5000"`
    
7. Create the database, migrate and seed the models
    - `npx dotenv sequelize db:create`
    - `npx dotenv sequelize db:migrate`
    - `npx dotenv sequelize db:seed:all`
    
8. Start the services for the backend from the backend directory:
    - `npm start`
    
9. Start the services for the frontend from the frontend directory. Upon start of services the project should open in your default browser or you can 
navigate to [http://localhost:3000](http://localhost:3000)
    - `npm start`
    
10. Use the demo user account or create your own account to start using Pix-ls.

11. Tech stack:
    - React
    - Redux
    - Javascript
    - HTML
    - CSS
    - Express
    - Sequelize
    - PostgreSQL
    - Figma (wireframe)
    - dbdiagram (db schema)
