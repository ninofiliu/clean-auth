# Clean Auth

An attempt at clearly separating the main app from its authentication feature.

It is frequent to see web applications lacking a proper separation between security and business features. This makes the security model being very hard to properly implement, leading to less secure apps. This also makes the main app more complex and less prone to changes.

This repo presents a simple solution to securing a hello world app behind a classic authentication use case (signup, signin and signout features).

## How it works

There are two servers and one shared tokens module.

The auth server manages the sign-ups, the sign-ins and the sign-outs. It has its own collections of shape `{username, password}`. The sign-ins and sign-outs are done by setting a token cookie and redirecting to the main app.

The main server handles business logic (here though, only a hello world app for demo purposes). It has a global middleware that, before anything else, verifies the token cookie. Ideally that should be a separate firewall program but here that would only complexifies the code.

The tokens module handles a pair of public and private keys. It also handles signed token generation and verification. It could be split in two (generation @ auth, verification @ main) but then again that would complexify the code.

Endpoints:

- **`auth.clean-auth.demo`**: 
    - `GET /` web app with sign in and sign up forms
    - `POST /signup {username, password}`
        - adds user to DB
    - `POST /signin {username, password}`
        - adds http-only token cookie
    - `GET /signout`
        - cleans token cookie
- **`main.clean-auth.demo`**: has a global middleware to check the token cookie
    - `GET /` dummy app

## What's next

## Getting started

1. Alias `{main,auth}.clean-auth.demo` to local addresses, for example on Unix machines by appending this to `/etc/hosts`:

  ```
  127.0.0.1   main.clean-auth.demo
  127.0.0.2   auth.clean-auth.demo
  ```

2. Generate an RSA-SHA 256 private/public key pair, for example with 

  ```sh
  cd tokens
  openssl genrsa -out privateKey.pem 2048
  openssl rsa -in privateKey.pem -outform PEM -pubout -out publicKey.pem
  ```

  You should have `./tokens/privateKey.pem` that begins by `-----BEGIN RSA PRIVATE KEY-----` and `tokens/publicKey.pem` that begins by `-----BEGIN PUBLIC KEY-----`
