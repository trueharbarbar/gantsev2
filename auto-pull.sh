#!/bin/bash
# Auto-pull script — checks for updates every 5 minutes
cd /Users/ivanprokofev/gantsev

while true; do
    git pull origin main 2>&1 | while read line; do
        echo "$(date '+%Y-%m-%d %H:%M:%S') $line"
    done
    sleep 300
done
