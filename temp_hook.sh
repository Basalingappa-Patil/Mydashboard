#!/bin/sh
MSG_FILE="$1"
if ! grep -q "^Change-Id:" "$MSG_FILE"; then
    CHANGE_ID="I$(date | git hash-object --stdin)"
    echo "" >> "$MSG_FILE"
    echo "Change-Id: $CHANGE_ID" >> "$MSG_FILE"
fi
