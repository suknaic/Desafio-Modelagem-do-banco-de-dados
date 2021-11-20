import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { Game } from "../../games/entities/Game";

@Entity("orders")
export class Orders {
  @PrimaryColumn()
  id: string;

  @Column()
  order: string;

  @ManyToOne(() => Game, (game) => game.orders)
  games: Game[];

  @Column()
  quantity: number;

  @Column()
  unitPrice: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
