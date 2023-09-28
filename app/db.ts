import { Sequelize } from "sequelize-typescript"
import config from "./config/config.json"
import { Stat } from "./models/stats.model"
//@ts-ignore
const sequelize = new Sequelize({
  //@ts-ignore
  dialect: config.development.dialect,
  storage: config.development.storage,
  logQueryParameters: true,
  models: ["/models"],
  modelMatch: () => {
    return true
  }
})

sequelize.addModels([Stat])

export default sequelize as Sequelize
