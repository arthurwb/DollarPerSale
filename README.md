# DollarPerSale
### Startup
Run Client
```
cd client
npm start
```

Run Server
```
cd server
npm run dev
```

## Client
Running on React and, for now, only react. I like react, thats why its using react, there are no other reasons. If you do not like React you do not need to be making any changes to this code. Fuck off.

## Server
Running on KeystoneJS because KeystoneJS is free and pretty easy to just start up and not worry about it. Is it easy to use? No. Is it efficient? No. Are there any better options? Yes. Will we use them? No.

# ENV
## CLIENT
VITE_SERVER_URL=http://localhost:8080/api/posts
VITE_ADMIN_URL=https://dollarpersale.up.railway.app

## SERVER
DATABASE_URL=mysql://user:password@localhost:3306/dps_database
PORT=8080