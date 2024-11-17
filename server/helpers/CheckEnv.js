const ChangeENV = () => {
  if (process.env.NODE_ENV === "production") {
    console.log(process.env.PROD_ENV);
  } else {
    console.log(process.env.DEV_ENV);
  }
};
module.exports = ChangeENV;
