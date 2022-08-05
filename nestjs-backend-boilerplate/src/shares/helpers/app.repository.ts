import { InsertResult, ObjectLiteral, Repository } from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

export class AppRepository<Entity extends ObjectLiteral> extends Repository<Entity> {
  insertIgnore(entity: QueryDeepPartialEntity<Entity> | QueryDeepPartialEntity<Entity>[]): Promise<InsertResult> {
    return this.createQueryBuilder()
      .insert()
      .into(this.metadata.target as any)
      .values(entity)
      .orIgnore()
      .execute();
  }

  insertOnDuplicate(
    entity: QueryDeepPartialEntity<Entity> | QueryDeepPartialEntity<Entity>[],
    statement?: {
      columns?: string[];
      overwrite?: string[];
      conflict_target?: string | string[];
    },
  ): Promise<InsertResult> {
    return this.createQueryBuilder()
      .insert()
      .into(this.metadata.target as any)
      .values(entity)
      .orUpdate(statement)
      .execute();
  }

  replaceMulti(entity: QueryDeepPartialEntity<Entity> | QueryDeepPartialEntity<Entity>[]): Promise<any> {
    const [query, queryParams] = this.createQueryBuilder()
      .insert()
      .into(this.metadata.target as any)
      .values(entity)
      .getQueryAndParameters();

    const newQuery = query.replace('INSERT INTO', 'REPLACE INTO');
    return this.manager.query(newQuery, queryParams);
  }
}
