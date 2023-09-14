import { NewsUseCase } from "@/infrastructures/usecases/news.usecase"
import { useQuery } from "@tanstack/react-query"

const News = new NewsUseCase()

export const useGetNews = () => {
    return useQuery(['news'], News.getNews)
}