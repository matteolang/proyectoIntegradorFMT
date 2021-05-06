module.exports = (sequelize, DataTypes) => {

    let alias = 'Comentarios'

    let cols = {
        id_producto_comentado: {
            type: DataTypes.INTEGER,
            unsigned: true
        },
        id_autor: {
            type: DataTypes.INTEGER,
            unsigned: true
        },
        comentario: {
            type: DataTypes.STRING
        },
        fecha_de_creacion: {
            type: DataTypes.DATE
        },
        foto_autor: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: null
        }
    }

    let config = {
        tableName: 'comentarios',
        timestamps: false
    }

    const Comentarios = sequelize.define(alias, cols, config)


    return Comentarios

}