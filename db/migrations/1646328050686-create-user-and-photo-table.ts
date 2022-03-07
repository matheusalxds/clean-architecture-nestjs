import {MigrationInterface, QueryRunner} from "typeorm";

export class createUserAndPhotoTable1646328050686 implements MigrationInterface {
    name = 'createUserAndPhotoTable1646328050686'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "phone" ("id" SERIAL NOT NULL, "number" integer, "userId" integer, CONSTRAINT "PK_f35e6ee6c1232ce6462505c2b25" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "phone" ADD CONSTRAINT "FK_260d7031e6bd9ed4fbcd2dd3ad6" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "phone" DROP CONSTRAINT "FK_260d7031e6bd9ed4fbcd2dd3ad6"`);
        await queryRunner.query(`DROP TABLE "phone"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
