#!/bin/bash

[ ! -e "$1" ] && exit 1;

input="$1"
extension="${input##*.}"
output="${input%.*}.min.${extension}"

java -jar yuicompressor-*.jar "$input" -o "$output" --charset utf-8

