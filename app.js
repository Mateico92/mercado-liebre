const express = requiere('express');
const path = requiere('path');

const app = express();

app.use( express.static(path.resolve(__dirname, './public')) );

const port = process.env.PORT || 3033;
app.listen (port, () => 
    console.log('Servidor corriendo en Puerto ${port}')
);

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'));
})

