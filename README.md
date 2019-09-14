# Simplest Starter App

This is the simplest starter app! If doesn't care about your front-end. Actually, it doesn't even know what a front-end is. There are two scripts - one bash and the other JavaScript - that communicate with the 8base API. What both scripts demonstrate is how to trigger custom functions deployed to a workspace.

### Server
The `server` directory hold the 8base project. When deployed to a workspace, it provisions two serverless functions. One webhook and one resolver.

The **webhook** can be invoked with a normal HTTP GET request. 

The **resolver** can be invoked through the GraphQL API.

Both functions connect to the workspace database using the `context.api` argument passed to the function.

A `schema.json` file exists at the `src/server` path. Import it to an empty workspace using `8base import -f schema.json`

### Client
To run the node script, run `$ node script.js "SEARCH TERM"`.
To run the bash script, run `$ bash script.sh`.