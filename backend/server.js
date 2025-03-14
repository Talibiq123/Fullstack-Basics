import express from 'express';

const app = express();
app.use(express.static('dist'));

const port = process.env.PORT || 5000;

// app.get('/', (req, res) => {
//     res.send('server is ready.');
// })

// get a list of five jokes
app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
          id: 1,
          title: 'Tech Support',
          content: "Why did the computer catch a cold? Because it left its Windows open!"
        },
        {
          id: 2,
          title: 'Bug Fixing',
          content: "Why do programmers prefer dark mode? Because light attracts bugs!"
        },
        {
          id: 3,
          title: 'Math Joke',
          content: "Parallel lines have so much in common. It’s a shame they’ll never meet!"
        },
        {
          id: 4,
          title: 'Coffee Lover',
          content: "Why did the JavaScript developer go broke? Because he kept using 'null' instead of money!"
        },
        {
          id: 5,
          title: 'AI Humor',
          content: "Why don’t AI assistants ever get locked out? Because they always have the right 'key'!"
        }
      ];
      res.send(jokes);
})

app.listen(port, () => {
    console.log(`serve at http://localhost:${port}`);
})