function validateUsername(username) {
  if (username.length < 4) {
    return "Too Short";
  }
  if (username.includes(" ")) {
    return "No Space Allowed";
  }
  if (username.toLowerCase().includes("admin")) {
    return "Reserved Word";
  }
  return "Available";
}

console.log(validateUsername("abir123"));
console.log(validateUsername("abir islam"));
console.log(validateUsername("abir_admin"));
console.log(validateUsername("ab"))