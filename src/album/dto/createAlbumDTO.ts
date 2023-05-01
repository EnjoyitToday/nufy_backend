import { IsNotEmpty } from "class-validator";

export class CreateAlbumDTO {
    @IsNotEmpty()
    name: string;
}