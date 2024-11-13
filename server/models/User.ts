import mongoose, { Document, Model, Schema } from "mongoose";

interface IUser extends Document {
  name: string;
  email: string;
  password: string; 
  _id: mongoose.Types.ObjectId; 
}
const UserSchema: Schema<IUser> = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      index: true, 
    },
    password: {
      type: String,
      required: true, 
    },
  },
  {
    timestamps: true, 
  }
);


const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>("User", UserSchema);

export default User;
