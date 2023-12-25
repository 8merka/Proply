// SelectFilter.js
import React from 'react';
import './SelectFilter.scss';

export function SelectFilter(props) {
    const handleSelectChange = (event) => {
        props.onChange(event.target.value);
    };

    return (
        <div className={`selectFilter__block ${props.styleSelectFilter}`}>
            <select
                className={`selectFilter__block__select`}
                value={props.value}
                onChange={handleSelectChange}
            >
                <option
                    className={`selectFilter__block__select__optionName`}
                    value="0"
                >
                    {props.optionWordName}
                </option>
                <option
                    className={`selectFilter__block__select__optionFirst`}
                    value="1"
                >
                    {props.optionWord}
                </option>
                <option
                    className={`selectFilter__block__select__optionSecond`}
                    value="2"
                >
                    {props.optionWord2}
                </option>
                <option
                    className={`selectFilter__block__select__optionThird`}
                    value="3"
                >
                    {props.optionWord3}
                </option>
                <option
                    className={`selectFilter__block__select__optionFourth`}
                    value="4"
                >
                    {props.optionWord4}
                </option>
            </select>
        </div>
    );
}


// import React from 'react';
// import './SelectFilter.scss';

// export function SelectFilter(props) {
//     return (
//         <div className={`selectFilter__block ${props.styleSelectFilter}`}>
//             <select className={`selectFilter__block__select`}>
//                 <option className={`selectFilter__block__select__optionName`}
//                     value={props.value}>{props.optionWordName}</option>
//                 <option className={`selectFilter__block__select__optionFirst`}
//                     value={props.value}>{props.optionWord}</option>
//                 <option className={`selectFilter__block__select__optionSecond`}
//                     value={props.value2}>{props.optionWord2}</option>

//             </select>
//         </div>
//     );
// }

