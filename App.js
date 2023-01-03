
import './App.css';
import './output.css';
import React, { useEffect, useState } from "react";
import { styled } from '@mui/material/styles';
import mapImage from './images/map.png';
import doctor from './images/doctor.png';
import call from './images/call.png';
import covid from './images/fever(1).png';
import distance from './images/social-distancing(1).png';
import photo from './images/photo.jpg';
import add from './images/plus-solid.svg';
import './styles.css';
import { CircularProgressbar } from './react-circular-progressbar';
import './react-circular-progressbar/dist/styles.css';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { useFormControl } from '@mui/material/FormControl';
import heart from './images/Cardiologist.gif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SocialFollow from "./SocialFollow"
import { FormControl } from '@mui/material';
import Collapsible from './expandButton';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { createTheme } from '@mui/material';
const theme = createTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      '"web"'
    ].join(','),
  },
});



function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="App">
      <div class="bg-greey w-full h-screen">
        <div class="bg-white fixed w-full top-0 z-50">
          <div class="py-10 right-0 left-0 z-10 w-full">
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
                <div class="px-10 mt-2 text-4xl font-kaushan">
                  Your Doctors
                </div>

              </div>
            </div>
            <hr
              style={{
                background: 'gray',
                color: 'black',
                borderColor: 'gray',
                height: '1px',
                marginTop: '10px',
              }}
            />
          </div>
        </div>
        <div class="fixed py-44">
          <div class="px-6">
            <div class="ml-10 px-20 py-32 rounded-2xl border-4 sidebarbg mt-1">
              <p class="flex justify-center font-pacifico text-7xl -mt-16"> Fillup!</p>
              <p class="font-semibold font-web text-xl mt-24"> Write your symptoms </p>
              <div class="mt-4 flex flex-row">
                <FormControl>
                  <TextField
                    sx={{
                      width: 268,
                      borderRadius: 90,
                      fontFamily: 'Sans'
                    }}
                    id="outlined-basic" label="cold, fever..." variant="outlined" size='200px' />
                </FormControl>
                {/* <img src = {}> */}
              </div>
              <button class="py-3 px-5 ml-4 mt-4 font-popi font-semibold rounded-lg bg-slate-500 text-white"> Add </button>
              <p class="font-semibold -ml-10 font-web text-xl mt-10 mb-2"> Your Location </p>
              <div class="mt-4">
                <FormControl>
                  <TextField
                    sx={{
                      width: 268,
                      borderRadius: 90,
                      fontFamily: 'Sans'
                    }}
                    id="outlined-basic" label="Hawkins, Indiana" variant="outlined" size='200px' />
                </FormControl>
              </div>
              <button class="py-3 px-5 ml-4 mt-4 font-popi font-semibold rounded-lg bg-slate-500 text-white"> Submit </button>
            </div>
          </div>
        </div>

        <div class="py-40 mr-5 flex md:mr-32 justify-end items-end">
          <div class="mr-24">
            <div class="fixed dropdown dropdown-left px-1">
              <label tabindex="0" class="btndropdown px-16 -ml-10 font-popi font-semibold m-1"> Sort </label>
              <ul tabindex="0" class="dropdown-content menu shadow bg-base-100 rounded-box px-10">
                <li><a class="sort1 font-popi"> Relief </a></li>
                <li><a class="sort1 font-popi"> Distance </a></li>
                <li><a class="sort1 font-popi"> Symptoms Matched </a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="mt-16 flex xl:justify-center xl:items-end lg:ml-40">
          <div class="ml-48 grid grid-cols-1 md:-mr-24 xl:grid xl:grid-cols-1 md:transition md:grid md:grid-cols-1 gap-1 px-32">
            <div>
              <div class="absolute cardnew -mt-80" style={{ textAlign: 'left' }}>
                <div class="rounded-xl shadow-xl flex flex-col card-background image image-1 codepen relative">
                  <div class="inline-flex text-2xl font-semibold mt-7 ml-10">
                    <img src={doctor} alt="" height="30" width="30" class="mr-2" />
                    <p class="font-montes"> Niraj Jain  </p>
                    <div class="text-sm mt-3 ml-1">
                      (He/Her)
                    </div>
                    {/* <div class="radial-progress ml-28 justify-end" style="--value:65; font-size: medium;">65%</div> */}
                  </div>
                  <div class="font-web flex flex-row font-semibold text-xl mt-7 ml-10">
                    <img src={covid} alt="" height="26" width="28" class="mr-2" />
                    <p class="ml-1"> Fever, cough, cold, weakness </p>
                  </div>
                  <div class="map-responsive font-popi mt-6 ml-9">
                    <div class="inline-flex justify-start items-start">
                      <img src={mapImage} alt="" height="30" width="30" class="" />
                      <a href=" https://goo.gl/maps/UvwzYjnb2v81gBUN8" class="location-button ml-4"> Near New Mantri, Bhopal </a>
                      <img src={call} alt="" height="26" width="28" class="ml-8" />
                      <p class="font-web font-bold ml-2  text-lg"> +91 - 9392549352 </p>
                    </div>

                    <div class="mt-4">
                      <hr
                        style={{
                          background: 'gray',
                          color: 'black',
                          borderColor: 'gray',
                          height: '1px',
                          marginTop: '10px',
                        }}
                      />
                      <div class="mt-3 inline-flex">
                        <img src={distance} alt="" height="30" width="30" class="" />
                        <p class="font-web font-bold mt-1 ml-2"> 273km &nbsp; away</p>
                      </div>
                      <div class="flex justify-end">
                        <p class="font-web font-bold mr-20 -mt-7"> ~ Manant Tyagi (24 M) </p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <Accordion
                sx={{
                  maxWidth: 620,
                  maxHeight: 120
                }}
              >
                <AccordionSummary
                  sx={{
                    backgroundColor: '#D7F0D7',
                    maxWidth: 625,
                    fontFamily: 'Roboto',
                    borderRadius: 2
                  }}
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Tap to know our patient's reviews</Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    backgroundColor: '#FFFFFF'
                  }}
                >
                  <Typography>
                    Bahut badiya doctor hai, poori madad krta hai
                  </Typography>
                  <Typography
                    sx={{
                      textAlign: 'right'
                    }}
                  >
                    Manant Tyagi
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
            <div>
              <div class="cardnew -mt-36 relative" style={{ textAlign: 'left' }}>
                <div class="rounded-xl shadow-xl flex flex-col card-background image image-1 codepen relative">
                  <div class="inline-flex text-2xl font-semibold mt-7 ml-10">
                    <img src={doctor} alt="" height="30" width="30" class="mr-2" />
                    <p class="font-montes"> Niraj Jain  </p>
                    <div class="text-sm mt-3 ml-1">
                      (He/Her)
                    </div>
                    {/* <div class="radial-progress ml-28 justify-end" style="--value:65; font-size: medium;">65%</div> */}
                  </div>
                  <div class="font-web flex flex-row font-semibold text-xl mt-7 ml-10">
                    <img src={covid} alt="" height="26" width="28" class="mr-2" />
                    <p class="ml-1"> Fever, cough, cold, weakness </p>
                  </div>
                  <div class="map-responsive font-popi mt-6 ml-9">
                    <div class="inline-flex justify-start items-start">
                      <img src={mapImage} alt="" height="30" width="30" class="" />
                      <a href=" https://goo.gl/maps/UvwzYjnb2v81gBUN8" class="location-button ml-4"> Near New Mantri, Bhopal </a>
                      <img src={call} alt="" height="26" width="28" class="ml-8" />
                      <p class="font-web font-bold ml-2  text-lg"> +91 - 9392549352 </p>
                    </div>

                    <div class="mt-4">
                      <hr
                        style={{
                          background: 'gray',
                          color: 'black',
                          borderColor: 'gray',
                          height: '1px',
                          marginTop: '10px',
                        }}
                      />
                      <div class="mt-3 inline-flex">
                        <img src={distance} alt="" height="30" width="30" class="" />
                        <p class="font-web font-bold mt-1 ml-2"> 273km &nbsp; away</p>
                      </div>
                      <div class="flex justify-end">
                        <p class="font-web font-bold mr-20 -mt-7"> ~ Manant Tyagi (24 M) </p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <Accordion
                sx={{
                  maxWidth: 620,
                  maxHeight: 120
                }}
              >
                <AccordionSummary
                  sx={{
                    backgroundColor: '#D7F0D7',
                    maxWidth: 625,
                    fontFamily: 'Roboto',
                    borderRadius: 2
                  }}
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Tap to know our patient's reviews</Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    backgroundColor: '#FFFFFF'
                  }}
                >
                  <Typography>
                    Bahut badiya doctor hai, poori madad krta hai
                  </Typography>
                  <Typography
                    sx={{
                      textAlign: 'right'
                    }}
                  >
                    Manant Tyagi
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
            <div>
              <div class="cardnew -mt-36 relative" style={{ textAlign: 'left' }}>
                <div class="rounded-xl shadow-xl flex flex-col card-background image image-1 codepen relative">
                  <div class="inline-flex text-2xl font-semibold mt-7 ml-10">
                    <img src={doctor} alt="" height="30" width="30" class="mr-2" />
                    <p class="font-montes"> Niraj Jain  </p>
                    <div class="text-sm mt-3 ml-1">
                      (He/Her)
                    </div>
                    {/* <div class="radial-progress ml-28 justify-end" style="--value:65; font-size: medium;">65%</div> */}
                  </div>
                  <div class="font-web flex flex-row font-semibold text-xl mt-7 ml-10">
                    <img src={covid} alt="" height="26" width="28" class="mr-2" />
                    <p class="ml-1"> Fever, cough, cold, weakness </p>
                  </div>
                  <div class="map-responsive font-popi mt-6 ml-9">
                    <div class="inline-flex justify-start items-start">
                      <img src={mapImage} alt="" height="30" width="30" class="" />
                      <a href=" https://goo.gl/maps/UvwzYjnb2v81gBUN8" class="location-button ml-4"> Near New Mantri, Bhopal </a>
                      <img src={call} alt="" height="26" width="28" class="ml-8" />
                      <p class="font-web font-bold ml-2  text-lg"> +91 - 9392549352 </p>
                    </div>

                    <div class="mt-4">
                      <hr
                        style={{
                          background: 'gray',
                          color: 'black',
                          borderColor: 'gray',
                          height: '1px',
                          marginTop: '10px',
                        }}
                      />
                      <div class="mt-3 inline-flex">
                        <img src={distance} alt="" height="30" width="30" class="" />
                        <p class="font-web font-bold mt-1 ml-2"> 273km &nbsp; away</p>
                      </div>
                      <div class="flex justify-end">
                        <p class="font-web font-bold mr-20 -mt-7"> ~ Manant Tyagi (24 M) </p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <Accordion
                sx={{
                  maxWidth: 620,
                  maxHeight: 120
                }}
              >
                <AccordionSummary
                  sx={{
                    backgroundColor: '#D7F0D7',
                    maxWidth: 625,
                    fontFamily: 'Roboto',
                    borderRadius: 2
                  }}
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Tap to know our patient's reviews</Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    backgroundColor: '#FFFFFF'
                  }}
                >
                  <Typography>
                    Bahut badiya doctor hai, poori madad krta hai
                  </Typography>
                  <Typography
                    sx={{
                      textAlign: 'right'
                    }}
                  >
                    Manant Tyagi
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
            <div>
              <div class="cardnew -mt-36 relative" style={{ textAlign: 'left' }}>
                <div class="rounded-xl shadow-xl flex flex-col card-background image image-1 codepen relative">
                  <div class="inline-flex text-2xl font-semibold mt-7 ml-10">
                    <img src={doctor} alt="" height="30" width="30" class="mr-2" />
                    <p class="font-montes"> Niraj Jain  </p>
                    <div class="text-sm mt-3 ml-1">
                      (He/Her)
                    </div>
                    {/* <div class="radial-progress ml-28 justify-end" style="--value:65; font-size: medium;">65%</div> */}
                  </div>
                  <div class="font-web flex flex-row font-semibold text-xl mt-7 ml-10">
                    <img src={covid} alt="" height="26" width="28" class="mr-2" />
                    <p class="ml-1"> Fever, cough, cold, weakness </p>
                  </div>
                  <div class="map-responsive font-popi mt-6 ml-9">
                    <div class="inline-flex justify-start items-start">
                      <img src={mapImage} alt="" height="30" width="30" class="" />
                      <a href=" https://goo.gl/maps/UvwzYjnb2v81gBUN8" class="location-button ml-4"> Near New Mantri, Bhopal </a>
                      <img src={call} alt="" height="26" width="28" class="ml-8" />
                      <p class="font-web font-bold ml-2  text-lg"> +91 - 9392549352 </p>
                    </div>

                    <div class="mt-4">
                      <hr
                        style={{
                          background: 'gray',
                          color: 'black',
                          borderColor: 'gray',
                          height: '1px',
                          marginTop: '10px',
                        }}
                      />
                      <div class="mt-3 inline-flex">
                        <img src={distance} alt="" height="30" width="30" class="" />
                        <p class="font-web font-bold mt-1 ml-2"> 273km &nbsp; away</p>
                      </div>
                      <div class="flex justify-end">
                        <p class="font-web font-bold mr-20 -mt-7"> ~ Manant Tyagi (24 M) </p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <Accordion
                sx={{
                  maxWidth: 620,
                  maxHeight: 120
                }}
              >
                <AccordionSummary
                  sx={{
                    backgroundColor: '#D7F0D7',
                    maxWidth: 625,
                    fontFamily: 'Roboto',
                    borderRadius: 2
                  }}
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Tap to know our patient's reviews</Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    backgroundColor: '#FFFFFF'
                  }}
                >
                  <Typography>
                    Bahut badiya doctor hai, poori madad krta hai
                  </Typography>
                  <Typography
                    sx={{
                      textAlign: 'right'
                    }}
                  >
                    Manant Tyagi
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
            <div>
              <div class="cardnew -mt-36 relative" style={{ textAlign: 'left' }}>
                <div class="rounded-xl shadow-xl flex flex-col card-background image image-1 codepen relative">
                  <div class="inline-flex text-2xl font-semibold mt-7 ml-10">
                    <img src={doctor} alt="" height="30" width="30" class="mr-2" />
                    <p class="font-montes"> Niraj Jain  </p>
                    <div class="text-sm mt-3 ml-1">
                      (He/Her)
                    </div>
                    {/* <div class="radial-progress ml-28 justify-end" style="--value:65; font-size: medium;">65%</div> */}
                  </div>
                  <div class="font-web flex flex-row font-semibold text-xl mt-7 ml-10">
                    <img src={covid} alt="" height="26" width="28" class="mr-2" />
                    <p class="ml-1"> Fever, cough, cold, weakness </p>
                  </div>
                  <div class="map-responsive font-popi mt-6 ml-9">
                    <div class="inline-flex justify-start items-start">
                      <img src={mapImage} alt="" height="30" width="30" class="" />
                      <a href=" https://goo.gl/maps/UvwzYjnb2v81gBUN8" class="location-button ml-4"> Near New Mantri, Bhopal </a>
                      <img src={call} alt="" height="26" width="28" class="ml-8" />
                      <p class="font-web font-bold ml-2  text-lg"> +91 - 9392549352 </p>
                    </div>

                    <div class="mt-4">
                      <hr
                        style={{
                          background: 'gray',
                          color: 'black',
                          borderColor: 'gray',
                          height: '1px',
                          marginTop: '10px',
                        }}
                      />
                      <div class="mt-3 inline-flex">
                        <img src={distance} alt="" height="30" width="30" class="" />
                        <p class="font-web font-bold mt-1 ml-2"> 273km &nbsp; away</p>
                      </div>
                      <div class="flex justify-end">
                        <p class="font-web font-bold mr-20 -mt-7"> ~ Manant Tyagi (24 M) </p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <Accordion
                sx={{
                  maxWidth: 620,
                  maxHeight: 120
                }}
              >
                <AccordionSummary
                  sx={{
                    backgroundColor: '#D7F0D7',
                    maxWidth: 625,
                    fontFamily: 'Roboto',
                    borderRadius: 2
                  }}
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Tap to know our patient's reviews</Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    backgroundColor: '#FFFFFF'
                  }}
                >
                  <Typography>
                    Bahut badiya doctor hai, poori madad krta hai
                  </Typography>
                  <Typography
                    sx={{
                      textAlign: 'right'
                    }}
                  >
                    Manant Tyagi
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
            <div>
              <div class="cardnew -mt-36 relative" style={{ textAlign: 'left' }}>
                <div class="rounded-xl shadow-xl flex flex-col card-background image image-1 codepen relative">
                  <div class="inline-flex text-2xl font-semibold mt-7 ml-10">
                    <img src={doctor} alt="" height="30" width="30" class="mr-2" />
                    <p class="font-montes"> Niraj Jain  </p>
                    <div class="text-sm mt-3 ml-1">
                      (He/Her)
                    </div>
                    {/* <div class="radial-progress ml-28 justify-end" style="--value:65; font-size: medium;">65%</div> */}
                  </div>
                  <div class="font-web flex flex-row font-semibold text-xl mt-7 ml-10">
                    <img src={covid} alt="" height="26" width="28" class="mr-2" />
                    <p class="ml-1"> Fever, cough, cold, weakness </p>
                  </div>
                  <div class="map-responsive font-popi mt-6 ml-9">
                    <div class="inline-flex justify-start items-start">
                      <img src={mapImage} alt="" height="30" width="30" class="" />
                      <a href=" https://goo.gl/maps/UvwzYjnb2v81gBUN8" class="location-button ml-4"> Near New Mantri, Bhopal </a>
                      <img src={call} alt="" height="26" width="28" class="ml-8" />
                      <p class="font-web font-bold ml-2  text-lg"> +91 - 9392549352 </p>
                    </div>

                    <div class="mt-4">
                      <hr
                        style={{
                          background: 'gray',
                          color: 'black',
                          borderColor: 'gray',
                          height: '1px',
                          marginTop: '10px',
                        }}
                      />
                      <div class="mt-3 inline-flex">
                        <img src={distance} alt="" height="30" width="30" class="" />
                        <p class="font-web font-bold mt-1 ml-2"> 273km &nbsp; away</p>
                      </div>
                      <div class="flex justify-end">
                        <p class="font-web font-bold mr-20 -mt-7"> ~ Manant Tyagi (24 M) </p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <Accordion
                sx={{
                  maxWidth: 620,
                  maxHeight: 120
                }}
              >
                <AccordionSummary
                  sx={{
                    backgroundColor: '#D7F0D7',
                    maxWidth: 625,
                    fontFamily: 'Roboto',
                    borderRadius: 2
                  }}
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Tap to know our patient's reviews</Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    backgroundColor: '#FFFFFF'
                  }}
                >
                  <Typography>
                    Bahut badiya doctor hai, poori madad krta hai
                  </Typography>
                  <Typography
                    sx={{
                      textAlign: 'right'
                    }}
                  >
                    Manant Tyagi
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>

          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
