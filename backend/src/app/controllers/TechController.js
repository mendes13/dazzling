import * as Yup from 'yup';

import Tech from '../models/Tech';
import User from '../models/User';

class TechController {
  async index(req, res) {
    const techs = await Tech.findAll();

    return res.json(techs);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      color: Yup.string(),
    });

    const schemaIsValid = await schema.isValid(req.body);

    if (!schemaIsValid) {
      return res.status(400).json({ error: 'Validation Fails' });
    }

    const isAdmin = await User.findOne({
      where: {
        id: req.userId,
        admin: true,
      },
    });

    if (!isAdmin) {
      return res
        .status(403)
        .json({ error: 'Only administrators can create technologies' });
    }

    const tech = await Tech.create(req.body);

    return res.json(tech);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      color: Yup.string(),
    });

    const schemaIsValid = await schema.isValid(req.body);

    if (!schemaIsValid) {
      return res.status(400).json({ error: 'Validation Fails' });
    }

    const isAdmin = await User.findOne({
      where: {
        id: req.userId,
        admin: true,
      },
    });

    if (!isAdmin) {
      return res
        .status(403)
        .json({ error: 'Only administrators can create technologies' });
    }

    const { id } = req.params;
    const tech = await Tech.findOne({ where: { id } });

    if (!tech) {
      return res.status(400).json({ error: 'This technology does not exist' });
    }

    const newTech = await tech.update(req.body);

    return res.json(newTech);
  }

  async delete(req, res) {
    const isAdmin = await User.findOne({
      where: {
        id: req.userId,
        admin: true,
      },
    });

    if (!isAdmin) {
      return res
        .status(403)
        .json({ error: 'Only administrators can delete technologies ' });
    }

    const { id } = req.params;

    const tech = await Tech.findOne({
      where: {
        id,
      },
    });

    if (!tech) {
      return res.status(400).json({ error: 'This technology does not exist' });
    }

    await tech.destroy();

    return res.json(tech);
  }
}

export default new TechController();
