#! /bin/bash

## Integration envirement
docker build -t angular-itg  ENV/ITG/.

## Production envirement
docker build -t angular-prod  ENV/PROD/.

