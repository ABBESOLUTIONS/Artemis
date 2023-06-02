import React from 'react';
import Page from '../components/Pages';
import HeroComponent from '../components/HeroComponent';
import ConfidentialiteSection from '../sections/ConfidentialitePage/ConfidentialiteSection';

function Confidentialité() {
    return (
        <Page  title={'Confidentialité'}>
            <HeroComponent bigTitle={'Confidentialité'} littleTitle={''}/>
            <ConfidentialiteSection/>
        </Page>
    );
}

export default Confidentialité;