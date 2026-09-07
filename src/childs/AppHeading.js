import './css/AppHeading.css';

const AppHeading = ({ prefix, title, description }) => {
    return(
        <div className="heading">
            <h1 className="title">
                {prefix && (<span className="title__prefix">{prefix}</span>)}
                <span className="title__main">{title}</span>
            </h1>
            <div className="heading__wrapper flex-row-xy">
                <p className="heading__description">{description}</p>
            </div>
        </div>
    );
};

export default AppHeading;