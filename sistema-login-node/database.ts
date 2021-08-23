import {Connection, createConnection,getConnection} from "typeorm";

const DBConnect = async ()=>{
    let connection: Connection = getConnection();

    if(connection){
     await connection.connect();

} else{
    await createConnection();
}
console.log("DATABASE CONECTADO COM SUCESSO!");
};
const TryDBConnect = async (onError: Function, OnSuccess: Function)=>{
  try{
    await DBConnect();
    OnSuccess();  
  } catch(error){
      onError();
  }
};
export{TryDBConnect};