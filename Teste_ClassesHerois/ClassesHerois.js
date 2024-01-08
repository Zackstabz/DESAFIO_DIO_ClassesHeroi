// Definindo a classe Heroi com um construtor que recebe nome, idade e tipo como parâmetros
class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;   // Atributo para armazenar o nome do herói
    this.idade = idade; // Atributo para armazenar a idade do herói
    this.tipo = tipo;   // Atributo para armazenar o tipo do herói (guerreiro, mago, monge, ninja)
  }

  // Método atacar que exibe a mensagem de ataque conforme o tipo do herói
  atacar() {
    let ataque;

    // Utilizando switch para determinar o tipo de ataque com base no tipo do herói
    switch (this.tipo) {
      case 'mago':
        ataque = 'usou magia';
        break;
      case 'guerreiro':
        ataque = 'usou espada';
        break;
      case 'monge':
        ataque = 'usou artes marciais';
        break;
      case 'ninja':
        ataque = 'usou shuriken';
        break;
      default:
        ataque = 'usou um ataque indefinido';
    }

    // Exibindo a mensagem do ataque no console
    console.log(`o ${this.tipo} atacou usando ${ataque}`);
  }
}

// Exemplo de uso
let heroi1 = new Heroi('Aragorn', 35, 'guerreiro');
heroi1.atacar();

let heroi2 = new Heroi('Gandalf', 150, 'mago');
heroi2.atacar();

let heroi3 = new Heroi('Bruce Lee', 32, 'monge');
heroi3.atacar();

let heroi4 = new Heroi('Hanzo', 28, 'ninja');
heroi4.atacar();
