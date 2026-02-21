import factory from '@adonisjs/lucid/factories'
import { UserFactory } from './user_factory.js'
import Article from '#models/article'

export const ArticleFactory = factory
  .define(Article, async ({ faker }) => {
    return {
      title: faker.lorem.sentence(),
      content: faker.lorem.paragraphs(3),
    }
  })
  .build()
