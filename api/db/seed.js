const { Category, BookMark, db } = require("./index");

const seed = async () => {
  try {
    await db.sync({ force: true });

    const [code, search, jobs] = await Promise.all([
      Category.create({ name: "code" }),
      Category.create({ name: "search" }),
      Category.create({ name: "jobs" }),
    ]);

    await Promise.all([
      BookMark.create({
        name: "Google",
        url: "https://www.google.com/",
        categoryId: search.id,
      }),
      BookMark.create({
        name: "StackOverflow",
        url: "https://www.stackoverflow.com/",
        categoryId: code.id,
      }),
      BookMark.create({
        name: "Bing",
        url: "https://www.bing.com/",
        categoryId: search.id,
      }),
      BookMark.create({
        name: "LinkedIn",
        url: "https://www.linkedin.com/",
        categoryId: jobs.id,
      }),
      BookMark.create({
        name: "Indeed",
        url: "https://www.indeed.com/",
        categoryId: jobs.id,
      }),
      BookMark.create({
        name: "MDN",
        url: " https://developer.mozilla.org/en-US/",
        categoryId: code.id,
      }),
    ]);
  } catch (error) {
    console.log(error);
    db.close();
  }
};

seed();