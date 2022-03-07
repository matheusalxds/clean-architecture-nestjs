import { IBackup, IMemoryDb, newDb } from 'pg-mem'

export const PgTestHelper = {
  db: null as unknown as IMemoryDb,
  connection: null as any,
  backup: null as unknown as IBackup,
  async connect (entities?: any[]) {
    this.db = newDb()
    this.db.public.registerFunction({ implementation: () => 'test', name: 'current_database' })
    this.connection = await this.db.adapters.createTypeormConnection({
      type: 'postgres',
      entities: entities ?? ['src/infra/db/pg/entities/index.ts']
    })
    await this.sync()
    this.backup = this.db.backup()
  },
  restore () {
    this.backup.restore()
  },
  async disconnect () {
    await this.connection.close()
  },
  async sync () {
    await this.connection.synchronize()
  }
}
