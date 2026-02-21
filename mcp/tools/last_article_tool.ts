import type { ToolContext } from '@jrmc/adonis-mcp/types/context'

import { Tool } from '@jrmc/adonis-mcp'
import Article from '#models/article'

export default class LastArticleTool extends Tool {
  name = 'last_article'
  title = 'Last Article'
  description = 'Retrieve the most recently created article from the database'

  async handle({ response }: ToolContext) {
    const article = await Article.query().orderBy('id', 'desc').first()

    if (!article) {
      return response.text('No articles found in the database.')
    }

    return response.text(`Title: ${article.title}\n\nContent:\n${article.content}`)
  }
}
