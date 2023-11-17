import { MigrationInterface, QueryRunner } from "typeorm";

export class UserTransactionMigratios1700254365086 implements MigrationInterface {
    name = 'UserTransactionMigratios1700254365086'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "transaction" RENAME COLUMN "payee" TO "payeeId"`);
        await queryRunner.query(`ALTER TABLE "transaction" DROP COLUMN "payeeId"`);
        await queryRunner.query(`ALTER TABLE "transaction" ADD "payeeId" uuid`);
        await queryRunner.query(`ALTER TABLE "transaction" ADD CONSTRAINT "FK_70815d35b9b0fe366cc9014cb9e" FOREIGN KEY ("payeeId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "transaction" DROP CONSTRAINT "FK_70815d35b9b0fe366cc9014cb9e"`);
        await queryRunner.query(`ALTER TABLE "transaction" DROP COLUMN "payeeId"`);
        await queryRunner.query(`ALTER TABLE "transaction" ADD "payeeId" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "transaction" RENAME COLUMN "payeeId" TO "payee"`);
    }

}
