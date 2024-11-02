const mongoose = require('mongoose')
const url = "mongodb+srv://anujtiwari31135:PPNqDG76dn5yMbyL@cluster0.1xhoc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


mongoose.connect(url).then(() => console.log('Connected to db')).catch((e) => console.log('error',e));