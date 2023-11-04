const express = require('express');
const app = express();
const PORT = 5500;

app.use(express.static(__dirname));

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/`);
});
