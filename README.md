# Game Library API

A back-end implementation of a RESTful API for a Game Library System. Built using Node.js, Express.js, and MongoDB. 

## Features

- User registration and login with `bcrypt` password encryption
- JWT token-based authentication for login sessions 
- Full CRUD for games (add, view, edit, delete, and search)
- Input validation with `express-validation`
- Protected routes with JWT token verification
- Error handling middleware
- Rate limiting + logger middleware
- Basic unit testing with Jest + Supertest

## Technologies

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT + bcrypt
- express-validator
- express-rate-limit
- Jest + Supertest

## Prerequisites

- [Node.js](https://nodejs.org/en/download)
- [MongoDB](https://www.mongodb.com/docs/manual/installation/)
- [Postman VS Code extension](https://marketplace.visualstudio.com/items?itemName=Postman.postman-for-vscode)

If you are using Windows, just follow the official docs for each of these to set them up on your system.

For Ubuntu, here are the commands you can follow to prepare your system:

```sh
# update system repositories and packages
sudo apt update && sudo apt upgrade

# install dependencies for installing nvm and mongodb
sudo apt install gnupg curl

# install NVM 
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash

# loads NVM, close and reopen the terminal to take effect
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" 

# installs the LTS version of Node.js, also installs npm
nvm install --lts

# setting the node version
nvm use --lts

# import mongodb public gpg key
curl -fsSL https://www.mongodb.org/static/pgp/server-8.0.asc | \
   sudo gpg -o /usr/share/keyrings/mongodb-server-8.0.gpg \
   --dearmor

# create list file for Ubuntu 24.04
echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-8.0.gpg ] https://repo.mongodb.org/apt/ubuntu noble/mongodb-org/8.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-8.0.list

# install latest mongodb server
sudo apt-get update && sudo apt-get install -y mongodb-org

# reload init system and start mongodb
sudo systemctl daemon-reload
sudo systemctl enable mongod --now
```

## Installation 

Run these commands in the terminal to install third party packages, dependencies, and tools that were used.

```bash
git clone https://github.com/devken0/game-library-api.git
cd game-library-api
npm i 
```

Run the server with:

```bash
npm start 
```

> NOTE: Make sure to create the `.env`  file from the template `.env.example` and set the correct environment variables.
>
> ```bash
> cp .env.example .env 
> ```
> 

## Environment Variables

| Key           | Description               |
| ------------- | ------------------------- |
| `PORT`        | Port to run the server    |
| `MONGODB_URI` | MongoDB connection string |
| `JWT_SECRET`  | Secret for signing tokens |

You can use [JWT Secret Key Generator](https://jwtsecrets.com/#generator) to generate a unique secret.

## Running tests 

Jest + Supertest

```bash
npm test
```

## API Routes

### Auth

- `POST /api/auth/register`
- `POST /api/auth/login`

### Games

- `GET /api/games`
- `GET /api/games/search?title=...&genre=...&platform=...`
- `POST /api/games` *auth required*
- `PUT /api/games/:id` *auth required*
- `DELETE /api/games/:id` *auth required*

## Postman Collection

You may download and use the included postman_collection.json or open the link below.

https://www.postman.com/devken0/web-back-end-developer-exam/collection/hfqdlv8/game-library-api?action=share&creator=46686005
