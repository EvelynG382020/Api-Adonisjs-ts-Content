import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import {
  responsiveAttachment,
  ResponsiveAttachmentContract,
} from '@ioc:Adonis/Addons/ResponsiveAttachment'

export default class Content extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public title: string

  @column()
  public description: string

  @column()
  public category: string

  @column()
  public year: number

  @column()
  public rating: number

  @column()
  public is_recent: boolean

  @column()
  public is_trending: boolean

  @responsiveAttachment({ preComputeUrls: true })
  public image_file: ResponsiveAttachmentContract | null

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
