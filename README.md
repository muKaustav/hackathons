## Installation

```
npm i
```

## Startup

```
nodemon server.js
```

## Admin APIs

- GET /resident

```
http://localhost:5000/resident
```

- GET /resident/:aadhaar

```
http://localhost:5000/resident/1234568912
```

- POST /resident

```
http://localhost:5000/resident
```

- GET /hotel/:hotelName

```
http://localhost:5000/hotel/hotelA
```

- GET /hotel/:hotelName/:email/:phone

```
http://localhost:5000/hotel/hotelA/test@test.com/1234568912
```

- POST /hotel/:hotelName

```
http://localhost:5000/hotel/hotelA
```
