import React,{useState} from 'react';

import rules from '../../images/image-rules.svg';

import './Rules.scss'

const Rules = () => {
    const [showRules,setShowRules] = useState(false);

    return (
        <div className='game__rules'>

            {
                showRules
                    ? (
                        <div className='game__rules-show' onClick={()=>setShowRules(!showRules)}>
                            <img src={rules} alt="rules"/>
                        </div>
                    )
                    :<button onClick={()=>setShowRules(!showRules)}>rules</button>
            }

        </div>
    );
};

export default Rules;
