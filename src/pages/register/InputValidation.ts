export interface ValidationErrors {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  repeatPassword: string;
}

export const validateForm = (values: any): ValidationErrors => {
  const errors: ValidationErrors = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    repeatPassword: "",
  };

  if (!values.firstName.trim()) {
    errors.firstName = "First name is required";
  }

  if (!values.lastName.trim()) {
    errors.lastName = "Last name is required";
  }

  if (!values.email.trim()) {
    errors.email = "Email is required";
  }

  if (values.password.trim().length < 8) {
    errors.password = "Password must be at least 8 characters";
  } else {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(values.password)) {
      errors.password =
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character";
    }
  }
  if (values.repeatPassword !== values.password) {
    errors.repeatPassword = "Passwords do not match!";
  }

  return errors;
};
