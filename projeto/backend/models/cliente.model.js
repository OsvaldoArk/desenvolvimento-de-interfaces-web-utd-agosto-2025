module.exports = (sequelize, Sequelize) => {

const Cliente = sequelize.define('clientes', {	
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
	nome: {
		type: Sequelize.STRING
	},
	idade: {
	    type: Sequelize.INTEGER
	},
	email: {
		type: Sequelize.STRING
	},
});
	
return Cliente;
}
