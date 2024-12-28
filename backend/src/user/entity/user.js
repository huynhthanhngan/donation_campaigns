
import { Sequelize, DataTypes } from 'sequelize';
import { sequelize } from '../../db/sequelize.js';

const User = (sequelize, DataTypes) => {
    return sequelize.define("User", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        username: {
            
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        profile_image: {
            type: DataTypes.STRING,
        },
        avatar: {
            type: DataTypes.STRING,
        },
        country: {
            type: DataTypes.STRING,
        },
        city: {
            type: DataTypes.STRING,
        },
        short_description: {
            type: DataTypes.STRING,
        },
        firstname: {
            type: DataTypes.STRING,
        },
        lastname: {
            type: DataTypes.STRING,
        },
        about_me: {
            type: DataTypes.TEXT,
        },
        contributions_counter: {
            type: DataTypes.INTEGER,
        },
        campaigns_counter: {
            type: DataTypes.INTEGER,
        },
        comments_counter: {
            type: DataTypes.INTEGER,
        },
    })
}

export { User };
