import { Injectable } from '@angular/core';
import { Shoe } from '../models/user.protocol';


@Injectable({
  providedIn: 'root'
})
export class DataBaseShoesService {

  private readonly shoes: Shoe[] = [
    {
      name: "adidas breaknet",
      price: 50,
      image: "https://imgs.search.brave.com/at9Zj22V9Ec1Wbs-anFL9kQtTQHJW9Z0lGdy9RhZ-Rg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuY2x1YmUubmV0/c2hvZXMuY29tLmJy/L3Byb2R1dG9zL3Rl/bmlzLWFkaWRhcy1i/cmVha25ldC1tYXNj/dWxpbm8vMjYvTlFR/LTQzNzgtMzI2L05R/US00Mzc4LTMyNl96/b29tMS5qcGc_dHM9/MTcwNTY2OTk5NyZp/bXM9MzI2eA",
      id: 121323
    },
    {
      name: "nike spacialy",
      price: 75,
      image: "https://imgs.search.brave.com/X2JECbI1SdrYEf12ACZ_f7rx8_zVfSvkaF11IHcrJg8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMubG9qYW5iYS5j/b20vcHJvZHV0b3Mv/dGVuaXMtbmJhLW5p/a2UtamEtbWFzY3Vs/aW5vLzU4L0pEOC0y/NzgxLTE1OC9KRDgt/Mjc4MS0xNThfem9v/bTEuanBnP3RzPTE3/MTIyNTIxMjAmaW1z/PTMyNng",
      id: 7253,
    },
    {
      name: "mizuno marirne",
      price: 135,
      image: "https://imgs.search.brave.com/hazFmJmwhcFnYqlgSGTxXNdVLBvzhw0urM9nRDlNn0Y/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuY2x1YmUubmV0/c2hvZXMuY29tLmJy/L3Byb2R1dG9zL3Rl/bmlzLW1penVuby1z/cGFjZS0zLW1hc2N1/bGluby80MC8yRlUt/NzM3OC0wNDAvMkZV/LTczNzgtMDQwX3pv/b20xLmpwZz90cz0x/NzA2MTEwNjI5Jmlt/cz0zMjZ4",
      id: 9362
    },
    {
      name: "olympicus spartacus",
      price: 200,
      image: "https://imgs.search.brave.com/o2TArff8ShN2WuRu-HzcsufPkpwg130myksSb3Mep5E/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuY2x1YmUubmV0/c2hvZXMuY29tLmJy/L3Byb2R1dG9zL3Rl/bmlzLW9seW1waWt1/cy12b2x0LW1hc2N1/bGluby8wNi8ySTIt/NTgyMS0wMDYvMkky/LTU4MjEtMDA2X3pv/b20xLmpwZz90cz0x/Njk1NjEyNDUxJmlt/cz0zMjZ4",
      id: 3825
    },
    {
      name: "nike super fast",
      price: 260,
      image: "https://imgs.search.brave.com/GU5sG0f8TA-s1DbS9nf1zH_I7XlPCatG_cb7B6vop7E/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9kODdu/OW80NWtwaHB5LmNs/b3VkZnJvbnQubmV0/L0N1c3RvbS9Db250/ZW50L1Byb2R1Y3Rz/LzgzLzUxLzgzNTEx/X3RlbmlzLW5pa2Ut/YWlyLW1heC1leGNl/ZS1lc3BvcnRpdm8t/bWFzY3VsaW5vLXBy/ZXRvLTUxNDUzODdf/bTFfNjM3Njc0MDk2/OTIyMTk1MDg1Lmpw/Zw",
      id: 9256
    },
    {
      name: "unde amour blood",
      price: 500,
      image: "https://imgs.search.brave.com/dBIwH_53iArI_5TyQ58Ioh_vuQ2h83V3T1bUhAip8GA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMubG9qYW5iYS5j/b20vcHJvZHV0b3Mv/dGVuaXMtdW5kZXIt/YXJtb3VyLWJhc3F1/ZXRlLXNwYXduLTMt/bWFzY3VsaW5vLzU2/LzM5Vy0zMTI3LTA1/Ni8zOVctMzEyNy0w/NTZfem9vbTEuanBn/P3RzPTE2OTU3MDA1/MjkmaW1zPTMyNng",
      id: 9161
    },
    {
      name: "nike super black",
      price: 140,
      image: "https://imgs.search.brave.com/bUxH4WwFACPKiixA9_L-WdxdnddXlYFPaKm3Fc9Ypxk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9kODdu/OW80NWtwaHB5LmNs/b3VkZnJvbnQubmV0/L0N1c3RvbS9Db250/ZW50L1Byb2R1Y3Rz/LzI1LzgwLzI1ODA0/MjdfdGVuaXMtbmlr/ZS1jb3VydC1sZWdh/Y3ktc3RyZWV0LW1h/c2N1bGluby1icmFu/Y28tNTE3MDQ5OV9t/MV82Mzc3MTYzODE5/MTI0NDAyNzcuanBn",
      id: 3547
    },
    {
      name: "olympicus marrine force",
      price: 340,
      image: "https://imgs.search.brave.com/6ufqtSdjh47Kt3AZsXbI3trJxLEJY_jWtOfLYNLi53s/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/dm5kYS5jb20uYnIv/dmVsb2NpdGEvMjAy/My8wOS8yOS8xNF8x/Nl8zM185N190ZW5p/cy11LW9seW1waWt1/cy1jb3JyZS0zLTQz/NTc4MjAzLXB0b211/dC0xLmpwZz92PTE2/OTYwMDc3OTM",
      id: 2414
    },
  ];

  constructor() { }

  findOne(id: number): Promise<Shoe | null> {
    return Promise.resolve(this.shoes.filter(el => el.id === id)[0])
  }

  findMany(): Promise<Shoe[]> {
    return new Promise((resolve,reject)=>{
      const timeoutId = setTimeout(() => {
        clearTimeout(timeoutId)
        resolve(this.shoes)
      }, 3000);
    });
  }

  insertOne(shoe:Shoe): Promise<Shoe>{
    this.shoes.push(shoe);
    return Promise.resolve(shoe);
  }
}
