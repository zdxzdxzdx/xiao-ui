#!/usr/bin/env sh

rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M main &&
git remote add origin git@github.com:zdxzdxzdx/xiaoui-website.git &&
git push -f -u origin main &&
cd -
echo https://zdxzdxzdx.github.io/xiaoui-website/index.html