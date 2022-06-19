#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

echo 'karte.moosacherparadies.de' > CNAME

git init
git checkout -b main
git add -A
git commit -m 'deploy'

cd -
