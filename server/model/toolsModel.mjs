import mongoose from "mongoose";

const { Schema } = mongoose;

const toolsSchema = new Schema(
    {
        name: String,
        category: String,
        description: String,
        link: String,
    },
    {
        timestamps: true,
    }
);

const toolsModel = mongoose.model('tools', toolsSchema);

export default toolsModel;