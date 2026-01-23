import favicon from "./extensions/favicon.ico";

const config = { head: { favicon } };

const bootstrap = (app) => {
  console.log("bootstrap", app);
};

export default {
  config,
  bootstrap,
};
