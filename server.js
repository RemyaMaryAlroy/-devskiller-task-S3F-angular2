const express = require('express');
path = require('path');
const app = express();


app.use(express.static('./dist/devskiller-task-s3-f-angular2'));


app.get('*', (req,res)=>{
	res.sendFile(path.join('./dist/devskiller-task-s3-f-angular2/index.html'));
});

app.listen(process.env.PORT || 8080, ()=>{
	console.log('Console listening');
})
