


module.exports = (sequelize, DataTypes) => {


let alias = 'Usuarios'

let cols = {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unsigned: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: true
    },
    fecha_de_nacimiento: {
        type: DataTypes.DATE
    },
    clave: {
        type: DataTypes.STRING
    },
    cantidad_de_productos: {
        type: DataTypes.INTEGER,
        unsigned: true,
        defaultValue: 0
    },
    seguidores: {
        type: DataTypes.INTEGER,
        unsigned: true,
        defaultValue: 0
    },
    comentarios: {
        type: DataTypes.INTEGER,
        unsigned: true,
        defaultValue: 0
    },
    foto_perfil: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "undefined-1623092790999.png"
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
   
   
}

let config = {
    tableName: 'usuarios',
    timestamps: true
   
}


const Usuarios = sequelize.define(alias, cols, config)

    
    Usuarios.associate = function(models){
    Usuarios.hasMany(models.Comentarios, {
        as: "comentarioss",
        foreignKey: "id_autor"
    })
    Usuarios.hasMany(models.Products, {
        as: "productos",
        foreignKey: "creado_por"
    })
}



return Usuarios

}