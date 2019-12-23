# Clean Auth

An attempt at clearly separating the main app from its authentication feature.

## Endpoints

- **main**
    - port 3001
    - mw to check jwt, else redirects to auth/
    - endpoints:
        - `GET /` dummy app
- **auth**
    - port 3002
    - endpoints:
        - `GET /` web app with sign in and sign up
        - `POST /signup {username, password}`
            - adds user to DB
            - redirects to auth/
        - `POST /signin {username, password}`
            - adds http-only jwt
            - redirects to main/