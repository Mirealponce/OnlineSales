const config={
    configApp:{
        port:process.env.PORT,
        host:process.env.APP_HOST
    },
    db:{
        user:process.env.USER,
        pass:process.env.PASSWORD,
        dbname:process.env.DBNAME
    }
}

module.exports=config