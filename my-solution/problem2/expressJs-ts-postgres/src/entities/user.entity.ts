import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
} from "typeorm";
import { Length, IsNotEmpty, IsString } from "class-validator";
import bcrypt from "bcryptjs";

@Entity("user")
@Unique(["username"])
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsString()
  @Length(4, 20)
  username: string;

  @Column()
  @IsString()
  @Length(4, 100)
  password: string;

  @Column()
  @IsNotEmpty()
  role: string;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  updatedAt: Date;

  hashPassword() {
    this.password = bcrypt.hashSync(this.password, 8);
  }

  checkIfUnencryptedPasswordIsValid(unencryptedPassword: string) {
    return bcrypt.compareSync(unencryptedPassword, this.password);
  }
}
