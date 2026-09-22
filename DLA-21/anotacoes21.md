# Dia 21 — Super Desafio Final: Simulador de Transações Pix

## 🎯 Desafios do dia
- [ ] Super Desafio: Simulador de transações Pix — Criar um sistema que simula transações Pix numa conta bancária, com regras específicas de limite. Estrutura inicial fornecida:
    ```javascript
    const conta = {
        saldo: 50000,
        limiteDiario: 10000,
        totalTransferidoHoje: 0,
        historicoTransacoes: [],
        totalPorChave: {} // Armazena total transferido por chave Pix
    };
    ```
    - [ ] 1. Usar a estrutura acima exatamente como fornecida.
    - [ ] 2. Implementar 2 operações Pix: **enviar** (recebendo `chavePix`, `valor` e `mensagem`) e **cancelar/reembolsar** (recebendo o `índice` da transação no histórico).
    - [ ] 3. Regra do limite diário: a conta tem um limite máximo de R$ 10.000/dia pra realizar Pix.
    - [ ] 4. Regra do "desbloqueio por chave": existe um total acumulado por chave Pix (`totalPorChave`), independente do tempo. Quando esse total pra uma chave específica **ultrapassa** o limite diário, aquela chave fica liberada pra receber transferências acima do limite diário normal — o novo "limite" pra ela passa a ser o total já transferido pra essa chave.

## 💭 Raciocínio / Anotações
- Esse é o "Super Desafio" de encerramento — reúne praticamente tudo do curso: objetos, arrays, funções, condicionais, e até um pouco do espírito do Super Desafio do Dia 7 (aquele de contas bancárias com limite compartilhado).
- A regra mais sutil (e a mais fácil de interpretar errado) é a do item 4: o limite diário (`limiteDiario`) é o padrão pra qualquer chave nova. Mas se uma chave específica **já recebeu**, ao longo do tempo (não só hoje), mais que R$ 10.000 no total, ela passa a ter um limite próprio — que não é mais fixo em 10.000, e sim **igual ao total já transferido pra ela**. Ou seja, quanto mais uma chave recebe, maior o "teto" dela fica.
- Isso significa que, antes de validar uma transferência, preciso checar **duas coisas**: (1) o limite diário geral da conta (`totalTransferidoHoje` vs `limiteDiario`) e (2) se a chave de destino já tem um `totalPorChave` maior que o limite diário — nesse caso, uso esse total como limite em vez do limite diário padrão.
- `historicoTransacoes` guardando cada transação (provavelmente um objeto com chavePix, valor, mensagem, talvez um tipo "enviado"/"cancelado") permite usar o índice como identificador pra cancelar — isso é bem parecido com o padrão de "achar pelo índice" que já usei antes (tipo no `deleteAt` de lista encadeada do Dia 15).
- Cancelar uma transação provavelmente precisa: (1) devolver o saldo, (2) reverter o `totalTransferidoHoje`, (3) reverter o `totalPorChave` daquela chave, e (4) de alguma forma marcar a transação como cancelada no histórico (ao invés de simplesmente apagar, pra manter o registro).

## 📚 O que aprendi / posso aprender
- Esse desafio final é uma boa demonstração de como uma regra de negócio "aparentemente simples" (limite diário) pode ganhar uma camada extra de complexidade (desbloqueio por chave) que muda completamente a lógica de validação — não basta comparar um número fixo, preciso calcular dinamicamente qual é o limite válido pra cada situação.
- Reforça a importância de definir bem a estrutura de cada transação no `historicoTransacoes` **antes** de codar as operações — já que tanto enviar quanto cancelar dependem dela.
- Uma boa síntese do curso inteiro: uso de objetos aninhados (Dia 16, 19), índices como identificadores (Dia 9, 15, 16), regras condicionais em camadas (Dia 7), e validação de limites (Dia 7 de novo) — tudo junto num problema só.

## 🚧 Dificuldades
- A regra do "desbloqueio por chave" ainda não ficou 100% clara pra mim numa primeira leitura — tive que reler mais de uma vez pra entender que o novo limite não é "infinito" depois de desbloqueado, e sim igual ao total já transferido (que só cresce, nunca diminui, mesmo que eu cancele uma transação? isso não ficou explícito no enunciado, vou ter que decidir uma interpretação).
- Pensar em como vou representar "cancelado" no histórico — apagar o item do array perde o registro, mas manter e só marcar como cancelado exige adicionar um campo extra tipo `status` em cada transação, que não estava no JSON original fornecido.
- Definir a ordem certa de validação antes de mandar um Pix: primeiro verifico se o saldo é suficiente, depois se o limite diário comporta, depois se a chave já está "desbloqueada" — a ordem dessas checagens importa pra não bloquear uma transferência que deveria passar (ou vice-versa).

## 🔗 Link do PlayCode
- https://playcode.io/...