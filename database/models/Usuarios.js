


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
        defaultValue: "https://upload.wikimedia.org/wikipedia/commons/0/09/Man_Silhouette.png"
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
   
   
}

let config = {
    tableName: 'usuarios',
    timestamps: true
   
}


const Usuarios = sequelize.define(alias, cols, config)

    
    Usuarios.associate = function(models){
    Usuarios.hasMany(models.Comentarios, {
        as: "comentarios",
        foreignKey: "id_autor"
    })
}


    Usuarios.associate = function(models){
    Usuarios.hasMany(models.Products, {
        as: "productos",
        foreignKey: "creado_por"
    })
}

return Usuarios

}