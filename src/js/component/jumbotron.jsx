import React from "react";

const Jumbotron = () => {
    return (
        <div className="mb-3 bg-light rounded-2 mx-4 mt-3">
            <div className="container-fluid p-5 text-start">
                <h1 className="fw-bold">A Warm Welcome!</h1>
                <p className="col-md-8 fs-4">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore facere distinctio voluptates quia officiis unde nobis neque veniam hic. Sequi totam laudantium, velit a quaerat deleniti blanditiis facere reiciendis cumque!
                </p>
                <button className="btn btn-primary btn-lg" type="button">
                    Call to action!
                </button>
            </div>
        </div>
    );
};

export default Jumbotron;