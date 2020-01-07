import React from 'react';
import { withRouter } from 'react-router-dom';

import '../../css/home/tabs.css'

const Tabs = () => {
    return (
        <>
            <section>
                <div className="tabVideo">
                    <div className="video"></div>
                    <div className="title">
                        <span>婚纱影楼</span>
                        <p>【总监定制】场景任选+底片全送</p>
                    </div>
                    <div className="site">天河区&nbsp; | &nbsp;广州钟爱一生</div>
                </div>
            </section>

        </>
    )
}

export default withRouter(Tabs)