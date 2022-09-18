import './css/AppHeading.css';

const AppHeading = ({ title, subtitle, text, vars }) => {
    return (
        <div className="heading">
            <h1 className="heading_title">{title}</h1>
            {subtitle ?
                (<h3 className="heading_subtitle">{subtitle}
                    {vars ?
                        (<span className="color-2">{vars}</span>) :
                        (<></>)
                    }
                </h3>) :
                (<></>)
            }
            {text ?
                (<p className="heading_text">{text}</p>) :
                (<></>)
            }
        </div>
    );
};

export default AppHeading;