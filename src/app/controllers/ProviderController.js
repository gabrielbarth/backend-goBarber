import User from '../models/User';
import File from '../models/File';

class ProviderController {
  // method to return all provider users registered on app
  async index(req, res) {
    const providers = await User.findAll({
      where: { provider: true },
      attributes: ['id', 'name', 'email', 'avatar_id'], // returning just the informations that I want
      include: [
        {
          model: File,
          as: 'avatar', // specifying a codename
          attributes: ['name', 'path', 'url'],
        },
      ],
    });

    return res.json(providers);
  }
}

export default new ProviderController();
