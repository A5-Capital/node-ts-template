import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IUser } from "../interfaces";

@Entity()
export class User implements IUser {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 255 })
  name: string;

  @Column({ type: "varchar", length: 255 })
  email: string;

  @Column({ type: "varchar", length: 255 })
  password: string;

  @Column({ type: "datetime" })
  createdAt: Date;

  @Column({ type: "datetime" })
  updatedAt: Date;

  @Column({ type: "datetime" })
  deletedAt: Date;

  @Column({ type: "boolean" })
  isDeleted: boolean;
}
