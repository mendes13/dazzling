import * as Yup from 'yup';

import Stack from '../models/Stack';
import Dazzle from '../models/Dazzle';
import Tech from '../models/Tech';

class StackController {
  async index(req, res) {
    const { dazzle_id } = req.params;

    const stacks = await Stack.findAll({
      where: {
        dazzle_id,
      },
    });

    return res.json(stacks);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      tech_id: Yup.number().required(),
      dazzle_id: Yup.number().required(),
      description: Yup.string(),
    });

    const schemaIsValid = await schema.isValid(req.body);

    if (!schemaIsValid) {
      return res.status(400).json({ error: 'Validation Fails' });
    }

    const { tech_id, dazzle_id, description } = req.body;

    const techExists = await Tech.findOne({
      where: {
        id: tech_id,
      },
    });

    if (!techExists) {
      return res.status(400).json({ error: 'This technology does not exist' });
    }

    const dazzle = await Dazzle.findOne({
      where: {
        id: dazzle_id,
      },
    });

    if (!dazzle) {
      return res.status(400).json({ error: 'This dazzle does not exist' });
    }

    // Checks if the Dazzle that is being registered is made by the user
    if (dazzle.user_id !== req.userId) {
      return res
        .status(403)
        .json({ error: `Only the Dazzle's creator add new technologies` });
    }

    const alreadyHasThatTech = await Stack.findOne({
      where: {
        tech_id,
        dazzle_id,
      },
    });

    if (alreadyHasThatTech) {
      return res
        .status(401)
        .json({ error: 'This dazzle already has this technology' });
    }

    const stack = await Stack.create({
      tech_id,
      dazzle_id,
      description,
    });

    return res.json(stack);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      description: Yup.string(),
    });

    const schemaIsValid = await schema.isValid(req.body);

    if (!schemaIsValid) {
      return res.status(400).json({ error: 'Validation Fails' });
    }

    const { id } = req.params;

    const stack = await Stack.findOne({
      where: {
        id,
      },
      include: [
        {
          model: Dazzle,
          as: 'dazzle',
          attributes: ['user_id'],
        },
      ],
    });

    if (!stack) {
      return res.status(400).json({ error: 'This tech stack does not exist' });
    }

    if (stack.dazzle.user_id !== req.userId) {
      return res.status(403).json({
        error: `Only the Dazzle's creators can update the tech stacks`,
      });
    }

    const { description } = req.body;

    const newStack = await stack.update({
      description,
    });

    return res.json(newStack);
  }

  async delete(req, res) {
    const { id } = req.params;

    const stack = await Stack.findOne({
      where: {
        id,
      },
      include: [
        {
          model: Dazzle,
          as: 'dazzle',
          attributes: ['user_id'],
        },
      ],
    });

    if (!stack) {
      return res.status(400).json({ error: 'This tech stack does not exist' });
    }

    if (stack.dazzle.user_id !== req.userId) {
      return res.status(403).json({
        error: `Only the dazzle's creators can delete the tech stack`,
      });
    }

    await stack.destroy();

    return res.json(stack);
  }
}

export default new StackController();
