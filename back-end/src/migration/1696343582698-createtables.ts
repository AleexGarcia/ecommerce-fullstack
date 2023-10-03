import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class Createtables1696343582698 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "product",
        columns: [
          {
            name: "productID",
            type: "uuid",
            isPrimary: true,
            isNullable: false,
          },
          {
            name: "category",
            type: "enum",
            enum: [
              "camisetas",
              "bolsas",
              "calçados",
              "calças",
              "casacos",
              "óculos",
            ],
            isNullable: false,
          },
          {
            name: "name",
            type: "character varying",
            isNullable: false,
          },
          {
            name: "description",
            type: "character varying",
            isNullable: false,
          },
          {
            name: "price",
            type: "real",
            isNullable: false,
          },
        ],
      })
    );

    await queryRunner.createTable(
      new Table({
        name: "variant",
        columns: [
          {
            name: "variantID",
            type: "uuid",
            isPrimary: true,
            isNullable: false,
          },
          {
            name: "color",
            type: "character varying",
            isNullable: false,
          },
          {
            name: "url",
            type: "character varying",
            isNullable: false,
          },
          {
            name: "alt",
            type: "character varying",
            isNullable: false,
          },
          {
            name: "productID",
            type: "uuid",
          },
        ],
      })
    );

    await queryRunner.createForeignKey(
      "variant",
      new TableForeignKey({
        columnNames: ["productID"],
        referencedColumnNames: ["productID"],
        referencedTableName: "product",
      })
    );

    await queryRunner.createTable(
      new Table({
        name: "size",
        columns: [
          {
            name: "sizeID",
            type: "uuid",
            isPrimary: true,
            isNullable: false,
          },
          {
            name: "size",
            type: "character varying",
            isNullable: false,
          },
          {
            name: "variantID",
            type: "uuid",
          },
          {
            name: "quantityID",
            type: "uuid",
          },
        ],
      })
    );

    await queryRunner.createTable(
      new Table({
        name: "quantity",
        columns: [
          {
            name: "quantityID",
            type: "uuid",
            isPrimary: true,
            isNullable: false,
          },
          {
            name: "value",
            type: "integer",
          },
        ],
      })
    );

    await queryRunner.createForeignKey(
      "size",
      new TableForeignKey({
        columnNames: ["quantityID"],
        referencedColumnNames: ["quantityID"],
        referencedTableName: "quantity",
      })
    );

    await queryRunner.createTable(
      new Table({
        name: "user",
        columns: [
          {
            name: "userID",
            type: "uuid",
            isPrimary: true,
            isNullable: false,
          },
          {
            name: "name",
            type: "character varying",
            isNullable: true,
          },
          {
            name: "email",
            type: "character varying",
            isNullable: false,
          },
          {
            name: "password",
            type: "character varying",
            isNullable: false,
          },
          {
            name: "isAdmin",
            type: "boolean",
            isNullable: false,
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("product");
    await queryRunner.dropTable("variant");
    await queryRunner.dropTable("size");
    await queryRunner.dropTable("quantity");
  }
}
