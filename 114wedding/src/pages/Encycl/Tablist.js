import React from 'react';
import { withRouter } from 'react-router-dom';

import '../../css/encycl/Tablist.css'

const Tablist = ({ ele }) => {
    return (
        <>
            <section>

                <div className="tablist" key={ele.id}>
                    <div className="headline">
                        <span>{ele.text1}</span>
                        <strong>{ele.text2} &nbsp;></strong>
                    </div>
                    <div className="content">
                        <span>{ele.text3}</span>
                        <p>{ele.text4}</p>
                    </div>
                </div>


            </section>

        </>
    )
}

export default withRouter(Tablist)