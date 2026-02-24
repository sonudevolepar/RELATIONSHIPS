const mongoose = require("mongoose");
const { Schema } = mongoose;

main()
  .then(() => console.log("Connection successful"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const userSchema = new Schema({
  username: String,
  email: String,
});

const postSchema = new Schema({
  content: String,
  likes: Number,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});

// Model names should match ref name
const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);

const getData = async () => {
let result = await Post.findOne({}).populate("user");
console.log(result);
};

getData();
//   // Find one existing user
//   let user1 = await User.findOne({ username: "rahulkumar" });

//   if (!user1) {
//     console.log("User not found! Create the user first.");
//     return;
//   }

//   // Create new post with user reference
//   let Post2 = new Post({
//     content: "Bye Bye :)",
//     likes: 23,
//     user: user1._id  // ✅ Correct reference
//   });

//   await Post2.save();
//   console.log("Post saved successfully!");
// };

//userData();