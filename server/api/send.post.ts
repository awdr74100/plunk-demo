import Plunk from "@plunk/node";

export default defineEventHandler(async () => {
  const key = "sk_0df74a895d64681d069dc4d88cab95a2410caf5eaaac3e0f"; // no longer valid at this time
  const plunk = new Plunk(key);

  try {
    const res = plunk.emails.send({
      to: "a78945612385238@gmail.com",
      body: "Content!",
      subject: "Title!",
    });

    console.log(res);
  } catch (error) {
    console.log(error);

    throw error;
  }
});
