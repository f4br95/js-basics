const objParaArray = {
  nome: "maria",
  profissao: "Desenvolvedora de Software",
};

const objetoParaArray = (objeto) => [
  Object.entries(objeto),
  
];
// console.log(objetoParaArray(objParaArray));

console.log(objetoParaArray( { nome: "maria",
profissao: "Desenvolvedora de Software"}));
