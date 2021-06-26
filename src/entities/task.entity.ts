import {
  BaseEntity,
  Column,
  CreateDateColumn, Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';

  @Entity('todo-list-table')
  export class Task extends BaseEntity {
    @PrimaryGeneratedColumn({ type: 'int', unsigned: true })
    id: number;

    @Column('varchar', { length: 64, nullable: true, name: 'task_name' })
    taskName: string;

    @Column('varchar', { length: 128, nullable: true, name: 'task_description' })
    taskDescription: string;

    @Column('tinyint', { width: 1, default: 1, name: 'status' })
    status: number;

    @CreateDateColumn({ type: 'timestamp', nullable: true, precision: 0, name: 'created_at', })
    createdAt: Date;

    @UpdateDateColumn({ type: "timestamp", nullable: true, precision: 0, name: 'updated_at', })
    updatedAt: Date;
  }