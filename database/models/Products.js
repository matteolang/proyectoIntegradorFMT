

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
            allowNull: true,
            defaultValue: null    
        }
    }

    let config = {
        tableName: 'products',
        timestamps: false
    }

    const Products = sequelize.define(alias, cols, config)

    
    Products.associate = function(models){
        Products.belongsTo(models.Usuarios, {
            as: "creador",
            foreignKey: "creado_por"
        })
    }

return Products

}