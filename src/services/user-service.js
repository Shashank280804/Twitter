import { UserRepository } from "../repository/index.js";

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async signup(data) {
    try {
      const user = await this.userRepository.create(data);
      return user;
    } catch (error) {
      console.error("Error in UserService.signup:", error); // Log the error details
      throw error;
    }
  }

  async getUserByEmail(email) {
    try {
      const user = await this.userRepository.findBy({ email });
      return user;
    } catch (error) {
      console.error("Error in UserService.getUserByEmail:", error); // Log the error details
      throw error;
    }
  }

  async signin(data) {
    try {
      const user = await this.getUserByEmail(data.email);
      if (!user) {
        throw new Error("No user Found");
      }
      if (!user.comparePassword(data.password)) {
        throw new Error("Incorrect password");
      }
      const token = user.genJWT();
      return token;
    } catch (error) {
      console.error("Error in UserService.signin:", error); // Log the error details
      throw error;
    }
  }
}

export default UserService;
