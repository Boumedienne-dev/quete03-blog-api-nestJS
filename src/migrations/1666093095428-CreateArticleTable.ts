import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateArticleTable1666093095428 implements MigrationInterface {
    name = 'CreateArticleTable1666093095428'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`article\` CHANGE \`creationDate\` \`date\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`article\` DROP COLUMN \`date\``);
        await queryRunner.query(`ALTER TABLE \`article\` ADD \`date\` date NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`article\` DROP COLUMN \`date\``);
        await queryRunner.query(`ALTER TABLE \`article\` ADD \`date\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`article\` CHANGE \`date\` \`creationDate\` varchar(255) NOT NULL`);
    }

}
