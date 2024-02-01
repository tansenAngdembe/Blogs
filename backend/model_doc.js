require("dotenv").config()
const { Posts, Comments } = require("./Schema/posts")
const { User, Redirect_user } = require("./Schema/user")
const connection = require("./server")

const URI = process.env.URI_MONGOOSE;

const dataSample = {
    title: "Sample title",
    contentTypes: {
        introduction: "this is the sample of data collection",
        mainContent: "This is the main content",
        conclusion: "This is the conclusion"
    },
    comments: [{ body: "wonder full sample" }],
    vote: {
        likes: 23,
        unlikes: 1
    }

}
const dataCommentSample = {
    comments: "Wonder full blogs"

}
const dbConnection = async () => {
    try {
        await connection(URI)
        await Posts.create(dataSample)
        await Comments.create(dataCommentSample)
        //first, create underlying collection
        await User.createCollection()
        await Redirect_user.createCollection({
            viewOn: 'users', // Set `viewOn` to the collection name, **not** model name.
            pipeline: [
              {
                $set: {
                  name: { $concat: [{ $substr: ['$name', 0, 3] }, '...'] },
                  email: { $concat: [{ $substr: ['$email', 0, 3] }, '...'] }
                }
              }
            ]
        })
        await User.create([
            { name: 'John Smith', email: 'john.smith@gmail.com', password: "qwer12341235" },
            { name: 'Bill James', email: 'bill@acme.com', password: "qwerqwe" }
        ])

    console.log("Sucess")
} catch (error) {
    console.log(error)
}
}
dbConnection()