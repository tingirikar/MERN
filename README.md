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

tab 1 : basic react display
tab 2 : display of items
tab 3 : forms (i write something and its displayed in bottom) + search + delete

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

if frontend needs to read "http:localhost:3000/products", u need cors()
```
npm install cors
```

---

now i want to create like this
reviews i can create using forms
and that reviews should be stored in mongodb
i can delete them
there is search button to search reviews

C - Create reviews
R - Read reviews + Search
D - Delete reviews

---

i am asking chatgpt a challenge and doing that, its fun

---
