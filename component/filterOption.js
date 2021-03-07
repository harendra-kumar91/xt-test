import Link from 'next/link';
import {useRouter} from 'next/router';
import styles from '../styles/Home.module.css';

const yearList = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];



const FilterOption = () => {
    const router = useRouter();

    function isActive(route) {
        console.log(route);
        if(route == router.pathname){
            return "activeBtn"
                
        }
        else {
            return ""
        }
    }
    



    return(
        <div className={styles.card}>
            <h1>Filters</h1>

            <div className={styles.filterType}>
            <h4>Launch Year</h4>
            </div>

            <ul className={styles.customUlBtn}>
            {yearList.map((yr,  yrKey) =>
                <li key={yrKey}>
                    <Link href={'/filter/[id]'} as={`/filter/${yr}`} >
                        <a><button type="button" className={`${styles.customBtn} ${isActive(`/filter/${yr}`)}`} >{yr}</button></a>
                    </Link>
                </li>
                ) 
            }
            </ul>

            <div className={styles.filterType}>
            <h4>Successful Launch</h4>
            </div>

            <ul className={styles.customUlBtn}>
                <li>
                    <Link href={'/filter/[id]'} as={`/filter/launch=true`} >
                        <a><button type="button" className={`${styles.customBtn} ${isActive(`/filter/launch=true`)}`} >True</button></a>
                    </Link>
                </li>
                <li>
                    <Link href={'/filter/[id]'} as={`/filter/launch=false`} >
                        <a><button type="button" className={`${styles.customBtn} ${isActive(`/filter/launch=false`)}`} >False</button></a>
                    </Link>
                </li>
            </ul>

            <div className={styles.filterType}>
            <h4>Successful Landing</h4>
            </div>
            
            <ul className={styles.customUlBtn}>
                <li>
                    <Link href={'/filter/[id]'} as={`/filter/landing=true`} >
                        <a><button type="button" className={`${styles.customBtn} ${isActive(`/filter/landing=true`)}`} >True</button></a>
                    </Link>
                </li>
                <li>
                    <Link href={'/filter/[id]'} as={`/filter/landing=false`} >
                        <a><button type="button" className={`${styles.customBtn} ${isActive(`/filter/landing=false`)}`} >False</button></a>
                    </Link>
                </li>
            </ul>
            
        </div>
    )
}  


export default FilterOption;