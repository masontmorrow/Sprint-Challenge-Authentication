1.  Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.

    Middleware is a piece of software that is uses locally or globally. It usually has only one job, to keep each piece of middleware simple. Local middleware is incorporated into specific routes, while global middleware runs on all routes. 

    Sessions in express are Objects that track the authorization status of a user. They can be stored locally, but usually are stored in a server that is separate from the database server. This allows a sessions server to serve multiple apps, because each session is assigned a unique ID. 

    bcrypt is a authorization library writtenin 1999 that employs the use of "key stretching". Key stretching is incorporation of time into an authentication logic, or more simply: restricting the amount of requests that can be made over a set amount of time. 

    JWT are JSON web tokens, or rather pieces of encrypted data that contain three parts. These tokens can be used to verify the authorization status of a user, and can be stored on the client fairly securely. 

2.  What does bcrypt do in order to prevent attacks?

    Key stretching, exponential hashing rounds, and salting: a randomized addition of characters into a hash to lessen the possibilty of attackers using rainbow tables to gain authorization. Rainbow tables are just large databses of password hashes that attackers use to decode hashed password data sets.

3.  What are the three parts of the JSON Web Token?

    Header:  contains the algorithm and type. 
    Payload:  contains data that can be customized by the developer.
    Signature: contains a developer created string which enables third parties to identify if the token has been altered.
