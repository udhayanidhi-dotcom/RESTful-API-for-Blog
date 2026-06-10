const express = require("express");
const app = express();

app.use(express.json());

const postRoutes = require("./routes/posts");
app.use("/api/posts", postRoutes);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});