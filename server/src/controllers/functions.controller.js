function validate(data, rules){
  let response = {
    message: "ERROR, invalid fields",
    status: 500,
    invalid_fields: [],
    empty_values: [],
  }

  const dataValues = Object.values(data)

  for (let i = 0; i < rules.length; i++) {
    if(!dataValues[i]){
      response.empty_values.push(rules[i])
    }
  }

  if(response.empty_values.length){
    response.message = "ERROR, empty values"
  } else if(dataValues[4] != dataValues[5]){
    response.message = "ERROR, the passwords doesn't match!"
  } 
  else {
    response = {
      message: "Success",
      status: 200,
      data: []
    }
  }

  return response
}

export {validate}