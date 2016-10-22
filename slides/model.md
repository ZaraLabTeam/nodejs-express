## A mongoose model
Working with MongoDb data


### A model definition
```javascript
var JokeSchema = new Schema({
    content: {type: String, required: true},
    category: {type: String, required: true}
});
```

Notes:
Supports additional Schema methods like `.pre('save', (next) => {...}` 
which defines what happens before saving the given model