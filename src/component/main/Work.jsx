import React from "react";
import works from "./works-data";
import CardWork from "./CardWork";


const Work = () => {




    return (

        <React.Fragment>

            <section className="work section" id="work">
                <h2 className="section-title">Work</h2>

                <div className="work__container bd-grid">
                    {
                        works.map(product => (
                            <div key={product.id} className="work_s">
                                <CardWork  product={product} />
                            </div>
                        ))
                    }
                </div>
            </section>
        </React.Fragment>
    )


}


export default Work;