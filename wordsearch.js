const wordSearch = (letters, word) => {
  const transpose = function (matrix) {
    const result = [];
    for (let i = 0; i < matrix[0].length; i++) {
      let row = [];
      for (let j = 0; j < matrix.length; j++) {
        row.push(matrix[j][i]);
      }
      result.push(row);
    }
    return result;
  };

  const horizontalJoin = letters.map((ls) => ls.join(""));

  let horizonCheck = false;

  for (l of horizontalJoin) {
    if (l.includes(word)) {
      horizonCheck = true;
    }
  }

  let verticalCheck = false;
  const verticalJoin = transpose(letters).map((ls) => ls.join(""));
  for (l of verticalJoin) {
    if (l.includes(word)) {
      verticalCheck = true;
    }
  }
  return horizonCheck || verticalCheck;
};

module.exports = wordSearch;
