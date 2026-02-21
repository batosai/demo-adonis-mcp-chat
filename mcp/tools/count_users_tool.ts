import type { ToolContext } from '@jrmc/adonis-mcp/types/context'

import { Tool } from '@jrmc/adonis-mcp'
import User from '#models/user'

export default class CountUsersTool extends Tool {
  name = 'count_users'
  title = 'Count Users'
  description = 'Count the total number of users in the database'

  async handle({ response }: ToolContext) {
    const result = await User.query().count('* as total')
    const total = result[0].$extras.total

    return response.text(`There are ${total} users in the database.`)
  }
}
