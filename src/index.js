import express from 'express';
import morgan from 'morgan';
import { engine } from 'express-handlebars';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const app = express();
const port = 3000;

// Get directory name for path
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(path.join(__dirname , 'public')))

// HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine('hbs', engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views')); // Ensure this line uses path

// Route
app.get('/', (req, res) => {
  console.log('Rendering home view');
  res.render('home'); // Ensure `home.handlebars` exists in the views directory
});
app.get('/news', (req, res) => {
  console.log('Rendering home view');
  res.render('news'); // Ensure `home.handlebars` exists in the views directory
});

// Start server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});