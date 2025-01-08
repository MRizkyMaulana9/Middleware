const express = require("express");
const userRoute = require("./routes/user-route");
const userLogger = require("./middlewares/logger");
const app = express();

app.use("/api/student", userRoute);
app.use(userLogger);
const port = 3000;

app.listen(port, () => {
  console.log(`server run at http://localhost:${port}/api/student`);
});
