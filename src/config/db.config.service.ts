import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { AlbumEntity } from "src/album/entity/album.entity";
import { MusicEntity } from "src/music/entity/music.entity";
import { PlaylistEntity } from "src/playlist/entity/playlist.entity";
import { UserEntity } from "src/user/entity/user.entity";

@Injectable()
export class DBConfigService implements TypeOrmOptionsFactory {

    constructor(private configService: ConfigService) { }

    createTypeOrmOptions(): TypeOrmModuleOptions | Promise<TypeOrmModuleOptions> {
        return {
            type: 'postgres',
            entities: [UserEntity, MusicEntity, PlaylistEntity, AlbumEntity],
            url: "postgres://matbfgev:b1XE1dzyc1zHRLKOklIfjSJWm37Wxlz3@babar.db.elephantsql.com/matbfgev",
            synchronize: true,
        }
    }
}