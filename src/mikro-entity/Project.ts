import { Entity, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { User } from './User';

@Entity()
export class Project {
    @PrimaryKey({ unsigned: false })
    id!: number;

    @Property({ fieldName: 'projectName', length: 255 })
    projectName!: string;

    @Property({ fieldName: 'projectDescription', length: 255 })
    projectDescription!: string;

    @Property({ fieldName: 'projectStartDate', length: 0 })
    projectStartDate!: Date;

    @Property({ fieldName: 'projectEndDate', length: 0 })
    projectEndDate!: Date;

    @ManyToOne({
        entity: () => User,
        fieldName: 'userId',
        nullable: true,
        index: 'FK_7c4b0d3b77eaf26f8b4da879e63',
    })
    user?: User;
}
