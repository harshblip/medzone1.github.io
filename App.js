
import './App.css';
import './output.css';
import mapImage from './images/map.png';
import './styles.css';
// import heart from './assets/heart.svg';

function App() {
  return (
    <div className="App bg-greey">
      <div class=" w-full max-h-screen relative">
    <div class="mt-5 py-4 w-full bgnav rounded-full fixed">
      <div class="relative">
        <div class="px-10 flex flex-row cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon-tabler icon-tabler-medical-cross" width="60" height="60"
            viewBox="0 2 24 24" stroke-width="2" stroke="#000000" fill="none" stroke-linecap="round"
            stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              d="M13 3a1 1 0 0 1 1 1v4.535l3.928 -2.267a1 1 0 0 1 1.366 .366l1 1.732a1 1 0 0 1 -.366 1.366l-3.927 2.268l3.927 2.269a1 1 0 0 1 .366 1.366l-1 1.732a1 1 0 0 1 -1.366 .366l-3.928 -2.269v4.536a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-4.536l-3.928 2.268a1 1 0 0 1 -1.366 -.366l-1 -1.732a1 1 0 0 1 .366 -1.366l3.927 -2.268l-3.927 -2.268a1 1 0 0 1 -.366 -1.366l1 -1.732a1 1 0 0 1 1.366 -.366l3.928 2.267v-4.535a1 1 0 0 1 1 -1h2z" />
          </svg>
          <div class="flex divide-x-2 divide-gray-600">
            <div>
              <nav class="font-secularone">
                <p class=" text-4xl ml-3 mr-8 mt-2 font-semibold cursor-pointer text-black"> MedZone </p>
              </nav>
            </div>
            <div class="px-10 mt-2 text-4xl font-popi">
              Your Doctors
            </div>

          </div>
        </div>
      </div>
      <div class="fixed py-28">
        <div class="flex flex-col px-6">
          <div class="ml-10 px-3 py-20 lg:px-20 xl:px-3 bg-white shadow-lg rounded-xl mt-10">
          <p class="font-semibold font-web text-xl mb-2"> Write your symptoms </p>
            <input type="text" placeholder="cough cold ?" class="input lg:px-6 px-1 -ml-2 font-popi  " style = {{textAlign: 'center'}}/>
            <button class = "py-3 px-6 ml-4 font-popi font-semibold rounded-lg bg-slate-500 text-white"> Add </button>
            <p class="font-semibold -ml-10 font-web text-xl mt-10 mb-2"> Your Location </p>
            <input type="text" placeholder="Hawkins, Indiana" class="input px-1 lg:px-6 -ml-2 font-popi" style = {{textAlign: 'center', marginLeft: '10px'}} />
            <button class = "py-3 px-5 ml-4 font-popi font-semibold rounded-lg bg-slate-500 text-white"> Submit </button>
          </div>
        </div>
      </div>
    </div>

    <div class = "relative py-32 mr-5 flex md:mr-32 justify-end items-end">
      <div class="mr-24">
        <div class="fixed dropdown dropdown-left px-1">
          <label tabindex="0" class="btndropdown px-16 ml-6 font-popi font-semibold m-1"> Sort </label>
          <ul tabindex="0" class="dropdown-content menu shadow bg-base-100 rounded-box px-10">
            <li><a class="sort1 font-popi"> Relief </a></li>
            <li><a class="sort1 font-popi"> Distance </a></li>
            <li><a class="sort1 font-popi"> Symptoms Matched </a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class = "flex md:justify-end md:items-end lg:ml-40 xl:justify-center xl:items-center">
      <div class = "ml-48 grid grid-cols-2 md:-mr-24 xl:grid xl:grid-cols-2 md:transition md:grid md:grid-cols-1 gap-24 px-32">
        <div class = "cardnew -mt-56" style={{textAlign: 'left'}}>
          <div class="rounded-lg shadow-xl flex flex-col card-background image image-1 codepen relative">
            <div class = "inline-flex text-2xl font-semibold mt-4 ml-4">
              <p class = "font-montes"> Niraj Jain  </p>
              <div class = "text-sm mt-3 ml-1">
                (He/Her)
              </div>
              {/* <div class="radial-progress ml-28 justify-end" style="--value:65; font-size: medium;">65%</div> */}
            </div>
            <div class = "font-popi-200 mt-5 flex justify-start ml-5">
              <p> Age: &nbsp; 18 </p>
            </div>
            <div class = "font-web font-semibold text-xl mt-4 ml-5">
              <p> Fever, cough, cold, breathlessness, red eye, weakness </p>
            </div>
            <div class = "map-responsive font-popi mt-4 ml-4">
              <div class = "inline-flex space-x-5 justify-start items-start">
              <img src={mapImage} alt="" height="30" width="30" class = ""/>
              <a href=" https://goo.gl/maps/UvwzYjnb2v81gBUN8" class = "location-button"> Location </a>
            </div>
            <div>
              <div class = "inline-flex mt-5">
                <p class = "font-web font-semibold"> 273km </p>
              <p class = "font-web ml-4"> away </p>
              <p class = "font-web ml-28"> ~ Manant Tyagi (24 M) </p>
              </div>
              
            </div>
            </div>
              
          </div>
          <div class="image image-2">
            <div class="content codepen">
              <div class = "flex flex-col">
              <p class = "font-montes"> Waah kya aadmi hai, badiya treat karta hai ekdm </p> 
                <p class = "flex justify-end font-web"> ~ Runit Sharma </p>
                <p class = "font-montes"> Loda dard de rha tha, chus ke theek krdiya  </p> 
                <p class = "flex justify-end font-web"> ~ Manant Tyagi </p>
              </div>
            </div>
          </div>
        </div>
      </div>
     </div>
  </div>
</div>
      );
}

      export default App;
