# NodeCourse

# To install & libraries manager: 
- npm -> npm install
- yarn -> yarn add
- pnpm

# Dependecies:
- Project dependecies
- Development dependencies -> Webpack | npm i typescript --save-dev  | npm i typescript -D
- peers -> when you create a library, that need a pre-condition.

# Install a project dependency:
- ex. CORS
    - npm install cors or npm install cors --save or npm i cors

# Install libraries from package.json -> npm i
# install - clean installation => npm ci
# list depdencies -> npm list
# install global dependencies -> npm install ts-node --global -> npm i ts-node -g
# list libraries without dev dependencies --> npm list --omit dev

### aux
- npm uninstall typescript

-----
npm i -g typescript ( instalado el tsc conversor)
--ejem tsc index.ts => index.js
--tsc --init (generate )
npm i -g ts-node

--to excute
npm run build

--compile
ts-node src/index



--get/post/put/patch/delete/options(usadas por el navegador, el nagegador hace una petion con option)


---
npm i express
npm i -D @types/express


-- autorestart after an event like nodemon or supervisor
npm i -D nodemon

 npm i uuid
 npm i tsconfig-paths -D
 npm i class-transformer