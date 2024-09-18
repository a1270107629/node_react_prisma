# node_react_prisma
node demo

# prisma orm
    npm i prisma --save-dev
    npx prisma init --datasource-provider sqlite
    npx prisma migrate dev --name init
    npm install @prisma/client
    npx prisma generate
    npx prisma studio