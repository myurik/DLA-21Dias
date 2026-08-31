# Dia 7 — Super Desafio: Aplicação Financeira com Limite Compartilhado

## 🎯 Desafio do dia
- [✅] Super Desafio: Aplicação de Finanças — Criar uma aplicação com 2 contas (representadas por variáveis, já que ainda não vimos arrays/estruturas de dados) que compartilham um único limite:
    - [✅] 1. Calcular o saldo total das contas
    - [✅] 2. Exibir um alerta caso alguma conta esteja sem saldo ou usando o limite
    - [✅] 3. Fazer depósito em alguma das contas
    - [✅] 4. Efetuar débito em alguma das contas
    - [✅] 5. Transferir valor de uma conta para outra, somente se houver saldo ou limite disponível
    - [✅] 6. Converter o saldo de R$ para US$
    - [✅] 7. Exibir o limite disponível das contas
    - [✅] 8. Ao depositar usando o limite, descontar 15% do valor depositado (taxa bancária)

**Regras do limite compartilhado:**
- O limite começa sempre em 0 (variável própria pra controlar isso).
- O limite é liberado só a partir do momento em que o saldo total das duas contas atingir R$ 1.000.
- A partir daí, o limite passa a ser 10% da soma do saldo das duas contas.

## 💭 Raciocínio / Anotações
- Esse é o primeiro desafio que junta tudo: variáveis, condicionais, funções — e possivelmente loop, dependendo de como eu decidir mostrar o alerta ou o histórico.
- A modelagem principal é: `saldoContaVanessa`, `saldoContaGabriel` e `limiteCompartilhado`, todas como variáveis separadas (sem array ainda).
- O limite não é fixo — ele é recalculado a partir da soma das duas contas, mas só passa a valer alguma coisa depois que essa soma bate R$ 1.000. Antes disso, `limiteCompartilhado` fica em 0.
- Cada uma das 8 regras vira uma função separada, todas manipulando ou lendo essas mesmas variáveis compartilhadas.
- A regra 8 (taxa de 15% ao usar o limite) só se aplica quando o depósito depende do limite — ou seja, a função de depósito precisa checar antes se está usando saldo próprio ou "invadindo" o limite.

## 📚 O que aprendi / posso aprender
- Modelar um "recurso compartilhado" (o limite) usando só variáveis simples, sem estrutura de dados — dá pra fazer, mas já dá pra sentir por que arrays/objetos vão facilitar muito mais adiante.
- A importância de ter uma "fonte única da verdade": em vez de cada função calcular o limite do seu jeito, é melhor centralizar esse cálculo numa função e reaproveitar.
- Pensar na ordem das operações importa bastante aqui — ex: pra saber se um depósito "usa o limite", preciso primeiro checar o saldo atual da conta antes de decidir se aplico a taxa de 15%.
- Perceber que decisões de negócio (a partir de quando o limite libera, quanto é a taxa) ficam bem mais claras quando cada uma vira uma condicional isolada dentro da função certa.

## 🚧 Dificuldades
- Confesso que precisei ler as regras do limite umas 3 vezes até entender que ele só é liberado depois do total bater 1000, e que antes disso é sempre 0 mesmo que as contas já tenham saldo.
- Tive que parar e pensar em como organizar as variáveis antes de sair codando, porque como são 8 funções mexendo nas mesmas 3 variáveis, é fácil bagunçar tudo se não planejar antes.
- A regra da taxa de 15% no depósito usando limite me deixou um tempo pensando em como saber "quanto do depósito veio do limite" pra descontar só essa parte, e não o depósito inteiro.
- Sem array/objeto pra agrupar as contas, ficou meio repetitivo passar sempre qual conta ("Vanessa" ou "Gabriel") cada função deve afetar.

## 🔗 Link do PlayCode
- https://playcode.io/...