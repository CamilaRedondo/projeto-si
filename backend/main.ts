import express from "express"
import sequelize from "./database/config/factory.db";
import user_router from "./cases/users/index.users";
import auth_router from "./cases/auth/index.auth";

const PORT: number = 3000;
const app: ReturnType<typeof express> = express();

app.use(express.json());

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
