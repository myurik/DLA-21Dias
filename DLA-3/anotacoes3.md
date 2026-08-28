# Dia 3 — Operadores Matemáticos e Condicionais (if/else)

## 🎯 Desafios do dia
- [✅] Desafio 1: Vamos fazer contas! — Praticar os operadores matemáticos (soma, subtração, multiplicação, divisão, módulo e exponenciação) em situações do dia a dia (pontuação de jogo, horas trabalhadas, salários, fatura do cartão, idade, moedas de jogo, área de retângulo, valor a receber por horas trabalhadas, média de notas, conversão de metros para km).
- [✅] Desafio 2: Par ou Ímpar — Criar um código que determina se um número é par ou ímpar usando o operador de módulo (%).
- [✅] Desafio 3: Cálculo IMC — Calcular o IMC (peso ÷ altura²) e classificar o resultado em abaixo do peso, peso normal, sobrepeso ou obesidade.
- [✅] Desafio 4: Cálculo de distância de viagem e custo de combustível — A partir da distância da viagem e do preço do litro da gasolina, calcular quantos litros serão necessários (carro faz 12 km/l) e o custo total do abastecimento.

## 💭 Raciocínio / Anotações
- Revisão dos operadores aritméticos do JS (`+`, `-`, `*`, `/`, `%`, `**`) aplicados a cenários práticos (pontuação de jogo, horas trabalhadas, salários, fatura de cartão, idade, moedas, área de retângulo).
- O operador módulo (`%`) foi a peça-chave do desafio "Par ou Ímpar": resto 0 na divisão por 2 = par.
- O cálculo de IMC juntou aritmética (peso ÷ altura²) com uma cadeia de `if/else if/else` para classificar o resultado em faixas.
- O desafio de combustível é basicamente uma regra de três: `litros = distância / km_por_litro` e `custo = litros * preço_do_litro`.

## 🔗 Link do PlayCode
- https://playcode.io/...

## 📚 O que aprendi / posso aprender
- A diferença prática entre `%` (resto da divisão) e `**` (exponenciação) — operadores que aparecem pouco no dia a dia, mas são simples quando aplicados a um caso concreto.
- Que problemas do "mundo real" (IMC, custo de combustível, fatura de cartão) muitas vezes se resolvem só com aritmética básica + condicionais, sem precisar de nada mais sofisticado.
- A importância de organizar bem as variáveis de entrada (peso, altura, distância, preço do litro) antes de montar a fórmula, pra não confundir a ordem das operações.
- Reforço de como estruturar um `if/else if/else` para cobrir faixas de valores sem lacunas nem sobreposição.

## 🚧 Dificuldades
- No cálculo do IMC, a ordem das condições no `if/else if` importa: se comparar na ordem errada, um valor pode "cair" na faixa errada antes de chegar na comparação certa.
- `%` com números decimais ou negativos pode dar um resultado menos intuitivo do que parece à primeira vista.
- Nos desafios de conversão (combustível, distância), é fácil trocar a fórmula de lugar (ex: multiplicar quando era pra dividir) se não organizar mentalmente qual variável representa o quê antes de codar.