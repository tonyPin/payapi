function validation(values) {
    let errors ={}
    const email_regex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i
    if(!values.username){
        errors.username = "This field can't be empty"
    }
    if(!values.email){
        errors.email = "This field can't be empty"
    } else if(!email_regex.test(values.email)) {
        errors.email = "Please use a valid email address"
    }
    if(!values.message){
        errors.message = "This field can't be empty"
    }
  return errors
}

export default validation