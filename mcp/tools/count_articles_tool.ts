import type { ToolContext } from '@jrmc/adonis-mcp/types/context'

import { Tool } from '@jrmc/adonis-mcp'
import Article from '#models/article'

export default class CountArticlesTool extends Tool {
  name = 'count_articles'
  title = 'Count Articles'
  description = 'Count the total number of articles in the database'

  async handle({ response }: ToolContext) {
    const result = await Article.query().count('* as total')
    const total = result[0].$extras.total

    return response.text(`There are ${total} articles in the database.`)
  }
}
