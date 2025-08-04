const typeConsole = (type = "log") => {
  if (type === "log") {
    return console.log(`Day la type ${type}`);
  } else if (type === "warn") {
    return console.warn(`Day la type ${type}`);
  } else if (type === "error") {
    return console.error(`Day la type ${type}`);
  } else {
    return console.log(`Type khong xac dinh`);
  }
};

typeConsole("log");
typeConsole("warn");
typeConsole("error");
typeConsole("abc");
