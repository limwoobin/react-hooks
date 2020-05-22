import React , { useEffect } from 'react';
import './MainPage.scss';
import RecentPost from './side/RecentPost';
import RecentNotice from './side/RecentNotice';
import XX from './side/XX';

const MainSide = () => {
    return (
        <div>
            <aside className="sc-csuQGl pDRpR">
                    <div className="sc-cHGsZl bHiaRe">
                        <div className="sc-TOsTZ eyrfCG">
                            <RecentNotice />
                            <RecentPost />
                            <XX />
                        </div>
                    </div>
                </aside>
        </div>
    )
}

export default MainSide;