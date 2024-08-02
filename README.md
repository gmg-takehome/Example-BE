**Example Node Backend**

Since this is just an example, the instructions would not actually work, and the code would also not work.

Here would go some brief description of the project

For more information, check the [Wiki](https://github.com/gmg-takehome/Example-BE/wiki)

**Prerequisites**

*Docker*

 - [Docker](https://www.docker.com/)

*Non-docker setup*
 
 - [Node (version number)](https://nodejs.org/en)
 - [MySQL (version number)](https://www.mysql.com/)

**Docker Setup**

There would be actual commmands here, but for now some examples on what they might be

*First time*

 - some instructions about about file structure 
 - ENV set up 
 - install dependancies
 - Instrutions for seeding db
 - While seeds are provided, it is best to recieve an up-to-date db from the staging environment

*Spin up container*

Run the following commands:

 - `docker compose up -d`

You can now access the page via `localhost:SomePort`

**Non-docker setup**

*First time*

Perhaps some instructions go here about file structure or ENV set up and don't forget to install dependancies

 - Set up MySQL
 - Set up Node
 - Install dependencies
 - Instrutions for seeding db
 - While seeds are provided, it is best to recieve an up-to-date db from the staging environment

*Spin up server*

 - Some run command `node app.js`

***Considerations***

 *Tech Stack*
  - The Tech Stack used for this example is like a MERN stack, except the M stands for MySQL. Express is robust and easily extensible. MySQL is just a standard SQL db system that is robust and performant. 
 *Performamce*
  - We are perhaps taking a performance hit with Express, but with the Redis cluster on our EC2 we should more than make up the difference in performance.
 *Extensibility*
  - Between github CI/CD and the organized file structure, adding or removing features should be relatively simple.
 *Documentation*
  - Please check the [Wiki](https://github.com/gmg-takehome/Example-BE/wiki).
 *KPIs*
  - Luckily, AWS has several solutions for monitoring it's servers. We can use [Performance Insights](https://aws.amazon.com/rds/performance-insights/), [Enhanced Monitoring](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Monitoring.OS.html) and [Distributed Load Testing](https://docs.aws.amazon.com/solutions/latest/distributed-load-testing-on-aws/solution-overview.html) with [JMeter](https://jmeter.apache.org/) scripts. With all of these tools, we can look at server up/downtime, various bottlenecks in performance and their causes and much more.


***Bonus Considerations***

 - We can help our API with a Redis Cache. You can see an example implementation [here](https://github.com/gmg-takehome/Example-BE/wiki/Diagram-of-Services)
 - We can implement draft posts by having a flag in the [db](https://github.com/gmg-takehome/Example-BE/wiki/Database-Information). Here we use published to denote whether or not a post is published. Unpublished posts are only accessible to the user who made them when they are logged in. We can handle security using JWTs. You can see some example middleware  [here](https://github.com/gmg-takehome/Example-BE/blob/main/src/middleware/auth%2Cjs)
