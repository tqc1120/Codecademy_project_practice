const express = require('express');
const app = express();

const { quotes } = require('./data');
const { getRandomElement, getIndexById } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}.`);
});

// get a random quote
app.get('/api/quotes/random', (req, res, next) => {
    const quote = getRandomElement(quotes);
    res.send({quote: quote});
});
// get quotes said by a person
app.get('/api/quotes', (req, res, next) => {
    if (!req.query.person) {
        res.send({quotes: quotes});
    } else {
        const matchquote = quotes.filter(element => element.person === req.query.person);
        res.send({quotes: matchquote});
    }      
});
//post a quote
app.post('/api/quotes', (req, res, next) => {
    const newquote = {
        quote: req.query.quote,
        person: req.query.person
    };
    if (newquote.quote && newquote.person) {
        quotes.push(newquote);
        res.send({ quote: newquote });
    } else {
        res.status(400).send();
    }
});
//update a quote
app.put('/api/quotes/:id', (req, res, next) => {
    const index = getIndexById(req.params.id, quotes);
    if (index !== -1) {
        quotes[index] = req.query
        res.send({ quote: req.query });
    } else {
        res.status(404).send();
    }
});
// delete a quote
app.delete('/api/quotes/:id', (req, res, next) => {
    const index = getIndexById(req.params.id, quotes);
    if (index !== -1) {
      quotes.splice(index, 1);
      res.send({ quote: quotes[index] });
    } else {
      res.status(404).send();
    }
  });