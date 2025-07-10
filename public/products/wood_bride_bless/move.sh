#!/bin/bash

# Get the current directory
CURRENT_DIR="$(pwd)"

# Loop through all subdirectories in the current directory
for subdir in "$CURRENT_DIR"/*/; do
    [ -d "$subdir" ] || continue
    # Move all files (not directories) from the subdirectory to the current directory
    find "$subdir" -maxdepth 1 -type f -exec mv -i {} "$CURRENT_DIR" \;
done
