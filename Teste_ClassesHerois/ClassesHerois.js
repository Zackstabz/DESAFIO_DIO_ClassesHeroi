class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;

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
