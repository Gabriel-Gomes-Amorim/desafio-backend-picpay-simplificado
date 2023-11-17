import { MigrationInterface, QueryRunner } from "typeorm";

export class UserMigration21700231821197 implements MigrationInterface {
    name = 'UserMigration21700231821197'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "transaction" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "value" integer NOT NULL, "payee" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "payerId" uuid, CONSTRAINT "PK_89eadb93a89810556e1cbcd6ab9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "transaction" ADD CONSTRAINT "FK_e32e0d2862e47419a5bb7370787" FOREIGN KEY ("payerId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "transaction" DROP CONSTRAINT "FK_e32e0d2862e47419a5bb7370787"`);
        await queryRunner.query(`DROP TABLE "transaction"`);
    }

}
