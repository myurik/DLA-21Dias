# Dia 5 — Estruturas de Repetição (for e while)

## 🎯 Desafios do dia
- [✅] Desafio 1: Rendimento de aplicação financeira — Com um loop `for`, calcular e mostrar no console o valor de um investimento de R$ 1.000 rendendo 12% ao ano, ano a ano, ao longo de 10 anos.
- [✅] Desafio 2: Contagem regressiva para lançamento de foguete — Fazer uma contagem regressiva de 10 até 0, exibindo "Atenção!" junto à contagem nos últimos 3 segundos, e ao final mostrar "Lançamento do foguete!".
- [✅] Desafio 3: Cálculo de juros — Usando um loop `while`, calcular quantos anos são necessários para um investimento dobrar de valor a uma taxa de 5% ao ano.
- [✅] Desafio 4: Compra parcelada — Escrever um código que imprime o valor de cada parcela (produto dividido em 12x sem juros) e o valor restante a pagar a cada parcela.

## 💭 Raciocínio / Anotações
- O dia inteiro gira em torno de repetição: os desafios 1, 2 e 4 têm um número fixo de repetições (10 anos, 10 segundos, 12 parcelas) — combinam bem com `for`. Já o desafio 3 não sabe de antemão quantas repetições vai precisar (depende de quando o valor dobra), por isso pede `while`.
- No desafio 1, o valor de cada ano depende do valor do ano anterior (juros compostos: `saldo = saldo * 1.12`), então a variável precisa ser atualizada dentro do loop, não recalculada do zero a cada iteração.
- No desafio 2, a contagem é decrescente (`for` andando "para trás", de 10 até 0), com uma condição extra (`if`) dentro do loop pra decidir quando mostrar "Atenção!".
- No desafio 3, a condição de parada do `while` é `saldo < valorInicial * 2` — o loop continua enquanto o valor não tiver dobrado.

## 📚 O que aprendi / posso aprender
- A diferença prática entre `for` (quando já sei quantas vezes preciso repetir) e `while` (quando a repetição depende de uma condição que só se resolve durante a execução).
- Reforçar juros compostos vs. simples: no desafio 1 o rendimento incide sobre o saldo acumulado, não sobre o valor inicial fixo — cada ano "carrega" o crescimento do ano anterior.
- Perceber como contadores decrescentes (`for` de trás pra frente) resolvem bem problemas de contagem regressiva.
- No desafio 4, ver que "parcelar sem juros" é só uma divisão simples (`valorTotal / 12`), sem precisar de loop pra calcular o valor de cada parcela — mas o loop ajuda a exibir e ir abatendo o valor restante a cada parcela "paga".

## 🚧 Dificuldades
- Cuidado pra não confundir o índice do loop (`i`) com o "ano" ou "segundo" que está sendo exibido — principalmente na contagem regressiva, onde é fácil inverter a lógica de crescente/decrescente.
- No cálculo de juros com `while`, esquecer de atualizar a variável de controle dentro do loop gera loop infinito (uma armadilha clássica de quem está começando com `while`).
- Definir corretamente a condição dos "últimos 3 segundos" no desafio do foguete (ex: `contador <= 3`) sem errar por um número (o clássico erro de off-by-one).

## 🔗 Link do PlayCode
- https://playcode.io/...