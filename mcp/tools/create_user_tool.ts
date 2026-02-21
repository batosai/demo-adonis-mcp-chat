import type { ToolContext } from '@jrmc/adonis-mcp/types/context'
import type { BaseSchema } from '@jrmc/adonis-mcp/types/method'

import vine from '@vinejs/vine'
import { Tool } from '@jrmc/adonis-mcp'
import User from '#models/user'

type Schema = BaseSchema<{
  fullName: { type: 'string' }
  email: { type: 'string' }
  password: { type: 'string' }
}>

const vineSchema = vine.object({
  fullName: vine.string().optional().meta({
    description: 'The full name of the user',
  }),
  email: vine.string().meta({
    description: 'The email address of the user',
  }),
  password: vine.string().meta({
    description: 'The password for the user account',
  }),
})

export default class CreateUserTool extends Tool<Schema> {
  name = 'create_user'
  title = 'Create User'
  description = 'Create a new user in the database with a full name, email and password'

  async handle({ args, response }: ToolContext<Schema>) {
    const user = await User.create({
      fullName: args!.fullName,
      email: args!.email,
      password: args!.password,
    })

    return response.text(
      `User created successfully: ${user.fullName} (${user.email}) with ID ${user.id}`
    )
  }

  schema() {
    return vine.create(vineSchema).toJSONSchema() as Schema
  }
}
