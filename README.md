# Chat App Backend

Node.js Express server for the Chat Application.

## Environment Variables
Create a `.env` file with:
- `MONGO_DB`
- `JWT_SECRET`
- `PORT` (default 8080)
- `GOOGLE_CLIENT_ID`
- `GOOGLE_CLIENT_SECRET`
- `REDIRECTING_URL`
- `CAll_BACK`

## How to run

### Local
```bash
npm install
npm start
```

### Docker
```bash
docker build -t chat-app-backend .
docker run -p 8080:8080 --env-file .env chat-app-backend
```
