import * as Yup from 'yup';

import Dazzle from '../models/Dazzle';
import Tech from '../models/Tech';
import Stack from '../models/Stack';
import File from '../models/File';

class DazzleController {
  async index(req, res) {
    const dazzles = await Dazzle.findAll({
      where: {
        user_id: req.userId,
      },
      attributes: ['id', 'name'],
      include: [
        {
          model: File,
          as: 'logo',
          attributes: ['id', 'path', 'url'],
        },
      ],
    });

    return res.json(dazzles);
  }

  async show(req, res) {
    const { id } = req.params;

    const dazzle = await Dazzle.findOne({
      where: {
        id,
      },
      include: [
        {
          model: File,
          as: 'logo',
          attributes: ['id', 'path', 'url'],
        },
        // This "Stack include" should be here if it is desirable to
        // the frontend to make just one request to the backend in the show method
        {
          model: Stack,
          as: 'stack',
          attributes: ['id', 'tech_id', 'dazzle_id', 'description'],
          include: [
            {
              model: Tech,
              as: 'tech',
              attributes: ['id', 'name', 'hex_color'],
            },
          ],
        },
      ],
    });

    if (!dazzle) {
      return res.status(400).json({ error: 'Dazzle does not exist' });
    }

    if (dazzle.user_id !== req.userId) {
      return res
        .status(403)
        .json({ error: 'You are not allowed to see this Dazzle' });
    }

    return res.json(dazzle);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      description: Yup.string(),
      logo_id: Yup.number(),
      interface_url: Yup.string().url(),
      repo_url: Yup.string().url(),
      logic_url: Yup.string().url(),
    });

    const schemaIsValid = await schema.isValid(req.body);

    if (!schemaIsValid) {
      return res.status(400).json({ error: 'Validation Fails' });
    }

    const {
      name,
      description,
      logo_id,
      interface_url,
      repo_url,
      logic_url,
    } = req.body;

    const dazzle = await Dazzle.create({
      name,
      description,
      user_id: req.userId,
      logo_id,
      interface_url,
      repo_url,
      logic_url,
    });

    return res.json(dazzle);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      description: Yup.string(),
      logo_id: Yup.number(),
      interface_url: Yup.string().url(),
      repo_url: Yup.string().url(),
      logic_url: Yup.string().url(),
    });

    const schemaIsValid = await schema.isValid(req.body);

    if (!schemaIsValid) {
      return res.status(400).json({ error: 'Validation Fails' });
    }

    const { id } = req.params;

    const dazzle = await Dazzle.findOne({
      where: {
        id,
      },
    });

    if (!dazzle) {
      return res.status(400).json({ error: 'Dazzle does not exist' });
    }

    if (dazzle.user_id !== req.userId) {
      return res
        .status(403)
        .json({ error: 'You are not allowed to update this Dazzle' });
    }

    const newDazzle = await dazzle.update(req.body);

    return res.json({ dazzle: newDazzle });
  }

  async delete(req, res) {
    const { id } = req.params;

    const dazzle = await Dazzle.findOne({
      where: {
        id,
      },
    });

    if (!dazzle) {
      return res.status(400).json({ error: 'This Dazzle does not exist' });
    }

    if (dazzle.user_id !== req.userId) {
      return res
        .status(403)
        .json({ error: 'You are not allowed to remove this Dazzle' });
    }

    await dazzle.destroy();

    return res.json(dazzle);
  }
}

export default new DazzleController();
