interface SignupSchema {
  email: string;
  password: string;
}

export const loginValidation = (formData: SignupSchema) => {
  const email = formData.email.trim();
  const password = formData.password.trim();

  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  if (email === "") {
    return { success: false, message: "Email should not be empty" };
  }
  if (!emailRegex.test(email)) {
    return { success: false, message: "Invalid email format" };
  }

  if (password === "") {
    return { success: false, message: "Password should not be empty" };
  }

  return {
    success: true,
    credential: {
      email,
      password,
    },
  };
};
