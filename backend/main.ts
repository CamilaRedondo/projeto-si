import express from "express"
import cors from "cors";
import sequelize from "./database/config/factory.db";
import user_router from "./cases/users/index.users";
import auth_router from "./cases/auth/index.auth";
import bodyParser from "body-parser";
import address_router from "./cases/address/index.address";

const PORT: number = 5000;
const app: ReturnType<typeof express> = express();

app.use(bodyParser.json());
app.use(cors())

app.use('/address', address_router)
app.use('/auth', auth_router);
app.use('/users', user_router);

sequelize.sync({ alter: true })
.then(() => {
        console.log('[ DB ] Successfully initialized');
        app.listen(PORT, () => console.log(`[ APP ] Running on http://localhost:${ PORT }`))
    })
    .catch((error) => {
        console.log('[ DB ] Something went wrong...')
        console.log(error)
    });
