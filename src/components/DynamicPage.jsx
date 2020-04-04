import React from 'react';
import Layout from './Layout';
import '../sass/util.scss';
import Button from '@material-ui/core/Button';
import useStyle from './material';


const DynamicPage = () => {
  const classes = useStyle();
  return (
    <div className="root">
      <Layout>
        <h2>Dynamic Page</h2>
        <p>코드스플릿팅을 이용한 비동기페이지입니다.</p>
        <Button variant="contained" className={classes.root} color="primary">
          asdasd
        </Button>
      </Layout>
    </div>
  );
};

export default DynamicPage;