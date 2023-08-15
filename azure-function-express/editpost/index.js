const { PrismaClient } = require("@prisma/client");
const postClient = new PrismaClient().Post;

module.exports = async function (context, req) {
  try {
    const postId = req.params.id;
    const postData = req.body;
    console.log(postId);

    const post = await postClient.update({
      where: {
        id: postId,
      },
      data: postData,
    });

    context.res = {
      status: 200,
      body: post,
    };
  } catch (e) {
    console.log(e);
  }
};
