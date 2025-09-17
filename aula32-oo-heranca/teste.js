import Pessoa from "./Pessoa.js";
import Funcionario from "./Funcionario.js";

const p = new Pessoa(1,"Maria Lúcia","1999-03-30");

const f = new Funcionario(2,"Luciana Pessoa","1997-05-10","gerente","contas");

console.log(p.toString());

console.log(f.toString());