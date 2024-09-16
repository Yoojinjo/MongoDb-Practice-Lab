# SBA-MongoDb

API to connect to movie info and post database
MongoDB sample_mflix database
users, posts and movies collections

three different data collections within the database ( users, posts, or comments).

indexes for required fields. for example movie.title or post.name but NOT post.email for performance, or users.password

Mongoose data type validation thru schemas
(Email regex in schema)

Utilize reasonable code organization practices. Separate routes for users, posts and movies.

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

added ejs view engine, with nav bar on home page for practice

would like to add views to other routes
