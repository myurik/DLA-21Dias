# Dia 19 — Recursão: Fatura de Cartão com Parcelas Aninhadas

## 🎯 Desafios do dia
- [ ] Desafio 1: Fatura de cartão de crédito com parcelas e sub-parcelas — Usando **recursão**, calcular o valor total de uma fatura onde cada compra pode ter parcelas, e cada parcela pode ter outras sub-parcelas (compras "dentro" de compras). A estrutura de dados (array de objetos, com um campo `parcelas` que pode se repetir dentro de si mesmo) já vem pronta em JSON pra percorrer.

## 💭 Raciocínio / Anotações
- Esse é o primeiro contato com **recursão** de verdade — uma função que chama a si mesma pra resolver um problema que se repete "dentro de si mesmo" em camadas (fatura → compra → parcela → sub-parcela → ...).
- A estrutura de dados é bem diferente das anteriores: não é mais array simples, fila, pilha ou lista encadeada — é um **array de objetos aninhados**, onde cada item pode (ou não) ter um campo `parcelas` que é, ele mesmo, outro array do mesmo formato.
- O raciocínio recursivo básico: pra cada item da fatura, somo o `valor` dele. Se esse item tiver `parcelas`, preciso somar o valor de cada uma delas também — e cada parcela pode ter suas próprias `parcelas`, então a mesma lógica de "somar e verificar se tem mais parcelas" se repete indefinidamente até não sobrar mais nada pra somar.
- Isso pede uma função que recebe um array de itens, soma o `valor` de cada um, e — se o item tiver `parcelas` — chama a si mesma passando esse array de `parcelas`, somando o resultado disso também.
- O **caso base** (quando a recursão para) é quando um item não tem mais `parcelas` (ou o array está vazio) — nesse ponto não tem mais nada a somar recursivamente, só o valor daquele item mesmo.

## 📚 O que aprendi / posso aprender
- A ideia central de recursão: uma função resolver um problema chamando uma versão menor de si mesma, até chegar num caso base que não precisa mais chamar a função de novo.
- Perceber a diferença entre percorrer uma estrutura "plana" (como os arrays e filas de dias anteriores, com um `for`/`while` simples) e uma estrutura "em camadas" (como essa fatura), onde a profundidade não é fixa — pode ter parcela dentro de parcela dentro de parcela, um número desconhecido de vezes. Um loop comum não dá conta disso sozinho; recursão sim.
- O próprio material menciona que esse padrão aparece em apps reais (Nubank, PicPay, Mercado Pago) pra somar valores de forma dinâmica — é uma boa conexão entre o conceito abstrato e um uso prático que já vejo no dia a dia.
- Reforçar o cuidado com o **caso base**: sem ele, a recursão nunca para (loop infinito, só que via chamadas de função, que geralmente estoura a pilha de chamadas — "Maximum call stack size exceeded").

## 🚧 Dificuldades
- Recursão é um jeito de pensar bem diferente dos loops que venho usando até agora — ainda preciso treinar o "raciocínio recursivo" (confiar que a chamada menor vai funcionar, sem tentar visualizar todas as camadas de uma vez).
- Vou ter que ter cuidado com o campo `parcelas` não existir em todo item (ex: o "Livro" do JSON de exemplo não tem parcelas) — preciso checar isso antes de tentar percorrer recursivamente, senão dá erro tentando iterar algo que não existe.
- Ainda não decidi se a função recursiva recebe direto o array da fatura, ou se recebe um item por vez — vou pensar melhor na assinatura da função antes de começar a codar.

## 🔗 Link do PlayCode
- https://playcode.io/...

