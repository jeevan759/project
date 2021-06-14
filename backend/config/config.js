module.exports={
    webport:process.env.PORT||3000,
    mongo_connection_string :  process.env.MONGO_CONNECTION_STRING ||'',
  
    session_secret : process.env.SESSION_SECRET || 'beingzero'
}