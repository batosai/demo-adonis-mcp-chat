import type { HttpContext } from '@adonisjs/core/http'
import { streamText, convertToModelMessages, stepCountIs } from 'ai'
import { createAnthropic } from '@ai-sdk/anthropic'
import { createMCPClient } from '@ai-sdk/mcp'
import env from '#start/env'
// import User from '#models/user'

export default class ChatController {
  async handle({ request }: HttpContext) {
    // const token = await User.accessTokens.create(auth.user!, ['*'], {
    //   name: 'Chat Token For MCP',
    //   expiresIn: '1 hour',
    // })
    const { messages } = request.only(['messages'])

    const anthropic = createAnthropic({ apiKey: env.get('AI_API_KEY') })

    const mcpClient = await createMCPClient({
      transport: {
        type: 'http',
        url: `${env.get('APP_URL')}/mcp`,
        // headers: { Authorization: `Bearer ${token.value!.release()}` },
      },
    })
    const tools = await mcpClient.tools()

    const result = streamText({
      model: anthropic(env.get('AI_MODEL')),
      tools,
      stopWhen: stepCountIs(5),
      messages: await convertToModelMessages(messages),
      // onFinish: async () => {
      //   await mcpClient.close()
      //   await User.accessTokens.delete(auth.user!, token.identifier)
      // },
    })

    return result.toUIMessageStreamResponse()
  }
}
