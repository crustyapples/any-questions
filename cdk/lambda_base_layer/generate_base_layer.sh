# remove the container
docker rm layer-container

# creating the base layer
docker build -t base-layer .

# name it to layer-container
docker run --name layer-container base-layer

# copy zip artifact into the cdk
docker cp layer-container:layer.zip . && echo "Created layer.zip with updated base layer."
