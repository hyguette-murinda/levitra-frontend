import React, { useContext, useState } from "react";
import Navigation from "../../components/landing/Navigation";
import Bottomer from "../../components/landing/Bottomer";
import LeftDoctor from "../../icons/LeftDoctor";
import Approval from "../../icons/Approval";
import MaleDoctor from "../../assets/doceco.jpg";
import { Button } from "@mui/material";
import { Responsive } from "../../context/landing/Responsive";
import Landing from "../../loading/Landing";
import { ecos, downs, qns } from "../../datas/Landing";
import { Add, ArrowCircleRight, PlayArrow, Remove } from "@mui/icons-material";
import { Fade, Zoom } from 'react-reveal'

function Ecosystem() {
  const { loading, width, wid, widh } = useContext(Responsive);
  const [selected, setSelected] = useState([]);
  const changes = (index) => {
    setSelected(
      selected.includes(index)
        ? selected.filter((selected) => selected !== index)
        : [...selected, index]
    );
  };

  return (
    <div className="w-full bg-[#E6EDF8]">
      {loading ? (
        <Landing />
      ) : (
        <>
          <Navigation link={"ecosystem"} title="Levitra - Ecosystem" />
          <div className="pt-[8rem] bg-[#E6EDF8]">
            {!width ? (
              <div className="flex gap-4 pb-14 px-4 items-center justify-center">
                <div className="flex flex-col gap-16 max-w-[27rem]">
                 <Fade left duration={ 1000 } >
                    <div className="text-[#3A4A62] text-xl font-bold">
                      We provide all aspects of medical practice for you whole
                      family, including general check-ups or assisting you with
                      specific injuries.
                    </div>
                    <div className="text-[#3A4A62] font-medium text-lg">
                      We'll work with you to develop individualized care plans,
                      including management of chronic diseases. If we cannot
                      assist, we can provide referrals or advice about type of
                      practitioner require. We treat all enquires sensitively and
                      in the strictest confidence
                    </div>
                 </Fade>
                </div>
                <div className="flex flex-col gap-4 items-center max-w-[50rem]">
                  <Zoom>
                    <h2 className="text-[#3A4A62] text-center font-bold text-xl">
                      Caring for the health and well being of you and your family
                    </h2>
                    <h1 className="font-bold text-4xl text-[#053085] text-center">
                      We Strive To Provide You &amp; Your Family With The Best
                      Medical
                    </h1>
                  </Zoom>
                  <Zoom delay={ 1000 }>
                    <LeftDoctor />
                  </Zoom>
                </div>
                <div className="text-[#3A4A62] max-w-[25rem] flex flex-col gap-5 text-lg">
                  <Fade right duration={ 1000 }>
                    <div className="font-medium text-lg">
                    We're here to care for you and your entire family. Regular
                    visits to the doctor will depend on your age and general
                    health!
                    </div>
                    <div className="flex flex-col gap-2 w-[18rem]">
                      {ecos.map((eco, index) => (
                        <div
                          key={index}
                          className="flex font-bold gap-2 items-center"
                        >
                          <Approval />
                          <div>{eco}</div>
                        </div>
                      ))}
                    </div>
                  </Fade>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-8 pb-14">
                <h2
                  className={`text-[#3A4A62] ${
                    !wid && "text-center"
                  } font-bold text-xl`}
                >
                  Caring for the health and well being of you and your family
                </h2>
                <div className="flex gap-4 px-4">
                  <div className="flex flex-col gap-7">
                    <h1 className={`font-bold text-3xl text-[#053085]`}>
                      We Strive To Provide You &amp; Your Family With The Best
                      Medical
                    </h1>
                    <div
                      className={`text-[#3A4A62] ${
                        wid && ""
                      } text-xl font-bold`}
                    >
                      We provide all aspects of medical practice for you whole
                      family, including general check-ups or assisting you with
                      specific injuries.
                    </div>
                    <div className="flex flex-col text-[#3A4A62] gap-2">
                      {ecos.map((eco, index) => (
                        <div
                          key={index}
                          className="flex font-bold text-lg gap-2 items-center"
                        >
                          <Approval />
                          <div>{eco}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <LeftDoctor />
                </div>
              </div>
            )}
            <div className="flex w-full relative mb-10">
              {!width && (
                <div
                  style={{ backgroundImage: `url(${MaleDoctor})` }}
                  className="min-w-[50%] bg-cover bg-top  "
                ></div>
              )}
              {!widh && (
                <Fade left duration={ 1000 } delay={ 1000 }>
                  <div className="absolute top-[38%] bg-[#080B4A] p-8 rounded-full left-[46%] my-auto">
                  <div className="bg-white w-20 h-20 flex items-center justify-center rounded-full">
                    <PlayArrow
                      style={{ height: 45, width: 45 }}
                      className="text-black"
                    />
                  </div>
                </div>
                </Fade>
              )}
              <div className={`bg-[#080B4A] px-5 py-10 flex ${!width ?  'w-1/2' : "w-full"} flex-col items-center gap-10 text-white`}>
                <Fade right duration={ 1000 }>
                  <h1 className="font-bold text-4xl max-w-[50rem] font-[sans Inter] text-center">
                  Sets The Standard For Outstanding High QualityCare And Patient
                  Safety!!
                </h1>
                <div className="flex flex-col gap-20">
                  <div className="flex flex-col gap-10">
                    <p className="text-[#D6D5D5] text-lg max-w-[35rem]">
                      Our doctors include highly qualified male and female
                      practitioners who come from a range of backgrounds and
                      bring with a diversity of skills and special interests.
                    </p>
                    <p className="text-[#D6D5D5] text-lg max-w-[35rem]">
                      Our administration and support staff all have exceptional
                      people skills and trained to assist you with all medical
                      enquires.
                    </p>
                  </div>
                  <div className="flex flex-col gap-20">
                    <div className="max-w-1/2 flex flex-col gap-7">
                      {downs.map((down, index) => (
                        <div key={index} className="flex gap-3 items-center">
                          <Approval />
                          <div className="font-semibold">{down}</div>
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-10">
                      <Button
                        style={{
                          color: "white",
                          border: "1px solid white",
                          background: "#0F1359",
                          width: 230,
                          height: 50,
                          display: "flex",
                          justifyContent: "space-around",
                          borderRadius: "30px",
                        }}
                        variant="outlined"
                      >
                        <ArrowCircleRight />
                        <span>Make Appointment</span>
                      </Button>
                      <Button
                        style={{
                          color: "white",
                          border: "1px solid white",
                          display: "flex",
                          justifyContent: "space-around",
                          borderRadius: "30px",
                          width: 200,
                        }}
                        variant="outlined"
                      >
                        Find a doctor
                      </Button>
                    </div>
                  </div>
                </div>
                </Fade>
              </div>
            </div>
            <div className="w-full flex mb-16 flex-col items-center">
              <div className="w-[60%] flex flex-col gap-10">
                <div className="flex max-w-full items-center justify-between">
                  <div className="flex flex-col font-bold text-5xl">
                    <span>How can we</span>
                    <span className="text-[#053085]">help you?</span>
                  </div>
                  <input
                    type="text"
                    className="border-[1px] outline-none border-solid rounded-full w-[22rem] py-6 placeholder:text-[#2B4883] px-7 h-10 bg-transparent border-[#071854]"
                    placeholder="Type your question here..."
                  />
                </div>
                <div className="flex flex-col gap-6">
                  <Fade bottom duration={ 1500 } delay={ 1000 } >
                    {qns.map((qn, index) => (
                    <div
                      key={index}
                      style={
                        selected.includes(index)
                          ? {
                              height: qn.desc.length,
                              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.25)",
                            }
                          : {
                              height: 70,
                              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.25)",
                            }
                      }
                      className={`w-full bg-white transition-all duration-700 overflow-hidden px-8 py-5 rounded-md text-[#2B4883]`}
                    >
                      <div className="flex justify-between items-center">
                        <div className="font-semibold py-1">{qn.quest}</div>
                        {selected.includes(index) ? (
                          <Remove onClick={() => changes(index)} />
                        ) : (
                          <Add onClick={() => changes(index)} />
                        )}
                      </div>
                      <div className="mt-4 max-w-[31rem] leading-7 text-lg">
                        {qn.desc}
                      </div>
                    </div>
                  ))}
                  </Fade>
                </div>
              </div>
            </div>
          </div>
          <Bottomer />
        </>
      )}
    </div>
  );
}

export default Ecosystem;
