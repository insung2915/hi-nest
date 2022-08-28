import { Injectable } from '@nestjs/common';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }

  getOne(id: string): Movie {
    return this.movies.find((movie) => movie.id === +id);
  }
  //+id 도 문자형을 숫자형으로 바꿀 수 있다
  deleteOne(id: string): boolean {
    this.movies.filter((movie) => movie.id !== +id);
    return true;
  }
}
//database part
