import React from 'react';
import cl from './Skill.module.scss';

const Skill = () => {
    return (
        <div className={cl.skill}>
            <div className={cl.skill_left}>
                <h5>Our Skill company</h5>
                <h1>Biggest Skill <span> Mistakes You Can It-Service </span>Easily Avoid.</h1>
                <div className={cl.left_border}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat provident blanditiis quidem deleniti eligendi similique dolores repellendus saepe, nostrum suscipit quia maiores nam? Dolorem, tempora voluptatibus facere incidunt nulla aperiam.</p>
                </div>
                <h4>Excellence in Things We Are Skill Company</h4>
                <p>we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of.</p>
                <div className={cl.progress}>
                    <div className={cl.progress_first}>
                        <div className={cl.progress_first_text_block}>
                            <span>Our Service</span>
                            <span>90%</span>
                        </div>
                        <div className={cl.progress_first_line}>
                            <div className={cl.progress_first_line_inner_90}></div>
                        </div>
                    </div>
                    <div className={cl.progress_first}>
                        <div className={cl.progress_first_text_block}>
                            <span>Projects Complete</span>
                            <span>75%</span>
                        </div>
                        <div className={cl.progress_first_line}>
                            <div className={cl.progress_first_line_inner_75}></div>
                        </div>
                    </div>
                    <div className={cl.progress_first}>
                        <div className={cl.progress_first_text_block}>
                            <span>IT-Solution</span>
                            <span>92%</span>
                        </div>
                        <div className={cl.progress_first_line}>
                            <div className={cl.progress_first_line_inner_92}></div>
                        </div>
                    </div>
                </div>
                <button>Read More</button>
            </div>
            <div className={cl.skill_right}/>
        </div>
    );
};

export default Skill;