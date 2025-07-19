const express = require('express');
const fs = require('fs');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('uploads'));

function readData(file) {
    if (!fs.existsSync(file)) return [];
    return JSON.parse(fs.readFileSync(file, 'utf8'));
}
function writeData(file, data) {
    fs.writeFileSync(file, JSON.stringify(data, null, 2));
}

// --- Авторизация ---
const ADMIN_PASSWORD = 'supersecret'; // Задайте свой пароль

function checkAdmin(req, res, next) {
    const auth = req.headers.authorization;
    if (!auth || auth !== `Bearer ${ADMIN_PASSWORD}`) {
        return res.status(401).json({ error: 'Только для администратора' });
    }
    next();
}

// --- ТОВАРЫ ---
app.get('/api/products', (req, res) => {
    res.json(readData('products.json'));
});
app.post('/api/products', checkAdmin, upload.single('img'), (req, res) => {
    const products = readData('products.json');
    const product = req.body;
    if (req.file) product.img = req.file.filename;
    products.push(product);
    writeData('products.json', products);
    res.json({ success: true });
});

// --- АКЦИИ ---
app.get('/api/promos', (req, res) => {
    res.json(readData('promos.json'));
});
app.post('/api/promos', checkAdmin, upload.single('img'), (req, res) => {
    const promos = readData('promos.json');
    const promo = req.body;
    if (req.file) promo.img = req.file.filename;
    promos.push(promo);
    writeData('promos.json', promos);
    res.json({ success: true });
});

// --- ОТЗЫВЫ ---
app.get('/api/reviews', (req, res) => {
    res.json(readData('reviews.json'));
});
app.post('/api/reviews', checkAdmin, (req, res) => {
    const reviews = readData('reviews.json');
    reviews.push(req.body);
    writeData('reviews.json', reviews);
    res.json({ success: true });
});

// --- РАЗДЕЛЫ ---
app.get('/api/sections', (req, res) => {
    res.json(readData('sections.json'));
});
app.post('/api/sections', checkAdmin, (req, res) => {
    const sections = readData('sections.json');
    sections.push(req.body);
    writeData('sections.json', sections);
    res.json({ success: true });
});

app.listen(3000, () => console.log('Сервер запущен на http://localhost:3000'));

// Пример для добавления товара
// Клиентский код и HTML должны быть вынесены в отдельный .html/.js файл и не размещаться в серверном Node.js файле.