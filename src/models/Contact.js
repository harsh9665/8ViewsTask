import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: [true, 'Full name is required'],
            trim: true,
            maxlength: [100, 'Name too long'],
        },
        email: {
            type: String,
            required: [true, 'Email is required'],
            trim: true,
            lowercase: true,
            index: true,
            match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Invalid email'],
        },
        mobile: {
            type: String,
            required: [true, 'Mobile number is required'],
            trim: true,
            index: true,
        },
        message: {
            type: String,
            trim: true,
            maxlength: [1000, 'Message too long'],
            default: '',
        },

        source: {
            type: String,
            enum: [
                'contact_section',
                'modal_explore',
                'modal_lets_talk',
                'sticky_contact',
                'footer',
                'project_view',
                'news_updates',
                'client_reviews',
            ],
            default: 'contact_section',
        },
    },
    {
        timestamps: true, // adds createdAt + updatedAt automatically
    }
);

export default mongoose.models.Contact ||
    mongoose.model('Contact', ContactSchema);
