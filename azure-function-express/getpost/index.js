const { PrismaClient } = require("@prisma/client");
const postClient = new PrismaClient().Post;

module.exports = async function (context, req) {
  try {
    const postId = req.params.id;
    const post = await postClient.findUnique({
      where: {
        id: postId,
      },
    });
    context.res = {
      status: 200,
      body: post,
    };
  } catch (e) {
    console.log(e);
  }
};
