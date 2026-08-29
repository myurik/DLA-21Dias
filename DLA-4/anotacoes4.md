# Dia 4 — Estruturas Condicionais (if/else, ternário e switch)

## 🎯 Desafios do dia
- [✅] Desafio 1: Renovação da CNH — Definir o tempo de vencimento da carteira com base em regras de idade (1ª via = 1 ano; <50 anos = 10 anos; 50–69 anos = 5 anos; ≥70 anos = 3 anos), usando variáveis e condicionais.
- [✅] Desafio 2: Performance de aluno — Classificar a performance de um aluno a partir da nota (Insuficiente, Regular, Bom, Muito bom, Excelente) com uma cadeia de `if/else if`.
- [✅] Desafio 3: Transforme o código em condição ternária — Reescrever um `if/else` simples de aprovado/reprovado (nota ≥ 70) usando operador ternário.
- [✅] Desafio 4: Condição ternária com expressão mais complexa — Determinar se um cliente pode comprar combinando duas condições (conta ativa **e** saldo > 500) em uma única ternária.
- [✅] Desafio 5: Cancela de estacionamento — Usar `switch` para imprimir uma mensagem de acordo com o estado da cancela ("Aberta", "Fechada", "Manutenção").
- [✅] Desafio 6: Sistema de PDV (ponto de venda) — Usar `switch` para aplicar desconto conforme o tipo do produto (Alimentos 5%, Eletrônicos 10%, Roupas 20%, Livros 50%, sem desconto se não estiver na lista) e calcular o valor final.

## 💭 Raciocínio / Anotações
- O dia caminha em degraus: primeiro `if/else` "puro" (CNH, performance do aluno), depois o mesmo raciocínio reescrito como operador ternário (desafios 3 e 4), e por fim `switch` para os casos de valor fixo comparado a poucas opções (cancela, PDV).
- Nos desafios 1 e 2 a ordem das comparações define o resultado — é o mesmo cuidado do IMC do Dia 3, só que agora com mais faixas.
- O ternário funciona bem quando a decisão é binária (aprovado/reprovado); já o `switch` encaixa melhor quando há várias opções discretas (estado da cancela, tipo do produto) em vez de faixas numéricas.

## 📚 O que aprendi / posso aprender
- Perceber a diferença entre usar `if/else if` (faixas de valores), `? :` ternário (decisão binária simples) e `switch` (comparação de um valor contra várias opções fixas) — e quando cada um deixa o código mais legível.
- No desafio 4, a lógica de combinar duas condições (`&&`) dentro de uma ternária mostra como dar mais "poder" a uma linha só sem perder clareza.
- No `switch`, reforçar a importância do `break` em cada `case` (e do `default` para cobrir o que não está na lista) pra não "vazar" para o próximo caso.

## 🚧 Dificuldades
- Montar a ordem certa das condições no desafio da CNH e da performance do aluno sem deixar faixas se sobrepondo ou "buracos" sem cobertura.
- Converter uma condição composta (conta ativa **e** saldo > 500) para ternária sem perder legibilidade — fica tentador simplificar demais e esquecer uma das partes.
- No `switch` do PDV, lembrar de tratar o `default` (produto fora da lista) sem desconto, e não deixar o `case` "vazar" por falta de `break`.

## 🔗 Link do PlayCode
- https://playcode.io/...