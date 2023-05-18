const Sequelize = require("sequelize");
const { STRING } = Sequelize;
const db = new Sequelize("postgres://postgres:Neilfinn93!@localhost/BookMarker", {logging: false});

const BookMark = db.define('bookmark', {
    name: {
        type: STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    
    url: {
        type: STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
});


const Category = db.define('category', {
    name: {
        type: STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
});


Category.hasMany(BookMark);
BookMark.belongsTo(Category);


module.exports = { BookMark, Category, db }