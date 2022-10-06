import {
      Entity,
      PrimaryGeneratedColumn,
      Column,
      BaseEntity,
      OneToMany
} from "typeorm";

import { Book } from "./Book";



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

      @OneToMany(() => Book, (book) => book.user)
      book: Book[];

}



