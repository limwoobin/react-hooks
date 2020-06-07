// PostView.js 컴포넌트
import React from "react";
// 리액트드래프트위지윅에서 Editor 컴포넌트 import
import { Editor } from "react-draft-wysiwyg";
// 리액트스트랩에서 Container 컴포넌트 import (Container는 좌/우에 일정 마진을 준 컴포넌트)
import { Container } from "reactstrap";
import PropTypes from "prop-types";
import './editor.css';

const EditorView = ({ handleEditorStateChange }) => (
  <Container>
    <p />
    <div className="demo-section">
      {/* 에디터 컴포넌트 */}
      <Editor
        // css Wrapper class name
        wrapperClassName="demo-wrapper"
        // css editor class name
        editorClassName="demo-editor"
        // language 설정
        localization={{
          locale: "ko",
        }}
        // 에디터 상단에 표시될 toolbar 설정
        toolbar={{
          inline: { inDropdown: true },
          list: { inDropdown: true },
          textAlign: { inDropdown: true },
          link: { inDropdown: true },
          history: { inDropdown: true },
        }}
        // 에디터 값이 변경될 때 호출될 함수 정의
        onEditorStateChange={handleEditorStateChange}
      />
    </div>
  </Container>
);

EditorView.propTypes = {
  handleEditorStateChange: PropTypes.func.isRequired,
};

export default EditorView;