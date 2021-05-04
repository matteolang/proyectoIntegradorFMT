module.exports = (sequelize, DataTypes) => {

let alias = 'Usuarios'

let cols = {
    id: {
        autoincrement: true,
        primarykey: true,
        type: DataTypes.INTEGER
    },
    nombre: {
        type: DataTypes.STRING
    },
    fecha_nacimiento: {

    }
//Los nombres aca de las columnas tienen q coincidir con los de la base de datos, y asignarle las mismas propiedades.
//etc...
}

let config = {
    //si no necesitas esto no se pone, pero sirve para aclarar cosas de mas sobre una tabla. Por ejemplo: 
    tableName: 'usuario',
    timestamps: false   
    //->   desabilita las columnas de timestamp para esta tabla/modelo. 
}
//config es opcional

const Usuarios = sequelize.define(alias, cols, config)

return Usuarios

}