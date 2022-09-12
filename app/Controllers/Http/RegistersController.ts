import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class RegistersController {
  public async index({ request }: HttpContextContract) {
    const validations = await schema.create({
      email: schema.string([rules.email(), rules.unique({ table: 'users', column: 'email' })]),
      password: schema.string([rules.confirmed]),
    })
    const data = request.validate({ schema: validations })
    return data
  }
}
