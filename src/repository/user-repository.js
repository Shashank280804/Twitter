import User from '../models/user.js';
import CrudRepository from './crud-repository.js';

class UserRepository extends CrudRepository {
  constructor() {
    super(User);
  }

  async findBy(data) {
    try {
      const response = await User.findOne(data);
      return response;
    } catch (error) {
      console.error("Error in UserRepository.findBy:", error); // Log the error details
      throw error;
    }
  }
}

export default UserRepository;
