# Report Online Exploitation - ItsAGoodQuestion

This `roe-frontend` repo contains the dashboard and a few demos. Each runs on a seperate (sub)domain.
The `roe-backend` repo contains the database with hasura for GraphQL and (optional) a flask api for REST.

## How to run everything

1. Spin up a server that has docker and docker-compose.
1. clone `roe-backend`, see the readme for ansible stuff. You may need to docker create volumes/networks
1. Use the [hasura cli](https://hasura.io/docs/latest/hasura-cli/index/) to apply metadata and run migrations
1. clone `roe-frontend` and cd into it
1. Point a domain and a bunch of subdomains at it.
1. Configure the `caddy/Caddyfile` with your (sub)domains.
1. Search and replace `api.hack2022.drwaryaa.com` (which gets reverse-proxied to hasura) to your respective api domain.
1. Run `docker-compose up -d`
1. Visit each of the demos. For the chess and shared document demos, use multiple browsers/tabs at the same time.
1. If you want to use the dashboard, setup and configure auth0.


## Notes and things to do

The backend has some **github ci/cd**. You will need to configure it (`SECRETS` etc.) for your server.  
The dashboard comes as-is; it doesn't actually query the database and just uses example stuff.

The flask api isn't in the docker setup yet.  
The yjs_atlaskit (shared document) doesn't yet submit the data to hasura and just console logs. TODO: use graphql or the flask rest api.
