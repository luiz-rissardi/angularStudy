import { ShoesService } from "./core/shoesService/shoes-service.service";

const shoesService = new ShoesService()

addEventListener('message', async ({data}) => {
  const result = await shoesService.getAll();
  postMessage(result);
});
