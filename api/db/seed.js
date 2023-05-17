const { Category, BookMark, db, } = require('./index')

const seed = async () => {
    try{
        await db.sync({ force: true });
        
        const [] = await Promise.all([
            BookMark.create({ name: "" }),
            BookMark.create({ name: "" }),
            BookMark.create({ name: "" }),
            BookMark.create({ name: "" }),
            ]);
        
        const [] = await Promise.all([
            Category.create({ name: "", address: "" }),
            Category.create({ name: "", address: "" }),
            Category.create({ name: "", address: "" }),
            ]);
        
        
        db.close();
    } catch (error) {
        console.log('error')
        db.close()
    },
};


seed()