import {
      Entity,
      PrimaryGeneratedColumn,
      Column,
      BaseEntity,
      ManyToOne
} from "typeorm";

import { User } from "./User";


@Entity()
export class Book extends BaseEntity {

      @PrimaryGeneratedColumn()
      id: number;

      @Column("varchar")
      name: string;

      @Column("varchar")
      author: string;

      @Column("boolean", { default: false })
      completed: false;

      @ManyToOne(() => User, (user) => user.book)
      user: User | number;
}

