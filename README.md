# SBA-MongoDb

API to connect to movie info and post database

three different data collections within the database ( users, posts, or comments).
Utilize reasonable data modeling practices.

Create GET routes for all data that should be exposed to the client, using appropriate query commands to retrieve the data from the database.

Create POST routes for data, as appropriate, using appropriate insertion commands to add data to the database. At least one data collection should allow for client creation via a POST request.

Create PATCH or PUT routes for data, as appropriate, using appropriate update commands to change data in the database. At least one data collection should allow for client manipulation via a PATCH or PUT request.

Create DELETE routes for data, as appropriate, using appropriate delete commands to remove data from the database. At least one data collection should allow for client deletion via a DELETE request.

Include sensible indexes for any and all fields that are queried frequently. For fields that may have a high write-to-read ratio, you may forgo indexes for performance considerations. Make comments of this where applicable.

Include sensible MongoDB data validation rules for at least one data collection. (Email regex in schema)
Use Mongoose to implement your application.

Utilize reasonable code organization practices.

Ensure that the program runs without errors (comment out things that do not work, and explain your blockers - you can still receive partial credit).

Commit frequently to the git repository.

Include a README file that contains a description of your application.

Available routes.
ROOT
Endpoint: /

GET ALL user, post or movie
Endpoints: /users /posts /movies
Method: GET find
Description: Retrieves all \* from the database.

Get a Single user, post or movie
Endpoint: users/:id /posts:id /movies:id
Method: GET findById
Description: Retrieves a single user based on the provided user ID.

Create a New user, post or movie
Endpoint: /users /posts /movies
Method: POST create
Description: Creates a new user in the database.
Body (required):

Update an Existing User, post or movie
Endpoint: /users/:id /posts:id /movies:id
Method: PATCH findByIdandUpdate
Description: Updates an existing user's information based on the provided user ID.
Body (optional):

Delete an Existing User, post or movie
Endpoint: /users/:id /posts:id /movies:id
Method: PATCH findByIdandDelete
Description: Delete an existing user's information based on the provided user ID.
Body (optional):
