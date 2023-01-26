const getWebPage = async (url) => {
  let { spawn } = require("child_process");
  let processForPython = spawn("python", ["python_scripts/news.py", url], {
    maxBuffer: 10240000,
  });
sole.log
  let dataStream = [];

  return new Promise((resolve, reject) => {
    processForPython.stdout.on("data", (response) => {
      dataStream.push(response);
    });
    processForPython.stderr.on("data", (error) => {
      reject({
        error: `An error occurred while attempting to parse the web page: ${error.toString()}`,
      });
    });
    processForPython.on("exit", (code) => {
      switch (code) {
        case 0:
          if (dataStream ) {
            if (dataStream.length > 0) {
              try {
                try {
                  jsonData = JSON.parse(
                    dataStream.join().toString()
                  );
                } catch (exception) {
                  reject({
                    error: "An error occurred while parsing JSON object.",
                  });
                }
                if (typeof jsonData === "object") {
                  resolve(jsonData);
                }
              } catch (exception) {
                reject({
                  error:
                    "An error occurred while attempting to read page content.",
                });
              }
            } else {
              reject();
            }
          } else {
            reject();
          }
          break;
        case 1:
          reject({
            error: "Web page couldn't scraped.",
          });
          break;
      }
    });
  }).catch((error) => {
    return { error: "Web page couldn't scraped." };
  });
};

module.exports = getWebPage;
