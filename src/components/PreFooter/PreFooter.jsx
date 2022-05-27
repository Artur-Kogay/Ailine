import React, { useState } from 'react';
import cl from './PreFooter.module.scss';

const PreFooter = () => {
    const [value, setValue] = useState('');

    return (
        <div className={cl.pre_footer}>
            <div className={cl.pre_footer2}>
                <div className={cl.pre_footer2_inner}>
                    <div className={cl.pre_footer2_inner_left}>
                        <h1>Things To Immediately Do About Subscribe Your Newsletter.</h1>
                    </div>
                    <div className={cl.pre_footer2_inner_right}>
                        <input type="email" placeholder='Your email address' value={value}
                            onChange={(e) => setValue(e.target.value)} />
                        <button>SUBSCRIBE</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PreFooter;