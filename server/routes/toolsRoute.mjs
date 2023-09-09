import express from 'express';
import mongoose from 'mongoose';
import toolsModel from '../model/toolsModel.mjs';

const router = express.Router();
router.use(express.json());

// Middleware to validate request body
// const validateToolFields = (req, res, next) => {
//     const { name, category, description, link, tags } = req.body;
//     if (!name || !category || !description || !link) {
//         return res.status(400).json({
//             message: 'Send all fields',
//         });
//     }
//     next();
// };

// Error handler middleware
const errorHandler = (res, error) => {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
};

// Get All Tools
router.get('/', async (req, res) => {
    try {
        const tools = await toolsModel.find({});
        res.status(200).json({
            count: tools.length,
            data: tools,
        });
    } catch (error) {
        errorHandler(res, error);
    }
});

// Get Tool by ID
router.get('/:id', async (req, res) => {
    try {
        const tool = await toolsModel.findById(req.params.id);
        if (!tool) {
            return res.status(404).json({ message: 'Tool not found' });
        }
        res.status(200).json({
            data: tool,
        });
    } catch (error) {
        errorHandler(res, error);
    }
});

// Create New Tool
router.post('/', async (req, res) => {
    try {
        if (
            !req.body.name ||
            !req.body.category ||
            !req.body.owner ||
            !req.body.description ||
            !req.body.link
        ) {
            return res.status(400).send({
                message: 'Send all required fields',
            });
        }

        const newTool = {
            name: req.body.name,
            category: req.body.category,
            owner: req.body.owner,
            description: req.body.description,
            link: req.body.link,
        };

        console.log(newTool);

        const tool = await toolsModel.create(newTool);

        return res.status(201).send(tool);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

// Update Tool
router.put('/:id', async (req, res) => {
    try {
        const tool = await toolsModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!tool) {
            return res.status(404).json({ message: 'Tool not found' });
        }
        res.status(200).json({
            data: tool,
        });
    } catch (error) {
        errorHandler(res, error);
    }
});

// Delete Tool
router.delete('/:id', async (req, res) => {
    try {
        const tool = await toolsModel.findByIdAndDelete(req.params.id);
        if (!tool) {
            return res.status(404).json({ message: 'Tool not found' });
        }
        res.status(200).json({
            data: tool,
        });
    } catch (error) {
        errorHandler(res, error);
    }
});

export default router;