import React, { useState, useEffect } from 'react';

import styles from '../styles/Home.module.css';
import FilterOption from '../component/filterOption';


const SpaceLaunch = respData => {
    // const [respData, setRespData] = useState(prop);
    const [windowSize, setWindowSize] = useState(700);

    useEffect(() => {

        // Handler to call on window resize
        function handleResize() {
        // Set window width to state
        setWindowSize(window.innerWidth);
        }

        // Add event listener
        window.addEventListener("resize", handleResize);

        // Call handler right away so state gets updated with initial window size
        handleResize();

        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    })


    
      

    return(
        <>
            <div className={styles.customRow}>
                <h2>SpaceX Launch Programs</h2>
            </div>

            <div className={styles.customRow}>
                <div className={styles.customCol2}>
                    <FilterOption />
                </div>

                <div className={styles.customCol10}>

                    {respData.data != null && respData.data != undefined & respData.data != "" ? 
                        respData.data.length > 0 ?
                            respData.data.map((value,  key) =>

                                    <div key={key} className={styles.customCol3}>
                                    <div className={styles.card}>
                                        <div className={styles.cardDivImg}>
                                        <img src={windowSize <= 1024 ? value.links.mission_patch_small : value.links.mission_patch } alt={windowSize}  />
                                        </div>

                                        <h2>{value.mission_name} #{value.flight_number}</h2>
                                        <h3>Mission Ids:</h3>
                                        <ul>
                                            {value.mission_id.map((ids, idsKey) => 
                                            <li key={idsKey}>{ids}</li>
                                            )}
                                        </ul>
                                        <h3>Launch Year: <span>{value.launch_year}</span></h3>
                                        <h3>Successful Launch: <span>{value.launch_success ? 'true': 'false'}</span></h3>
                                        <h3>Successful Landing: <span>{value.launch_landing}</span></h3>
                                    </div>
                                    </div>
                                ) 
                        : 
                            <p>There is no data to display.</p>
                        : 
                        <p>There is no data to display.</p>
                    }
                
                </div>
            </div>
            

            <div className={styles.customRow}>
                <div className={styles.customCol12}>
                <p className={styles.developerName}><b>Developed by:</b> Harendra Kumar</p>
                </div>
            </div>
        </>
    )
}

export default SpaceLaunch;