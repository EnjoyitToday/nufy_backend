import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AlbumRepository } from './album.repository';
import { AlbumEntity } from './entity/album.entity';
import { CreateAlbumDTO } from './dto/createAlbumDTO';

@Injectable()
export class AlbumService {
    constructor(
        @InjectRepository(AlbumRepository)
        private albumRepository: AlbumRepository,
    ) { }

    async createAlbum(createAlbumDto: CreateAlbumDTO): Promise<AlbumEntity> {
        const albumExists = await this.albumRepository.findByName(createAlbumDto.name)

        if (albumExists) {
            throw new ConflictException("Já existe um album registrado com esse nome.")
        }

        const album = this.albumRepository.create({ name: createAlbumDto.name, pictureUrl: `/assets/album/${createAlbumDto.name}.svg` })

        return await this.albumRepository.save(album);
    }


}
