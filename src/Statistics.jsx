import '../src/css/stats.css';

import Data from './json/data.json';

function Statistics() {
	const data = Data;

	return (
		<section className="statistics">
			<h2 className="title">Upload stats</h2>

			 <ul className="stat-list">
                {
                    data.map((element) => (
                        <li className="item" key={element.id}>
                            <span className='label'>
                                {element.label}
                            </span>

                             <span className='percentage'>
                                {element.percentage}%
                            </span>
                        </li>
                    ))
                }
             </ul>
		</section>
	);
}

export default Statistics;
