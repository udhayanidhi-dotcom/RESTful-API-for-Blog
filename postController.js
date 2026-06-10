let posts = [
    {
        id: 1,
        title: "Welcome to Blog API",
        content: "This is the first blog post."
    }
];

exports.getPosts = (req, res) => {
    res.json(posts);
};

exports.getPostById = (req, res) => {
    const post = posts.find(p => p.id == req.params.id);

    if (!post) {
        return res.status(404).json({ message: "Post not found" });
    }

    res.json(post);
};

exports.createPost = (req, res) => {
    const newPost = {
        id: posts.length + 1,
        title: req.body.title,
        content: req.body.content
    };

    posts.push(newPost);
    res.status(201).json(newPost);
};

exports.updatePost = (req, res) => {
    const post = posts.find(p => p.id == req.params.id);

    if (!post) {
        return res.status(404).json({ message: "Post not found" });
    }

    post.title = req.body.title;
    post.content = req.body.content;

    res.json(post);
};

exports.deletePost = (req, res) => {
    posts = posts.filter(p => p.id != req.params.id);
    res.json({ message: "Post deleted successfully" });
};