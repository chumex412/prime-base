const express = require("express");
const cors = require("cors");
const {graphqlHTTP} = require("express-graphql");
const schema = require("./schema");
const path = require("path");

const app = express();

app.use(cors());

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.use(express.static("./public"))

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "index.html"))
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
});