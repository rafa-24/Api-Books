import {
      Entity,
      PrimaryGeneratedColumn,
      Column,
      BaseEntity
} from "typeorm";

@Entity()
export class User extends BaseEntity {

      @PrimaryGeneratedColumn()
      id: number;

      @Column("varchar", { nullable: true })
      firstName: string;

      @Column("varchar")
      lastName: string;

      @Column("varchar")
      email: string;

      @Column("varchar")
      password: string;

}

