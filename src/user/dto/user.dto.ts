import { PlaylistDto } from "../../playlist/dto/playlist.dto";
import { UserEntity } from "../entity/user.entity";

export class UserDto {
    id: number;
    username: string;
    email: string;
    photo_path:string;
    playlists: PlaylistDto[];


    static toDto(userEntity: UserEntity): UserDto {
        const { id, username, email, photo_path } = userEntity;

        const userDto = new UserDto();
        userDto.id = id;
        userDto.username = username;
        userDto.email = email;
        userDto.photo_path = photo_path
        userDto.playlists = userEntity.playlists.map((playlistEntity) => {
            const playlistDto = new PlaylistDto();
            playlistDto.id = playlistEntity.id;
            playlistDto.name = playlistEntity.name;
            playlistDto.isPrivate = playlistEntity.isPrivate;
            playlistDto.photo_path= playlistEntity.photo_path;
            return playlistDto;
        });

        return userDto;
    }
}