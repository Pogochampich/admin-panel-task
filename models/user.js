const Sequelize = require("sequelize");
const sequelize = require("../lib/db");

const User = sequelize.define("users", {
    user_id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
    },
    fullName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    birthDate: {
        type: Sequelize.DATE,
        allowNull: false
    },
    phoneNumber: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true // Гарантирует уникальность E-mail
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true // Гарантирует уникальность логина
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    photo: {
        type: Sequelize.STRING // Путь к фотографии пользователя
    }
});

module.exports = User;