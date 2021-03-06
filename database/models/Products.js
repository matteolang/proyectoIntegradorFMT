

module.exports = (sequelize, DataTypes) => {

    let alias = 'Products'

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            unsigned: true
        },
        nombre_producto: {
            type: DataTypes.STRING,

        },
        fecha_de_creacion: {
            type: DataTypes.DATE
        },
        marca: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: null 
        },
        modelo: {
            type: DataTypes.STRING
        },
        precio: {
            type: DataTypes.INTEGER,
            unsigned: true
        },
        descripcion: {
            type: DataTypes.STRING,
            allowNull: true
        },
        creado_por: {
            type: DataTypes.INTEGER,
            unsigned: true
        },
        foto_product: {
            type: DataTypes.STRING,
            allowNull: false,  
        },
        cantidad_de_comentarios: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        }
    }

    let config = {
        tableName: 'products',
        timestamps: true
    }

    const Products = sequelize.define(alias, cols, config)

    
    Products.associate = function(models){
        Products.belongsTo(models.Usuarios, {
            as: "creador",
            foreignKey: "creado_por"
        }),
        Products.hasMany(models.Comentarios, {
            as: 'comentarios',
            foreignKey: 'id_producto_comentado'
        })
    }

return Products

}