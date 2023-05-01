import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { userInfo } from "os";
import { AlbumEntity } from "src/album/entity/album.entity";
import { MusicEntity } from "src/music/entity/music.entity";
import { PlaylistEntity } from "src/playlist/entity/playlist.entity";
import { UserEntity } from "src/user/entity/user.entity";

@Injectable()
export class DBConfigService implements TypeOrmOptionsFactory{

    constructor(private configService:ConfigService){}

    createTypeOrmOptions(connectionName?: string): TypeOrmModuleOptions | Promise<TypeOrmModuleOptions> {
        return {
                entities: [UserEntity,MusicEntity,PlaylistEntity,AlbumEntity],
                connectString: this.configService.get<string>('connect'),
        }
    }
}