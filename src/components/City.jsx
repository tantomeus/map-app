import { useParams } from "react-router";
import { useCities } from "../context/CitiesContext";
import { useEffect } from "react";
import styles from "./City.module.css";
import Loader from "./Loader";
import BackButton from "./BackButton";

export default function City() {
    const { id } = useParams();
    const {currentCity, getCity, isLoading} = useCities();

    function formatedDate(date) {
        return new Intl.DateTimeFormat("en", {
            month: "long",
            day: "numeric",
            year: "numeric"
        }).format(new Date(date));
    }

    useEffect(() => {
        getCity(id);
    }, [id, getCity])

    if (isLoading) return <Loader/>

    return <div className={styles.city}>
        <div className={styles.cityItem}>
            <h3>CITY NAME</h3>
            <p>{currentCity.cityName}</p>
        </div>
        <div className={styles.cityItem}>
            <h3>COUNTRY</h3>
            <p>{currentCity.country}</p>
        </div>
        <div className={styles.cityItem}>
            <h3>YOU WENT TO</h3>
            <p>{currentCity.date ? formatedDate(currentCity.date) : ""}</p>
        </div>
        <div className={styles.cityItem}>
            <h3>YOUR NOTE</h3>
            <p>{currentCity.notes}</p>
        </div>
        <BackButton/>
    </div>
}
