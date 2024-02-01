const { Posts } = require("../Schema/posts")
const allUser = async (req, res) => {
    const allPost = await Posts.find({})
    res.status(200).send(allPost)
}

const addPost = async (req, res) => {
    try {
        const { title, introduction, mainContent, conclusion } = req.body;
        const newContent = {
            introduction:introduction,
            mainContent:mainContent,
            conclusion:conclusion
        }
        const addNewPost = new Posts({
            title: title,
            contentTypes: newContent
        })
        await addNewPost.save()
        
        // console.log(`title:${title} introduction:${introduction} `)
        res.status(200).send("Article sucessfully posted")
    } catch (error) {
        console.log(error)
    }
}
const updatePost = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, contentTypes } = req.body;
        const update = await Posts.findByIdAndUpdate(id);
        if (title) update.title = title;
        if (contentTypes) update.contentTypes = contentTypes
        await update.save()
        res.status(200).send("Article updated")
    } catch (error) {
        // console.log(error)
        res.status(400).send("Id not match")
    }
}
const deletePost = async (req, res) => {
    try {
        const { id } = req.params
        const deletePostById = await Posts.findByIdAndDelete(id);
        if (deletePostById.id === id) {
            res.status(200).send(`Post delete with id of ${id}`)
        } else {
            res.status(400).send('Please enter correct id')
        }
    } catch (error) {
        console.log(error)
    }
}
module.exports = {
    allUser,
    addPost,
    updatePost,
    deletePost
}