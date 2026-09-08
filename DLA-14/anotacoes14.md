# Dia 14 — Super Desafio: Filas Múltiplas (Supermercado com Vários Caixas)

## 🎯 Desafios do dia
- [ ] Super Desafio: Controlar filas de vários caixas de supermercado — Voltar ao desafio do Dia 8 (fila de um único caixa) e expandir pra um supermercado com **10 caixas**, e consequentemente **10 filas** simultâneas, adaptando as funções pra essa nova realidade.

## 💭 Raciocínio / Anotações
- Esse é basicamente o "vários caixas" que eu já tinha deixado no radar lá no Dia 8, quando resolvi só a versão de um caixa único — agora chegou a hora de expandir de verdade.
- A estrutura de dados muda: em vez de um array só (`filaCaixa`), preciso de algo que agrupe 10 filas. Duas opções que fazem sentido: um array de arrays (`filas[0]` a `filas[9]`) ou um objeto com uma chave por caixa (`{ caixa1: [], caixa2: [], ... }`).
- As funções antigas (`entrarNaFila`, `atenderCliente`, `verProximoCliente`, `tamanhoDaFila`, `filaVazia`) provavelmente só precisam ganhar um parâmetro a mais: **qual caixa** está sendo afetado.
- Fica em aberto (o enunciado não fala nada sobre isso) se o cliente escolhe o caixa, ou se existe alguma lógica pra decidir automaticamente qual fila ele entra (ex: a fila mais curta) — vou considerar essa segunda opção como um "extra" caso dê tempo, mas o básico é só ter as 10 filas funcionando de forma independente.

## 📚 O que aprendi / posso aprender
- Perceber como a mesma lógica de fila (Dia 8) se generaliza: em vez de reescrever tudo do zero, é só trocar "uma variável de fila" por "uma coleção de filas" e passar o índice/chave certo pra cada função.
- Reforçar a escolha entre array de arrays vs. objeto pra agrupar dados relacionados — cada um tem sua vantagem (array é mais direto pra percorrer todos os caixas num loop; objeto deixa os nomes mais legíveis).
- Pensar em "qual fila escolher" como um problema à parte da estrutura de dados em si — é uma decisão de regra de negócio, não uma limitação técnica.

## 🚧 Dificuldades
- Ainda não decidi entre array de arrays ou objeto pra representar os 10 caixas — tenho a sensação de que array vai ser mais fácil pra rodar um loop tipo "mostra o tamanho de todas as filas de uma vez".
- Vou precisar simular clientes chegando em caixas diferentes, então preciso pensar num jeito de distribuir esses clientes sem ficar chamando a função manualmente 10 vezes pra cada caixa.
- Se eu decidir implementar a parte de "escolher a fila mais curta", isso significa percorrer as 10 filas e comparar os tamanhos antes de decidir onde inserir — é mais complexidade do que o desafio pede diretamente, então vou avaliar se vale a pena ou se fico só na versão mais simples primeiro.

## 🔗 Link do PlayCode
- https://playcode.io/...