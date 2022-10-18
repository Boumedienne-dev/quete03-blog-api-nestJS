import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Article } from './Article.entity';

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(Article) private articlesRepository: Repository<Article>,
  ) {}

  async getArticles(): Promise<Article[]> {
    return await this.articlesRepository.find();
  }

  async getArticle(id: number): Promise<Article[]> {
    return await this.articlesRepository.find({
      // Properties to return. We don't want the password property.
      select: ['title', 'context', 'author', 'date'],
      where: [{ id: id }],
    });
  }

  saveArticle(article: Article): Promise<Article> {
    return this.articlesRepository.save(article);
  }

  deleteArticle(article: Article): void {
    this.articlesRepository.delete(article);
  }
}
