import React from 'react';
import '../styles/page.scss'

const Page = (props) => {
    return (
        <section className="page">
            { props.children }
        </section>
        );
};

export default Page;