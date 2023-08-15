const { PrismaClient } = require("@prisma/client");
const postClient = new PrismaClient().Post;

module.exports = async function (context, req) {
  try {
    const allPosts = await postClient.findMany();

    context.res = {
      status: 200,
      body: allPosts,
    };
  } catch (e) {
    console.log(e);
  }
};
