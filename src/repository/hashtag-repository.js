import Hashtag from '../models/hashtags.js';

class HashtagRepository {
  async create(data) {
    try {
      const tag = await Hashtag.create(data);
      return tag;
    } catch (error) {
      console.log(error);
    }
  }

  async get(id) {
    try {
      const tag = await Hashtag.findById(id);
      return tag;
    } catch (error) {
      console.log(error);
    }
  }

  async bulkCreate(data) {
    try {
      const tags = await Hashtag.insertMany(data);
      return tags;
    } catch (error) {
      console.log(error);
    }
  }

  async update(Id, data) {
    try {
      const tag = await Hashtag.findByIdAndUpdate(Id, data, {
        new: "true",
      });
      return tag;
    } catch (error) {
      console.log(error);
    }
  }

  async destroy(id) {
    try {
      const response = await Hashtag.findByIdAndRemove(id);
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async findByName(titleList) {
    try {
      const tags = await Hashtag.find({
        title: { $in: titleList }
      }).select('title tweets'); // Include 'tweets' field
      
      return tags;
    } catch (error) {
      console.log(error);
    }
  }
}

export default HashtagRepository;
