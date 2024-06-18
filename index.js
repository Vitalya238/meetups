const app = require("express")();
const PORT = process.env.PORT || 3000;

app.use("/", require("./routers/meetupRouter"));

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
