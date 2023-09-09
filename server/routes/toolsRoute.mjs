import express from 'express';
import toolsModel from '../model/toolsModel.mjs';

const router = express.Router();
router.use(express.json());

// Error handler middleware
const errorHandler = (res, error) => {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
};

// Middleware to check required fields for tool creation
const validateToolData = (req, res, next) => {
    const { name, category, owner, description, link } = req.body;
    if (!name || !category || !owner || !description || !link) {
        return res.status(400).json({ message: 'Send all required fields' });
    }
    next();
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
router.post('/', validateToolData, async (req, res) => {
    try {
        const newTool = {
            name: req.body.name,
            category: req.body.category,
            owner: req.body.owner,
            description: req.body.description,
            link: req.body.link,
        };

        const tool = await toolsModel.create(newTool);

        return res.status(201).send(tool);
    } catch (error) {
        errorHandler(res, error);
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
