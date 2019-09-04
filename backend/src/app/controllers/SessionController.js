import jwt from 'jsonwebtoken';
import * as Yup from 'yup';

import authConfig from '../../config/auth';

import User from '../models/User';
import File from '../models/File';

class SessionController {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string(),
    });

    const schemaIsValid = await schema.isValid(req.body);

    if (!schemaIsValid) {
      return res.status(400).json({ error: 'Validation Fails' });
    }

    const { email, password } = req.body;

    const user = await User.findOne({
      where: {
        email,
      },
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['id', 'path', 'url'],
        },
      ],
    });

    if (!user) {
      return res.status(400).json({ error: 'Email is not registered' });
    }

    const passwordIsCorrect = await user.checkPassword(password);

    if (!passwordIsCorrect) {
      return res.status(401).json({ error: 'Invalid Password' });
    }

    const { id, name, avatar } = user;

    const token = jwt.sign({ id }, authConfig.secret, {
      expiresIn: authConfig.expiresIn,
    });

    return res.json({
      user: {
        id,
        name,
        email,
        avatar,
      },
      token,
    });
  }
}

export default new SessionController();
