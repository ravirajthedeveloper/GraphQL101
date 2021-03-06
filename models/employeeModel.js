'use strict'

export default (sequelize, DataTypes) => {
    return sequelize.define('owner', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING(50),
            required: true,
            allowNull: false
        },
        sex: {
            type: DataTypes.ENUM,
            required: true,
            values: ['M', 'F']

        },
        designation: {
            type: DataTypes.STRING(50),
            required: true,
            allowNull: false
        },
        joined_date: {
            type: DataTypes.DATE,
            required: true,
            allowNull: false
        },
        department: {
            type: DataTypes.STRING(50),
            required: true,
            allowNull: false
        },
        email_id: {
            type: DataTypes.STRING(50),
            required: true,
            allowNull: false
        },
        password_hash: {
            type: DataTypes.STRING,
            required: true,
            allowNull: false
        }
    })
}
