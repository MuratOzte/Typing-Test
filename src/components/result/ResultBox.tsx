import Nav from '../common/Nav';
import Details from './Details';
import Statistics from './Statistics';
import WpmBox from './WpmBox';

const ResultBox = () => {
    return (
        <div className="w-6/12 h-screen relative bg-slate-900">
            <Nav />
            <div className="flex justify-center ">
                <div className="w-5/6 flex text-4xl text-center mt-40 h-72 bg-slate-700 rounded-md shadow-xl">
                    <div className="flex flex-col w-1/2">
                        <WpmBox />
                        <Statistics />
                    </div>
                    <div className="w-1/2">
                        <Details />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResultBox;
