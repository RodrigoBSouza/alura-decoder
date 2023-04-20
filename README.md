# Alura Decoder

Primeiro challenge da Alura concluído com sucesso! Este desafio me deu a oportunidade de aprimorar minhas habilidades de HTML, CSS, Design Responsivo e JavaScript. O desafio era criar um decodificar de textos que pudesse codificar e decodificar os textos inseridos em um input ou textarea e mostrar o resultado ao lado. Acabei criando um loader também para deixá-lo um pouco mais realista. A função para codificar o texto foi feita utilizando um loop "for" que percorre um objetivo onde armazenei as letras e a conversão que equivale a cada letra, se a letra existir dentro deste objeto ela é substituída pelo valor correspondente, caso contrário a letra original é mantida. Já para a função decodificadora eu utilizei o método replace que substitui todas as ocorrências da sequência de caracteres a serem decodificadas pela letra correspondente, usando expressões regulares. O desafio também pedia para que fosse inseridas somente letras minúsculas mas eu utilizei o método "toLowerCase()" para caso seja inseridas letras maiúsculas, ele retorne tudo em minúsculo.

Estou ansioso para continuar a aprimorar minhas habilidades e aplicar essas lições em projetos futuros.

### Built with

- HTML5
- CSS3
- Javascript
- Responsividade

## About the Challenge

Boas vindas ao primeiro desafio!

Durante estas duas semanas, vamos trabalhar em uma aplicação que criptografa textos, assim você poderá trocar mensagens secretas com outras pessoas que saibam o segredo da criptografia utilizada.

As "chaves" de criptografia que utilizaremos são:
A letra "e" é convertida para "enter"
A letra "i" é convertida para "imes"
A letra "a" é convertida para "ai"
A letra "o" é convertida para "ober"
A letra "u" é convertida para "ufat"

Requisitos:
- Deve funcionar apenas com letras minúsculas
- Não devem ser utilizados letras com acentos nem caracteres especiais
- Deve ser possível converter uma palavra para a versão criptografada e também retornar uma palavra criptografada para a versão original.

Por exemplo:
"gato" => "gaitober"
gaitober" => "gato"

A página deve ter campos para inserção do texto a ser criptografado ou descriptografado, e a pessoa usuária deve poder escolher entre as duas opções
O resultado deve ser exibido na tela.

Extras:
- Um botão que copie o texto criptografado/descriptografado para a área de transferência - ou seja, que tenha a mesma funcionalidade do ctrl+C ou da opção "copiar" do menu dos aplicativos.

## Author

- Website - [Rodrigo Souza](https://rodrigobsouza.github.io/rodrigo-souza/)
- LinkedIn - [@rodrigo-b-souza](https://www.linkedin.com/in/rodrigo-b-souza/)