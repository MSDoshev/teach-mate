const mongoose = require("mongoose");

const options = { discriminatorKey: "role", timestamps: true };

const UserSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    username:{type: String, unique: true, required: true},
    age: { type: Number, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role:{type:String, required:true}
  },
  options
);

const User = mongoose.model("User", UserSchema);

const TeacherSchema = new mongoose.Schema({
  subjects: { type: Array, required: true },
  yearsOfExperiense: { type: Number, required: true },
  location: { type: String, required: true },
  workPlace: { type: String },
  phoneNumber: { type: String, required: true },
});

const Teacher = User.discriminator("Teacher", TeacherSchema);

const StudentSchema = new mongoose.Schema({
  grade: { type: Number, required: true },
  school: { type: String },
});
const Student = User.discriminator("Student", StudentSchema);

const ParentSchema = new mongoose.Schema({
  children: [{ type: mongoose.Schema.Types.ObjectId, ref: "Student" }],
  phoneNumber: { type: String, required: true },
});

const Parent = User.discriminator("Parent", ParentSchema);

const AdminSchema = new mongoose.Schema({
  roleLevel: { type: Number, default: 1 },
});
const Admin = User.discriminator("Admin", AdminSchema);


module.exports = { User, Teacher, Student, Parent, Admin };
