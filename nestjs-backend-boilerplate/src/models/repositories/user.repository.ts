import { UserEntity } from 'src/models/entities/user.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(UserEntity)
export class UserRepository extends Repository<UserEntity> {
  async findUserByAccountId(accountId: number): Promise<UserEntity> {
    const user = await this.createQueryBuilder('users')
      .select('*')
      .innerJoin('accounts', 'accounts', 'accounts.ownerId = users.id')
      .where('accounts.id = :accountId', { accountId })
      .execute();
    if (user[0]) {
      return user[0];
    } else return null;
  }
}
