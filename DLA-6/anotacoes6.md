# Dia 6 — Funções (refatorando desafios anteriores)

## 🎯 Desafios do dia
- [✅] Desafio 1: Calcular IMC — Criar uma função que recebe peso e altura como parâmetros e calcula o IMC (peso ÷ altura²).
- [✅] Desafio 2: Dia da semana por extenso — Transformar o código de dias da semana com `switch` (do Dia 4) em uma função `obterDiaDaSemana`, que recebe um número de 1 a 7 e retorna o dia por extenso. Testar com várias chamadas.
- [✅] Desafio 3: Aplicação financeira — Voltar ao desafio 1 do Dia 5 (rendimento de aplicação financeira) e transformar aquele cálculo em uma função.

## 💭 Raciocínio / Anotações
- O fio condutor do dia é pegar lógica que já foi resolvida "solta" (script direto) nos dias anteriores e embrulhar em uma função com parâmetros e retorno.
- No desafio 1, diferente do IMC do Dia 3, aqui não pede a classificação por faixas — só o cálculo puro, encapsulado numa função reaproveitável.
- No desafio 2, a função `obterDiaDaSemana` centraliza a lógica do `switch` num único lugar, permitindo chamar `obterDiaDaSemana(1)`, `obterDiaDaSemana(2)` etc. em vez de repetir o `switch` toda vez.
- No desafio 3, o loop `for` do Dia 5 continua o mesmo — a mudança é só colocar valor inicial, taxa e anos como parâmetros da função, tornando o cálculo genérico pra qualquer investimento.

## 📚 O que aprendi / posso aprender
- Perceber o ganho de transformar lógica repetida em função: em vez de copiar/colar o mesmo bloco de código, chama a função quantas vezes precisar.
- A diferença entre uma função que só `console.log` internamente e uma que `return`a o valor — retornar é mais flexível, porque quem chama decide o que fazer com o resultado (imprimir, guardar, usar em outro cálculo).
- Reforçar que parametrizar (peso/altura, número do dia, valor/taxa/anos) é o que transforma um script "fixo" em algo reutilizável.

## 🚧 Dificuldades
- Bati um pouco a cabeça pra lembrar como era o switch dos dias da semana do dia 4 antes de transformar em função, tive que ir lá relembrar a lógica.
- Fiquei em dúvida se a função do desafio 1 devia só calcular o IMC ou também classificar (tipo o desafio do dia 3), mas o enunciado só pede o cálculo mesmo.
- Na função do desafio 3, tive que ver direito quais variáveis eu ia deixar fixas e quais viravam parâmetro, pra função ficar genérica de verdade e não só "disfarçada" de função.

## 🔗 Link do PlayCode
- https://playcode.io/...