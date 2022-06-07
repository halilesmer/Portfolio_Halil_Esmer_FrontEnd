import mongoose from "mongoose";

const aboutSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please provide a title"],
    },
    description_1: {
        type: String,
        required: [true, "Please provide a text"],
    },
    contact_1: {
        type: String,
        required: [true, "Please provide a text"],
    },
    cvpdf: {
        type: String,
        required: [true, "Please provide an CV"],
    }
});

const AboutSchema = mongoose.model("about", aboutSchema);

export default  AboutSchema;
