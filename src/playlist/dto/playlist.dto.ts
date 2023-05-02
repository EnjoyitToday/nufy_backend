export class PlaylistDto {
    id: number;
    name: string;
    isPrivate: boolean;

    toDto(): PlaylistDto {
        const { id, name, isPrivate } = this;

        return <PlaylistDto>{ id, name, isPrivate };
    }
}