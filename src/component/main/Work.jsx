import React from "react";
import WorkCard from './WorkCard';
import works from "./works-data";

const Work = () => {




    return (

        <React.Fragment>

            <section className="work section" id="work">
                <h2 className="section-title">Work</h2>

                <div className="work__container bd-grid">
                    {
                        works.map(product => (

                            <WorkCard key={product.id} product={product} />

                        ))
                    }
                </div>
            </section>
        </React.Fragment>
    )


}


export default Work;