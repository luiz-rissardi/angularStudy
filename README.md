
O repositorio #AngularStudy tem como objetivo estudar as novas ferramnetas e o novo
jeito de se contruir aplicativos em angukar na versão 17

oque nos vemos aqui nesse repositorio de estudo
 - performace
    - uso de threads e muito mais
    - uso de carregamento atrasado @defer
    - uso de componentes indempendetes
    - uso de novas releses como acessar um dado na url da rota com @Input
    - uso de signals


PERFORMACE
-  algumas técnicas foram aprendidasa aqui para melhorar a perfomace do site
 dentre elas o carregamento atrasado de css ou de libs externas como o bootstarp
 com 
 "<link rel="preload" as="style" onload="this.onload=null;this.rel='stylesheet'" href="....">"
 aqui ele coloca o rel como preload e irá recaregar esse link de forma assincrona quando carregado ele vai pater ali no onload e vai troca de preload para stylesheet para o js interpretar ele agora

- imagens que impactaream muito o desenpenho foi usado o atributo loading="lazy" para o seu carregamento ser lento e em segundo plano, e em layouts como mobile foi evitado o uso ecessivo de imagens

- utilização de web workers para tarefas que demandam muito tempo, por exemplo buscar todas as 
shoes do banco de dados, foi usado a função do banco de dados em um trhead que quando ela carrega dos shoes ela retorna pra thread principal

- uso do @defer para atrasar o carregamento desses modulos que mostram na tela os shoes, atrasam até ter os shoes de volta da thread


COMPONENTES INDEMPEDENTES

usei para aprender e a usar eles, um componente indempendente usa os modulos que necessitam 

