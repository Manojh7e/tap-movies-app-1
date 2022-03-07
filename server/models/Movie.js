const { Sequelize,DataTypes }= require('sequelize');

module.exports=(sequelize,DataTypes) =>  {

    const Movie=sequelize.define('Movie',
    {
    
       id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true
    
        },
        title:{
            type:DataTypes.STRING,
            allowNUll:false
        },
        poster:{
            type:DataTypes.STRING,
            allowNull:false
        },
        rating:{
            type:DataTypes.INTEGER,
            allowNull:false
        }
    },{
        freezeTableName:true,
        timeStamps:true,
        underscored:true,
        tableName:'movies',
        schema:'public'
    });

    
        
    return Movie;

}

