cp -a public/. deploy/
docker build -t package deploy/.
docker run --env-file=local.env package
# find deploy/ ! -name Dockerfile ! -name deploy.sh -maxdepth 1 -type f -delete