// import logo from './logo.svg';
import './App.scss';
import CardChart from './Components/CardChart';
// import proImage from './Assets/buterin.jpg'
import DailyVisitors from './Components/DailyVisitors';
import SocialTraffic from './Components/SocialTraffic';
import VisitedPages from './Components/VisitedPages';

function App() {
  return ( 
    <div className="App divide-y">
      <header className="flex h-12 divide-x">
        <div className="flex-none w-64 m-auto hover"><i className="fa fa-home"></i></div>
        <div className="flex-grow font-semibold m-auto text-left pl-4 hover">
          Dashboard
          <select name="country" id="country" className="flex-none pr-4 mx-6 float-right border-2 border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-100">
            <option value="ENG">ENG</option>
          </select>
        </div>
      </header>
      {/* Side Bar */}
      <div className="flex body-height divide-x">
        <div className="flex-none flex-col w-64 divide-y side-links">
          <div className="flex space-x-2">
            <div className="relative w-24 h-24 profile-image">
              <img className="rounded-full border border-gray-100 shadow-sm" src="https://randomuser.me/api/portraits/women/10.jpg" alt="Profile picture" />
              <div className="absolute bottom-0 right-0 my-0 h-8 w-8 border-4 border-white rounded-full bg-white z-2"><i className="far fa-sun"></i></div>
              <p className="font-semibold mt-2">Martha Blair</p>
              <div className="absolute my-0 bottom-0 rounded-full bg-green-500 z-2 user-status"></div>
              <p className="text-xs text-gray-400">Developer</p>
            </div>
          </div>
          <div className="mt-8 pt-2 text-sm font-semibold">
            <a href="#" className="block text-left m-4 ml-8 text-gray-600 outline-none">
            <i className="fas fa-layer-group inline-block mr-4"></i>
              Dashboard</a>
            <a href="#" className="block text-left m-4 ml-16 text-gray-600 outline-none">Page Visitors</a>
            <a href="#" className="block text-left m-4 ml-16 text-gray-600 outline-none">Post Performance</a>
            <a href="#" className="block text-left m-4 ml-16 text-gray-600 outline-none">Team Overall</a>
          </div>
          <div className="text-sm font-semibold text-left mx-6">
            <a href="#" className="inline-block m-4 ml-2 text-gray-600 outline-none">
            <i className="fas fa-calendar-check inline-block mr-4"></i>
              Calender</a>
          </div>
          <div className="text-sm font-semibold text-left mx-6">
            <a href="#" className="inline-block m-4 ml-2 text-gray-600 outline-none">
            <i className="fas fa-inbox inline-block mr-4"></i>
              Inbox</a>
          </div>
          <div className="text-sm font-semibold text-left mx-6">
            <a href="#" className="inline-block m-4 ml-2 text-gray-600 outline-none">
            <i className="fas fa-file-invoice-dollar inline-block mr-4"></i>
              Invoicing</a>
          </div>
          <div className="text-sm font-semibold text-left mx-6">
            <a href="#" className="inline-block m-4 ml-2 text-gray-600 outline-none">
            <i className="fas fa-flask inline-block mr-4"></i>
              Lab / Experiment</a>
          </div>
          <div className="text-sm font-semibold sidebar-section-height mx-6">
            <p className="text-xs text-gray-400 m-3 mt-6 ml-0 text-left">RECENTLY VIEWED</p>
            <a href="#" className="block text-left m-3 ml-0 text-gray-600 text-xs outline-none">Overall Performance
            <i className="fas fa-long-arrow-alt-right float-right text-gray-400"></i></a>
            <a href="#" className="block text-left m-3 ml-0 text-gray-600 text-xs outline-none">Invoice #940
            <i className="fas fa-long-arrow-alt-right float-right text-gray-400"></i></a>
            <a href="#" className="block text-left m-3 ml-0 text-gray-600 text-xs outline-none">Customer: Minerva Viewer
            <i className="fas fa-long-arrow-alt-right float-right text-gray-400"></i></a>
          </div>
          <div className="text-sm font-semibold object-bottom ">
            <p className="text-xs text-gray-600 m-2 ml-8 text-left">Page: dribble.com/janlosert</p>
            <p className="text-xs text-gray-400 m-2 ml-8 text-left">575940-1811</p>
          </div>
        </div>
        {/* Body Area */}
        <div className="w-auto body body-width">
          <div className="m-8 space-y-8">
            <DailyVisitors></DailyVisitors>
            <div className="my-8 flex flex-wrap space-x-8">
              <CardChart title="REALTIME USERS" count="56" percentage="+9.8" sparklineColor="#367ADD" sparklineData={[20, 15, 21, 18, 12, 16, 11, 8, 14, 18, 17, 14, 20]}></CardChart>
              <CardChart title="TOTAL VISITS" count="54,598" percentage="-11.9" red="true" sparklineColor="#3EAE4E" sparklineData={[20, 15, 8, 14, 18, 17, 14, 21, 18, 12, 16, 19, 5]}></CardChart>
              <CardChart title="BOUNCE RATE" count="73.67%" percentage="+12.2" sparklineColor="#6E5FF4" sparklineData={[20, 15, 8, 14, 18, 17, 14, 21, 18, 12, 16, 11, 20]}></CardChart>
              <CardChart title="VISIT DURATION" count="1m 4s" percentage="+19.6" sparklineColor="#FAD05C" sparklineData={[17, 14, 21, 18, 20, 15, 12, 14, 18, 12, 16, 11, 20]}></CardChart>
            </div>
            <div className="my-8 flex flex-wrap space-x-8">
              <VisitedPages></VisitedPages>
              <SocialTraffic></SocialTraffic>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
