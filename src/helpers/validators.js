exports.authValidator = (email, password) => {
  const errorJson = {
    isFinalError: true,
    emailError: null,
    passwordError: null,
  };

  const isValidEmail = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  //Email Validation
  if (email.match(isValidEmail)) {
    errorJson["isFinalError"] = false;
  } else {
    errorJson["isFinalError"] = true;
    errorJson["emailError"] = "email should have a valid Id and required.";
  }

  //Must have a password and sum must be equal to 10.
  if (password) {
    let sum = 0;

    for (let index = 0; index < password?.length; index++) {
      sum += Number(password[index]);
    }

    if (sum !== 10) {
      errorJson["isFinalError"] = true;
      errorJson["passwordError"] = "password sum must be 10 and required.";
    }

  } else {
    errorJson["isFinalError"] = true;
    errorJson["passwordError"] = "password can't be empty";
  }
  return errorJson;
};
