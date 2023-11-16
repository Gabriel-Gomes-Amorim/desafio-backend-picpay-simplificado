import { MigrationInterface, QueryRunner } from "typeorm";

export class UserMigration1700167723514 implements MigrationInterface {
    name = 'UserMigration1700167723514'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "fullName" character varying NOT NULL, "cpfCnpj" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "type" character varying NOT NULL, "balance" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
