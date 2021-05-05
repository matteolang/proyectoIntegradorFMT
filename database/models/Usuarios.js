module.exports = (sequelize, DataTypes) => {

let alias = 'Usuarios'

let cols = {
    id: {
        autoincrement: true,
        primarykey: true,
        type: DataTypes.INTEGER,
        unsigned: true
    },
    username: {
        type: DataTypes.STRING
    },
    fecha_de_nacimiento: {
        type: DataTypes.DATE
    },
    clave: {
        type: DataTypes.STRING
    },
    cantidad_de_productos: {
        type: DataTypes.INTEGER,
        unsigned: true
    },
    seguidores: {
        type: DataTypes.INTEGER,
        unsigned: true
    },
    comentarios: {
        type: DataTypes.INTEGER,
        unsigned: true
    },
    foto_perfil: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null 
    }

}

let config = {
    tableName: 'usuarios',
    timestamps: false    
}


const Usuarios = sequelize.define(alias, cols, config)

return Usuarios

}