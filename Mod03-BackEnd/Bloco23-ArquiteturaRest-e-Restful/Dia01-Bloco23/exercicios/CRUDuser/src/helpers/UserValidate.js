const isNewUserValid = (first_name, last_name, email, password) => {
    if(!first_name) return { error: true,  message: 'O campo "first_name" é inválido' }
    
    if(!last_name) return { error: true, message: 'O campo "last_name" é inválido' }

    if(!email) return { error: true, message: 'O campo "email" é inválido' }

    if(!password) return { error: true, message: 'O campo "password" é inválido' }
    
    if(typeof password !== 'string' || password.length < 6 ) { 
      return { error: true, message: 'O campo "password" deve ter pelo menos 6 caracteres' }
    }

    return { error: false };
};

module.exports = {
  isNewUserValid,
}

