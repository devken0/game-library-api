# Game Library API with Authentication

A back-end implementation of a RESTful API for a Game Library System. Built using Node.js, Express.js, and MongoDB. 

## Features

<!-- Add screenshots that are accessible through github links -->

## Prerequisites

- [Node.js](https://nodejs.org/en/download)
- [MongoDB](https://www.mongodb.com/docs/manual/installation/)
- [Postman VS Code extension](https://marketplace.visualstudio.com/items?itemName=Postman.postman-for-vscode)

If you are using Windows, just follow the official docs for each of these to set them up on your system.

If you are using Ubuntu, here are the commands you can follow to prepare your system:

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

## Setup 

Run these commands in the terminal to install third party packages, dependencies, and tools that were used.

```sh
npm install express-validator express-rate-limit
```

## Usage

### JWT Secrets

### Postman collection

Click [here](https://go.postman.co/workspace/8594a39f-fee3-4124-88a0-a42a7937d389/collection/46686005-aad24d06-b687-4d05-9b43-bf795ffcc988) to access the collection.

### Example requests for API testing (cURL)

**Register**: 

```bash
curl --location 'http://localhost:5000/api/auth/register' \
--header 'Content-Type: application/json' \
--data-raw '{
    "username":"testuser",
    "email":"testuser@example.com",
    "password":"apiTest321"
}'
```