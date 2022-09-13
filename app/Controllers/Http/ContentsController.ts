import { ResponsiveAttachment } from '@ioc:Adonis/Addons/ResponsiveAttachment'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CreateContent from 'App/Validators/CreateContentValidator'
import Content from 'App/Models/Content'

export default class ContentsController {
  public async index({ response }) {
    const contentAll = await Content.query()
    return response.json(contentAll)
  }

  public async store({ request, response }: HttpContextContract) {
    const payload = await request.validate(CreateContent)
    if (payload) {
      const dataContent = request.body()
      const imgFile = request.file('image_file')
      dataContent.image_file = imgFile ? await ResponsiveAttachment.fromFile(imgFile) : null
      const content = await Content.create(dataContent)
      return response.json(content)
    }
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

  public async destroy({ request, params }: HttpContextContract) {
    const content = await Content.findOrFail(params.id)
    const dataContent = request.body()
    content.image_file = null
    await content.merge(dataContent)
    await content.delete()
  }
}
