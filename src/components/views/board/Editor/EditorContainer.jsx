// PostContainer.js 컴포넌트
import {
    compose, withHandlers,
  } from "recompose";
  // 에디터의 현재 콘텐츠 정보를 추출하는 함수 import
  import { convertToRaw } from "draft-js";
  // draftjs 콘텐츠를 html로 변환하는 함수 import
  import draftToHtml from "draftjs-to-html";
  // PostView 컴포넌트 import
  import EditorView from "./EditorView";
  
  export default compose(
    withHandlers({
      // 리액트드래프트위지윅 컴포넌트의 에디터 값이 변경될 때 호출되는 함수 정의
      handleEditorStateChange: (props) => (editorState) => {
        // 콘솔에 현재 에디터 값을 출력
        console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));
      },
    }),
  )(EditorView);