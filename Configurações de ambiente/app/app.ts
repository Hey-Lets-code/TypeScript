import { Negociacao } from './models/negociacao.js';

const negociacao = new Negociacao(new Date(), 10, 100);
console.log(negociacao.volume);
alert('oi');

// o navegador não entende typescript, ele entende js, por isso iremos criar o tsconfig.js (em dist tem tudo que o navegador)
// compilação é uma tradução, ou seja estou traduzindo ts para js, que é compreendido pelo computador