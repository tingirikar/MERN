setup react in client (frontend)
```
cd client
npm react vite@latest .
```
choose ESLint
```
npm install react-router-dom
```

what i want to do is.. these three things

tab 1 : display of items + search
tab 2 : forms (i write something and its displayed in bottom)
tab 3 : CRUD of notes

backend
```
npm install express mongoose
```

note that in mongoose.connect()
inside the bracket u must write
```
mongoose.connect("mongodb://127.0.0.1:27017/mern")
or 
mongoose.connect("mongodb://localhost:27017/mern")
```
localhost => 127.0.0.1
