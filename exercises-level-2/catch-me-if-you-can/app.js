function sum(x, y) {
    try {
      if (typeof x !== "number" || typeof y !== "number") {
        throw new Error("Hey there, sorry to bother you but there was an error, eh")
      }
      return x + y
    } catch (error) {
      console.error(error.message)
    } finally {
    console.log("Just lettin' ya know I'm working. I'm workin' over here") 
    }
}
  
try {
    const result = sum("1", "2")
    console.log("The result is:", result)
  } catch (error) {
    console.log("Error:", error.message)
}

const user = {
    username: "sam",
    password: "123abc"
}
function login(username, password) {
    try {
      if (username !== "sam" && password !== "123abc") {
        throw new Error("Hey there, sorry to bother you but there was an error, eh")
      } else {
        console.log("Login successful!")
      }
    } catch (error) {
      console.error(error.message)
    } finally {
    console.log("Just lettin' ya know I'm working. I'm workin' over here") 
    }
}
  
try {
    login("petey", "6969")
  } catch (error) {
    console.log("Error:", error.message)
}

try {
    login("sam", "123abc")
  } catch (error) {
    console.log("Error:", error.message)
}