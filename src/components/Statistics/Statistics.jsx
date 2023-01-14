import PropTypes from "prop-types";
import styleStat from './statistics.module.css';

const Statistics = ({ title, stats }) => {
    const elements = stats.map(item => {const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        return (<li key={item.id} style={{ backgroundColor: `#${randomColor}` }} className={item.label} >
            <span className="label">{item.label}</span>
            <span className="percentage">{item.percentage}%</span>
        </li>)
    });

    return <section className={styleStat.statistics}>
                <h2 className="title">{ title }</h2>

                <ul className={styleStat.statlist}>
                    {elements}
                </ul>
            </section>
}


export default Statistics;

Statistics.defaultProps = {
    data: [],
}

Statistics.propTypes = {
    data: PropTypes.arrayOf(PropTypes.number),
}