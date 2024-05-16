import { ShoesService } from "./core/shoesService/shoes-service.service";

const shoesService = new ShoesService()

addEventListener('message', async ({data}) => {
  console.log(data);
  if(data.type == "getAll"){
    const result = await shoesService.getAll();
    postMessage(result);
  }
  if(data.type == "getOne"){
    const result = await shoesService.getOne(data.id);
    postMessage(result)
  }
});
