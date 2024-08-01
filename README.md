**Example Node Backend**

Since this is just an example, the instructions would not actually work, and the code would also not work.

Here would go some brief description of the project

For more information, check the [Wiki](https://github.com/gmg-takehome/Example-BE/wiki)

**Prerequisites**

 - [Docker](https://www.docker.com/)

*Non-docker setup*
 
 - [Node (version number)](https://nodejs.org/en)
 - [MySQL (version number)](https://www.mysql.com/)

**Docker Setup**

*First time*

Perhaps some instructions go here about file structure or ENV set up and don't forget to install dependancies

*Spin up container*

Run the following commands:

 - `docker compose up -d`

You can now access the page via `localhost:SomePort`

**Non-docker setup**

*First time*

Perhaps some instructions go here about file structure or ENV set up and don't forget to install dependancies

 - Set up MySQL
 - Set up Node
 - Install dependancies

*Spin up server*

 - Some run command `node app.js`

While seeds are provided, it is best to recieve an up-to-date db from the staging environment

***Considerations***

 - Tech Stack:
  - The Tech Stack used for this example is like a MERN stack, except the M stands for MySQL. Express is robust and easily extensible. MySQL is just a standard SQL db system that is robust and performant. 
 - Performamce:
  - We are perhaps taking a performance hit with Express, but with the Redis cluster on our EC2 we should more than make up the difference in performance.
 - Extensibility:
  - Between github CI/CD and the generalized file structure, adding or removing features should be relatively simple.

