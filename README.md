# BlogIn API

Backend API for the BlogIn application (Express + MongoDB + Socket.IO)

## Requirements
- Node.js (tested with Node >= 20)
- MongoDB (connection string required in `.env`)

## Quick start
Install dependencies and start the server in development mode:

```bash
cd BlogIn-API
npm install
npm run dev   # uses nodemon
```

Or start normally:

```bash
npm start
```

By default the server listens on port `4400` (can be changed with `PORT`).

## Environment
Create a `.env` file at the project root (or set env variables in your environment). Required variables:

- `MONGODB_URI` (or `CONN`) — MongoDB connection string
- `PORT` — optional, defaults to `4400`

Example `.env`:

```
MONGODB_URI=mongodb://localhost:27017/blogin
PORT=4400
```

## API documentation
Swagger UI is exposed at `/api-docs`. The raw spec is available at `/api-docs.json`.

## Sockets
This server also exposes a Socket.IO endpoint on the same HTTP port. Events used by the client include `newUser`, `sendNotification`, `sendFollowNotification`, `updateArticle`, and several note/link events.

## Notes
- Database connection is handled in `config/DBConnection.js` and will log if `MONGODB_URI` is missing.
- Routes are mounted under `/user`, `/article`, `/notes`, `/notification`, `/comment`, and `/report`.

## License
MIT