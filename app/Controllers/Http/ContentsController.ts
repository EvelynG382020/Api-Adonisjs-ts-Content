import { ResponsiveAttachment } from '@ioc:Adonis/Addons/ResponsiveAttachment'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Content from 'App/Models/Content'

export default class ContentsController {
  public async index({ response }) {
    const contentAll = await Content.query()
    return response.json(contentAll)
  }

  public async store({ request, response }: HttpContextContract) {
    const dataContent = request.body()
    const imgFile = request.file('image_file')
    dataContent.image_file = imgFile ? await ResponsiveAttachment.fromFile(imgFile) : null
    const content = await Content.create(dataContent)
    return response.json(content)
  }

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({ request, params }: HttpContextContract) {
    const content = await Content.findOrFail(params.id)
    const dataContent = request.body()
    const imgFile = request.file('image_file')
    content.image_file = imgFile ? await ResponsiveAttachment.fromFile(imgFile) : null
    await content.merge(dataContent).save()
  }

  public async destroy({}: HttpContextContract) {
    // const content = await Content.first()
    // content.image_file = null
  }
}
