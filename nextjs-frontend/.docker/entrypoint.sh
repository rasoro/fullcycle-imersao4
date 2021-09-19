#!/bin/bash

if [! -f ".env.local"]; then
    cp .env.local.example .evn.local
fi

npm install
npm run dev