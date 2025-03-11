
# Rest API: Express

Collection of REST API endpoints having CRUD functionality.



## Installation

Clone the project and enter in the express directory then install all dependencies.

```bash
    cd express/api_node
    yarn
```

Copy the .env.example to .env and configure the environment variables. Make sure you have postgres installed. Then you can run the migration

```bash
    npx prisma migrate dev
```

## Running

```bash
    yarn dev
```

You can test the api on http://localhost:3002. You can change the port in ./src/index.js