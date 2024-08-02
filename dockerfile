# An example file, the real one would likely contain many more commands to implement various features. This is just set up for a Node container
FROM node:20
 
# Install all the dependencies in the container using the package.json file
COPY package.json .
RUN npm install
 
# Copy the remaining project files to the container
COPY . .
 
# Expose the application port
EXPOSE 3000
 
# Run the App
CMD npm start