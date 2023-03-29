export class Database{
  create = (query, data) => {
    const response = {
      sql: "",
      status: true
    }
    
    switch (query) {
      case "database":
        response.sql += `CREATE DATABASE ${data.name}`
      break;

      case "table":
        response.sql += `CREATE TABLE ${data.name}(`
        data.columns.forEach((column, i) => {
          response.sql += `${column.name} ${column.datatype} `

          if(column?.unsigned) {
            response.sql += "UNSIGNED "
          }

          if(!column.default){
            if(column?.null){
              response.sql += "NULL "
            } else { 
              response.sql += "NOT NULL "
            }
          } else {
            response.sql += `DEFAULT '${column.default}' `
          }

          if(column?.auto_increment) {
            response.sql += "AUTO_INCREMENT "
          }

          if(column?.primary) {
            response.sql += "PRIMARY KEY "
          }

          if(i < data.columns.length - 1)  response.sql += ", "
        })
        response.sql += ");"
      break;
        
      case "insert": 
        if(data.name == "users") {
          response.sql += `INSERT INTO ${data.name} (name, last_name, email, phone, password) VALUES (`
          const dataArray = Object.values(data.values)
          
          dataArray.forEach((value, i) => {
            if(i < dataArray.length - 1){
              if(typeof value == "string"){
                response.sql += `'${value}'`
              }else{
                response.sql += `${value}`
              }
              if(i < dataArray.length - 2){
                response.sql += ", "
              }
            }
          })
          response.sql += ");"
        }
      break


      default:
        response.status = false
      break;
    }
    return response
  }

  read = (query, data) => {
    const response = {
      sql: "",
      status: true
    }

    switch (query) {
      case "select":
        if(data.condition){
          response.sql += `SELECT ${data.columns} FROM ${data.name} WHERE ${data.condition}`
        }else{
          response.sql += `SELECT ${data.columns} FROM ${data.name}`
        }
      break
    
      default:
        response.status = false
      break
    }

    return response

  }

  update = (query, data) => {

  }

  delete = (query, data) => {

  }
}