export class PlaylistDto {
    id: number;
    name: string;
    isPrivate: boolean;
    photo_path:string;

    toDto(): PlaylistDto {
        const { id, name, photo_path, isPrivate } = this;

        return <PlaylistDto>{ id, name, photo_path ,isPrivate};
    }
}