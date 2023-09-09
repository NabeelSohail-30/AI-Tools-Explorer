import mongoose from "mongoose";

const toolsSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        link: {
            type: String,
            required: true,
        },
        owner: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const toolsModel = mongoose.model('tools', toolsSchema);

export default toolsModel;