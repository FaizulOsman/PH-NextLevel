// null
const myText = (text: string | null): void => {
  if (text === null) {
    console.log("Here is no text");
  } else {
    console.log(text);
  }
};
myText(null);
myText("Hello");
