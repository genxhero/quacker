
const HANDLE_REGEX = /\@[\w]+/g; //eslint-disable-line  no-useless-escape
//Its a security blanket and I need it. Besides, it wasn't working without the escape so hardly useless.


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