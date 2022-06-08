import React, { useContext } from "react";
import Navigation from "../../components/landing/Navigation";
import Bottomer from "../../components/landing/Bottomer";
import LeftDoctor from "../../icons/LeftDoctor";
import Approval from "../../icons/Approval";
import MaleDoctor from "../../assets/male.png";
import { Responsive } from "../../context/landing/Responsive";
import Landing from "../../loading/Landing";
import { ecos, downs } from "../../datas/Landing";
import { Button } from "@mui/material";
import { ArrowCircleRight } from "@mui/icons-material";

function Ecosystem() {
  const { loading, width, wid } = useContext(Responsive);
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
                </div>
                <div className="flex flex-col gap-4 items-center max-w-[50rem]">
                  <h2 className="text-[#3A4A62] text-center font-bold text-xl">
                    Caring for the health and well being of you and your family
                  </h2>
                  <h1 className="font-bold text-4xl text-[#053085] text-center">
                    We Strive To Provide You &amp; Your Family With The Best
                    Medical
                  </h1>
                  <LeftDoctor />
                </div>
                <div className="text-[#3A4A62] max-w-[25rem] flex flex-col gap-5 text-lg">
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
            <div className="flex w-full h-[50rem] mb-10">
              <div
                style={{ backgroundImage: `url(${MaleDoctor})` }}
                className="min-w-[50%] bg-cover bg-top  "
              ></div>
              <div className="bg-[#080B4A] flex flex-col gap-24 text-white">
                <div className="flex flex-col gap-10">
                  <h1 className="font-bold text-4xl font-[sans Inter] text-center">
                    Sets The Standard For Outstanding High QualityCare And
                    Patient Safety!!
                  </h1>
                    <p className="text-[#D6D5D5] w-[10rem]">
                      Our doctors include highly qualified male and female
                      practitioners who come from a range of backgrounds and
                      bring with a diversity of skills and special interests.
                    </p>
                    <p className="text-[#D6D5D5] w-[10rem]">
                      Our administration and support staff all have exceptional
                      people skills and trained to assist you with all medical
                      enquires.
                    </p>
                </div>
                <div>
                  <div className="max-w-1/2 flex flex-col gap-4">
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
            </div>
            <div></div>
          </div>
          <Bottomer />
        </>
      )}
    </div>
  );
}

export default Ecosystem;
