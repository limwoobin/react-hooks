import React , { useEffect } from 'react';
import './MainPage.scss';
import RecentBoard from './side/RecentPost';
import NoticePost from './side/NoticePost';
import XX from './side/XX';

const MainSide = () => {
    return (
        <div>
            <aside className="sc-csuQGl pDRpR">
                    <div className="sc-cHGsZl bHiaRe">
                        <div className="sc-TOsTZ eyrfCG">
                            <NoticePost />
                            <RecentBoard />
                            <XX />
                        </div>
                    </div>
                </aside>
        </div>
    )
}

export default MainSide;