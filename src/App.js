// import logo from './logo.svg';
import './App.scss';
// import proImage from './Assets/buterin.jpg'

function App() {
  return ( 
    <div className="App divide-y">
      <header className="flex h-12 divide-x">
        <div className="flex-none w-2/12 m-auto"><i class="fa fa-home"></i></div>
        <div className="flex-grow font-semibold m-auto text-left pl-4">
          Dashboard
          <select name="country" id="country" className="flex-none pr-4 mx-6 float-right border-2 border-gray-300 rounded-md">
            <option value="ENG">ENG</option>
          </select>
        </div>
      </header>
      {/* Side Bar */}
      <div className="flex body-height divide-x">
        <div className="flex flex-col w-2/12 divide-y">
          <div class="flex space-x-2">
            <div class="relative w-24 h-24 profileImage">
              <img class="rounded-full border border-gray-100 shadow-sm" src="https://randomuser.me/api/portraits/women/81.jpg" alt="Profile picture" />
              <div class="absolute bottom-0 right-0 my-0 h-8 w-8 border-4 border-white rounded-full bg-white z-2"><i class="far fa-sun"></i></div>
              <p className="font-semibold mt-2">Martha Blair</p>
              <div class="absolute my-0 rounded-full bg-green-500 z-2 userStatus"></div>
              <p className="text-xs text-gray-400">Developer</p>
            </div>
          </div>
          <div className="mt-8 pt-2 text-sm font-semibold">
            <a href="#" className="block text-left m-4 ml-8 text-gray-600">Dashboard</a>
            <a href="#" className="block text-left m-4 ml-8 text-gray-600">Page Visitors</a>
            <a href="#" className="block text-left m-4 ml-8 text-gray-600">Post Performance</a>
            <a href="#" className="block text-left m-4 ml-8 text-gray-600">Team Overall</a>
          </div>
          <div className="text-sm font-semibold">
            <a href="#" className="block text-left m-4 ml-8 text-gray-600">Calender</a>
          </div>
          <div className="text-sm font-semibold">
            <a href="#" className="block text-left m-4 ml-8 text-gray-600">Inbox</a>
          </div>
          <div className="text-sm font-semibold">
            <a href="#" className="block text-left m-4 ml-8 text-gray-600">Invoicing</a>
          </div>
          <div className="text-sm font-semibold">
            <a href="#" className="block text-left m-4 ml-8 text-gray-600">Lab / Experiment</a>
          </div>
          <div className="text-sm font-semibold sidebarSectionHeight">
            <p className="text-xs text-gray-300 ml-8 m-2 text-left">RECENTLY VIEWED</p>
            <a href="#" className="block text-left m-2 ml-8 text-gray-600 text-xs">Overall Performance</a>
            <a href="#" className="block text-left m-2 ml-8 text-gray-600 text-xs">Invoice #940</a>
            <a href="#" className="block text-left m-2 ml-8 text-gray-600 text-xs">Customer: Minerva Viewer</a>
          </div>
          <div className="text-sm font-semibold">
            <p className="text-xs text-gray-600 m-2 ml-8 text-left">Page: dribble.com/janlosert</p>
            <p className="text-xs text-gray-300 m-2 ml-8 text-left">575940-1811</p>
          </div>
        </div>
        {/* Body Area */}
        <div className="w-auto body body-width">
          <div className="m-4">
            Hello
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
