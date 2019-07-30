#!/bin/bash

cp -r videos/ dist/
find videos/ -name \*.jpeg -exec cp {} ./dist \;
find videos/ -name images -exec cp -r {} dist/ \;
find videos/ -name theflower.png -exec cp {} dist/ \;
