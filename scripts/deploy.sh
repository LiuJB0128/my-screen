#!/usr/bin/env sh

yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m deploy &&
git remote add origin git@github.com:LiuJB0128/my-screen-website.git &&
git branch -M main &&
git push -u origin main &&
cd -;
