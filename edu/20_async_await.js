const timer = (str, ms = 500) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(str);
      if (str === "a" || str === "b" || str === "c") {
        resolve({ code: "허용", word: str });
      } else {
        reject(new Error("허용하지 않은 문자"));
      }
    }, ms);
  });
};

// async function test() {
//     await timer('a')
// }

const process = async () => {
  try {
    const result1 = await timer("a");
    console.log(result1.code, result1.word);

    const result2 = await timer("b");
    console.log(result2.code, result2.word);

    const result3 = await timer("d");
    console.log(result3.code, result3.word);
  } catch (error) {
    console.log(error.message);
  }
};
process();
