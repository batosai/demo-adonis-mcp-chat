import { BaseModel, column } from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'

export class ArticleSchema extends BaseModel {
  static $columns = ['id', 'title', 'content', 'createdAt', 'updatedAt'] as const
  $columns = ArticleSchema.$columns
  @column({ isPrimary: true })
  declare id: number
  @column()
  declare title: string | null
  @column()
  declare content: string | null
  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime | null
  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null
}

export class UserSchema extends BaseModel {
  static $columns = ['id', 'fullName', 'email', 'password', 'createdAt', 'updatedAt'] as const
  $columns = UserSchema.$columns
  @column({ isPrimary: true })
  declare id: number
  @column()
  declare fullName: string | null
  @column()
  declare email: string
  @column({ serializeAs: null })
  declare password: string
  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime
  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null
}
