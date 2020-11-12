import mongoose from 'mongoose';

// An interface that describe properties that are required
// to create a new user
interface UserAttributes {
    email: string,
    password: string
};

// An interface that describes the properties
// that a UserModel has
interface UserModel extends mongoose.Model<UserDocument> {
    build(attributes: UserAttributes): UserDocument;
};

// An interface that describes the properties
// that a User Document has
interface UserDocument extends mongoose.Document {
    email: string,
    password: string
};

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

userSchema.statics.build = (attributes: UserAttributes) => {
    return new User(attributes);
};

const User = mongoose.model<UserDocument, UserModel>('User', userSchema);
export { User };