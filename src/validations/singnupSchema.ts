interface SignupSchema {
    firstname: string;
    lastname: string;
    email: string;
    mobile: number | string;
    password: string;
    confirmpassword: string;
  }
  
  export const signupValidation = (formData: SignupSchema) => {
    const firstname = formData.firstname.trim();
    const lastname = formData.lastname.trim();
    const email = formData.email.trim();
    const mobile = formData.mobile.toString();
    const password = formData.password.trim();
    const confirmpassword = formData.confirmpassword.trim();
  
    const nameRegex = /^[A-Za-z]+$/;
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const mobileRegex = /^\d{10}$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{4,10}$/;
  
    if (firstname === "") {
      return { success: false, message: "First name should not be empty" };
    }
    if (!nameRegex.test(firstname)) {
      return { success: false, message: "First name should only contain letters" };
    }
  
    if (lastname === "") {
      return { success: false, message: "Last name should not be empty" };
    }
    if (!nameRegex.test(lastname)) {
      return { success: false, message: "Last name should only contain letters" };
    }
  
    if (email === "") {
      return { success: false, message: "Email should not be empty" };
    }
    if (!emailRegex.test(email)) {
      return { success: false, message: "Invalid email format" };
    }
  
    if (mobile === "") {
      return { success: false, message: "Mobile should not be empty" };
    }
    if (!mobileRegex.test(mobile)) {
      return { success: false, message: "Mobile should contain 10 digits" };
    }
  
    if (password === "") {
      return { success: false, message: "Password should not be empty" };
    }
    if (!passwordRegex.test(password)) {
      return { success: false, message: "Password should contain 4 to 10 characters with letters and numbers" };
    }
  
    if (confirmpassword === "") {
      return { success: false, message: "Confirm password should not be empty" };
    }
    if (password !== confirmpassword) {
      return { success: false, message: "Passwords do not match" };
    }
  
    return {
      success: true,
      credential: {
        firstname,
        lastname,
        email,
        mobile: Number(mobile), 
        password,
      },
    };
  };
  