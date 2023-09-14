import baseAxios from "@/infrastructures/config/api.config";
import { IResponseArticles } from "@/domain/entities/news.entity";
import { INewsUseCase } from "@/domain/interfaces/news.usecase";

export class NewsUseCase implements INewsUseCase {

  async getNews(): Promise<IResponseArticles> {
    try {
    const api = await baseAxios.get('top-headlines?country=id')
    return api.data  
    } catch (error) {
      throw error
    }
  }
}