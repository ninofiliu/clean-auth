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

## Installation

1. Alias `{main,auth}.clean-auth.demo` to local addresses, for example on Unix machines by appending this to `/etc/hosts`:

  ```
  127.0.0.1   main.clean-auth.demo
  127.0.0.2   auth.clean-auth.demo
  ```

2. Generate private and public keys

  ```sh
  cd tokens
  openssl genrsa -out privateKey.pem 2048
  openssl rsa -in privateKey.pem -outform PEM -pubout -out publicKey.pem
  ```

  You should have 
