const Sequelize = require("sequelize");
const { STRING } = Sequelize;
const db = new Sequelize("postgres://ec2-user:localhost:5432/bookmarker");

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
   
    category: {
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


Category.hasmany(BookMark);
BookMark.belongsTo(Category);


module.exports = { BookMark, Category, db }