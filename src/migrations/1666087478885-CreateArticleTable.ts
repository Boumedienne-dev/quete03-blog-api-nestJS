import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateArticleTable1666087478885 implements MigrationInterface {
    name = 'CreateArticleTable1666087478885'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`article\` (\`id\` int NOT NULL AUTO_INCREMENT, \`title\` varchar(150) NOT NULL, \`context\` varchar(255) NOT NULL, \`author\` varchar(255) NOT NULL, \`creationDate\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`article\``);
    }

}
