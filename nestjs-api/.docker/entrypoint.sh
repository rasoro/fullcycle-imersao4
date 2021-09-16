#!/bin/bash

if [! -f ".env"]; then
    cp .env.example .evn
fi

npm install
npm run start:dev