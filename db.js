const Sequelize = require('sequelize');
const { STRING } = Sequelize;
const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/harry_potter_fandom');

const House = db.define('house', {
    name:  {
        type: STRING,
        allowNull: false,
        unique: true
    },
    imageUrl: STRING
})

const Character = db.define('character', {
    name: {
        type: STRING,
        allowNull: false,
        unique: true
    },
    imageUrl: STRING

})

const syncAndSeed = async() => {
    await db.sync({ force:true })

}

module.exports = {
    db,
    syncAndSeed
}