const { DataTypes } = require("sequelize/types");

module.exports = (sequelize, DataTypes) => {

let alias = 'ProductosCreados'

let cols = {
    usuario_id: {
        type: DataTypes.INTEGER,
        unsigned: true
        
    },
    producto_id: {
        type: DataTypes.INTEGER,
        unsigned: true
    }
}

let config = {
    tableName: 'productos_creados',
    timestamps: false
}

const ProductosCreados = sequelize(alias, cols, config)

return ProductosCreados

}