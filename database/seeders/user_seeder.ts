import { BaseSeeder } from '@adonisjs/lucid/seeders'
import User from '#models/user'
import { UserFactory } from '#database/factories/user_factory'

export default class extends BaseSeeder {
  async run() {
    await User.create({
      fullName: 'John Doe',
      email: 'admin@adonisjs.com',
      password: 'secret',
    })

    await UserFactory.createMany(40)
  }
}
