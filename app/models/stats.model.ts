import { Column, Model, Table } from "sequelize-typescript"

@Table
export class Stat extends Model {
  @Column
  chatId: number
  @Column
  userId: number
  @Column
  messages: number
  @Column
  xp: number
}
