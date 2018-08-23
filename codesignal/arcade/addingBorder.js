// https://app.codesignal.com/arcade/intro/level-4/ZCD7NQnED724bJtjN
//

const addBorder = picture => {
  const breadth = picture[0].length + 2;
  const newPicture = picture.map(e => `*${e}*`).concat("*".repeat(breadth));
  newPicture.splice(0, 0, "*".repeat(breadth));
  return newPicture;
};
