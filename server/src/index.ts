import express from "express";
import { ApolloServer } from "apollo-server-express";
import { typeDefs, resolvers } from "./graphql";


async function startApolloServer(){
    const server = new ApolloServer({ typeDefs, resolvers });
    const app = express();
    const port = 9000;

    await server.start();
    server.applyMiddleware({app, path: "/api"})
    
    app.listen(port);   
    console.log(`[app]: http://localhost:${port}`);
}

startApolloServer();




