
const HANDLE_REGEX = /\@[\w]+/g;


export const tagStrategy = () =>{

}

export const usernameStrategy = (contentBlock, callback, contentState) => {
    matchString(HANDLE_REGEX, contentBlock,  callback)
}

const matchString  = (pattern, contentBlock, callback) => {
  const text = contentBlock.getText();
  let matchArr, start;
  while ((matchArr = pattern.exec(text)) !== null) {
    start = matchArr.index;
    callback(start, start + matchArr[0].length);
  }

}