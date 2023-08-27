const ROOT_DIR = process.env.PWD;

const handleHome = (req, res) => {
  const filePath = `${ROOT_DIR}/public/index.html`;
  res.sendFile(filePath);
};

module.exports = { handleHome };
