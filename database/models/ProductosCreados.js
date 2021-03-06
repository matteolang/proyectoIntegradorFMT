

module.exports = (sequelize, DataTypes) => {

let alias = 'ProductosCreados'

let cols = {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
            primaryKey: true,
            unsigned: true
    },
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

const ProductosCreados = sequelize.define(alias, cols, config)

return ProductosCreados

}