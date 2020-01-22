require('dotenv').config();

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
    console.log(`\n=== Server listening on port ${PORT} ===\n`);
});