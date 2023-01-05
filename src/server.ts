import app from "./index";
import dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});