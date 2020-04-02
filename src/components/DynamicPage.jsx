import React from 'react';
import Layout from './Layout';
import '../sass/util.scss';

const DynamicPage = () => {
  return (
    <div className="root">
      <Layout>
        <h2>Dynamic Page</h2>
        <p>코드스플릿팅을 이용한 비동기페이지입니다.</p>
      </Layout>
    </div>
  );
};

export default DynamicPage;