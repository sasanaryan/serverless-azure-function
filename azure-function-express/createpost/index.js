const { PrismaClient } = require("@prisma/client");
const postClient = new PrismaClient().Post;
process.on("uncaughtException", function (err) {
  console.log(err);
});
module.exports = async function (context, req) {
  const postData = req.body;
  try {
    const post = await postClient.create({ data: postData });
    context.res = {
      status: 200,
      body: post,
    };
  } catch (e) {
    console.log(e);
  }
};
