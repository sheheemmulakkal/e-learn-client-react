interface formData {
  currentPassword: string;
  newPassword: string;
  confirmpassword: string;
}
export const passwordChangeValidation = (formData: formData) => {
  const currentPassword = formData.currentPassword.trim();
  const newPassword = formData.newPassword.trim();
  const confirmpassword = formData.confirmpassword.trim();

  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{4,10}$/;

  if (currentPassword === "") {
    return { success: false, message: "Enter current password" };
  }
  if (newPassword === "") {
    return { success: false, message: "Enter a new password" };
  }

  if (!passwordRegex.test(newPassword)) {
    return {
      success: false,
      message:
        "Password should contain 4 to 10 characters with letters and numbers",
    };
  }

  if (confirmpassword === "") {
    return { success: false, message: "Confirm password should not be empty" };
  }
  if (newPassword !== confirmpassword) {
    return { success: false, message: "Passwords do not match" };
  }
  return {
    success: true,
    credential: {
      newPassword,
      currentPassword,
    },
  };
};
