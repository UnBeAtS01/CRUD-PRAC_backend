import mongoose from 'mongoose';
import autoincrement from 'mongoose-auto-increment';
const userSchema = mongoose.Schema({
    name: String,
    username: String,
    email: String,
    phone: Number
})
autoincrement.initialize(mongoose.connection);
userSchema.plugin(autoincrement.plugin, 'user');
export default mongoose.model('user', userSchema);