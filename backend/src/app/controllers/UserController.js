import * as Yup from 'yup';
import User from '../models/User';
import File from '../models/File';

class UserController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string()
        .min(6)
        .required(),
    });

    const schemaIsValid = await schema.isValid(req.body);

    if (!schemaIsValid) {
      return res.status(400).json({ error: 'Validation Fails' });
    }

    const { name, email, password } = req.body;

    const userAlreadyExists = await User.findOne({
      where: {
        email,
      },
    });

    if (userAlreadyExists) {
      return res.status(400).json({ err: 'User already exists' });
    }

    const user = await User.create({
      name,
      email,
      password,
    });

    return res.json(user);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required('Your name is required'),
      email: Yup.string()
        .email('Please insert a valid email')
        .required('Your email is required'),
      oldPassword: Yup.string(),
      password: Yup.string().when('oldPassword', (oldPassword, field) =>
        oldPassword
          ? field.required('Your new password is required').min(6)
          : field
      ),
      confirmPassword: Yup.string().when('password', (password, field) =>
        password
          ? field
              .required('Please confirm the password')
              .oneOf([Yup.ref('password')], 'The passwords do not match')
          : field
      ),
    });

    const schemaIsValid = await schema.isValid(req.body);

    if (!schemaIsValid) {
      return res.status(400).json({ error: 'Validation Fails' });
    }

    const { email, oldPassword } = req.body;

    const user = await User.findByPk(req.userId);

    if (email !== user.email) {
      const emailAlreadyRegistered = await User.findOne({ where: { email } });

      if (emailAlreadyRegistered) {
        return res
          .status(401)
          .json({ error: 'This email is already registered' });
      }
    }

    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      return res.status(401).json({ error: 'Password does not match' });
    }

    await user.update(req.body);

    const { id, name, avatar } = await User.findByPk(req.userId, {
      attributes: ['id', 'name', 'email'],
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['id', 'path', 'url'],
        },
      ],
    });

    return res.json({
      id,
      name,
      email,
      avatar,
    });
  }
}

export default new UserController();
