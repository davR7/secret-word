import './css/AppHeading.css';

const AppHeading = ({ title, subtitle, text }) => {
    const arr = subtitle.split(": ")
    
        return(
            <div className="heading">
                <h1 className="heading__title">{title}</h1>
                {arr.length === 2 ?
                    (<h4 className="heading__subtitle">{`${arr[0]}: `}
                        <span className="heading__highlighted-word"> {arr[1]}</span>
                    </h4>) :
                    (<h4 className="heading__subtitle">{arr[0]}</h4>)
                }
                {text ?
                    (<p className="heading__text">{text}</p>) :
                    (<></>)
                }
            </div>
        );
};

export default AppHeading;