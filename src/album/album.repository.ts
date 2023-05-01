import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { AlbumEntity } from "./entity/album.entity";

@Injectable()
export class AlbumRepository extends Repository<AlbumEntity>{

    constructor(private dataSource: DataSource) {
        super(AlbumEntity, dataSource.createEntityManager());
    }

    findByName(name: string): Promise<AlbumEntity | undefined> {
        return this.findOne({ where: { name } });
    }

}