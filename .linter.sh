#!/bin/bash
cd /home/kavia/workspace/code-generation/minimayhem-arcade-hub-35669-7d1d0b6d/minimayhem_arcade_hub
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

