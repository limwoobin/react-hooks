import React from 'react';
import './MainPage.scss';
import MainSide from './MainSide';
import MyProfile from '../../MyProfile/MyProfile';
import Sex from '../../../study/hooksUseConfirm';


const MainPage = () => {
    return (
        <div className="sc-fjdhpX iqwyib">
            <div className="sc-jlyJG lpgbkm">
                <main className="sc-gipzik BAccj">
                    <div className="sc-eqIVtm gLLJLX">
                        {/* <MyProfile /> */}
                        <Sex />
                    </div>
                </main>
                <MainSide />
            </div>
        </div>
    )
}

export default MainPage;