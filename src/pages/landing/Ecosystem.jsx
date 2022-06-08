import React, { useContext } from "react";
import Navigation from "../../components/landing/Navigation";
import Bottomer from "../../components/landing/Bottomer";
import LeftDoctor from "../../icons/LeftDoctor";
import Approval from "../../icons/Approval";
import MaleDoctor from "../../assets/doceco.jpg";
import { Button } from '@mui/material'
import { Responsive } from "../../context/landing/Responsive";
import Landing from "../../loading/Landing";

function Ecosystem() {
  const { loading, width, wid } = useContext(Responsive);
  const ecos = [
    "Health assessments",
    "Home medicine review",
    "Fractures and dislocation",
    "Desensitization injections",
  ];
  const qns = [
    "Why Trust levitra",
    "Why choose Levitra",
    "When are Doctors Avalilable",
    "Is Insurance accepted",
    "Is it Security Trusted",
  ];
  const downs = [
    "Delivering tomorrow's health care for your family",
    "Delivering tomorrow's health care for your family",
    "Delivering tomorrow's health care for your family",
  ];
  return (
    <div>
    <div className="w-[100%] min-h-[100vh]  bg-[#E6EDF8]">
      {loading && <Landing />}
      <Navigation link={"ecosystem"} title="Levitra - Ecosystem" />
      <div className="pt-[8rem] bg-[#E6EDF8]">
        {!width ? (
          <>
                      <div className="max-w-[50%]">
              <h2 className="text-[#3A4A62] text-center font-bold text-xl">
                Caring for the health and well being of you and your family
              </h2>
              <h1 className="font-bold text-4xl text-[#053085] text-center">
                We Strive To Provide You &amp; Your Family With The Best Medical
              </h1>
              </div>
          <div className="flex gap-4 pb-10 px-8 items-center justify-center py-5">
            
            <div className="flex flex-col gap-2 max-w-[20rem]">

              <div className="text-[#3A4A62] text-xl font-bold">
                We provide all aspects of medical practice for you whole family,
                including general check-ups or assisting you with specific
                injuries.
              </div>
              <div className="text-[#3A4A62] font-medium text-md">
                We'll work with you to develop individualized care plans,
                including management of chronic diseases. If we cannot assist,
                we can provide referrals or advice about type of practitioner
                require. We treat all enquires sensitively and in the strictest
                confidence
              </div>
            </div>

              
              <div className="text-[#3A4A62] max-w-[20rem] flex flex-col gap-5 text-lg">
              <div className="font-medium text-lg">
                We're here to care for you and your entire family. Regular
                visits to the doctor will depend on your age and general health!
              </div>
              <div className="flex flex-col gap-2 w-[18rem]">
                {ecos.map((eco, index) => (
                  <div key={index} className="flex font-bold gap-2 items-center">
                    <Approval />
                    <div>{eco}</div>
                  </div>
                ))}
                </div>
                    </div>

            <div className="items-center max-w-[50rem] ">

              <LeftDoctor />
            </div>

          </div>
          </>
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
                  className={`text-[#3A4A62] ${wid && ""} text-xl font-bold`}
>
                  <h2>
                  Caring for the health and well being of you and your family
                </h2>
                </div>
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
                    </div>

                  

                </div>
              </div>
            
            <div className="flex w-full mb-10">
              <div
                style={{ backgroundImage: `url(${MaleDoctor})` }}
                className="min-w-[50%]"
              ></div>
              <div className="bg-[#080B4A] flex gap-7 flex-col px-14 py-10 text-white">
                <h1 className="font-bold text-4xl font-[sans Inter] text-center">
                  Sets The Standard For Outstanding High QualityCare And Patient
                  Safety!!
                </h1>
                <p className="text-[#D6D5D5]">
                  Our doctors include highly qualified male and female
                  practitioners who come from a range of backgrounds and bring
                  with a diversity of skills and special interests.
                </p>
                <p className="text-[#D6D5D5] pt-5">
                  Our administration and support staff all have exceptional
                  people skills and trained to assist you with all medical
                  enquires.
                </p>
                <div className="max-w-1/2 flex flex-col gap-4">
                  {downs.map((down, index) => (
                    <div key={index} className="flex gap-3 items-center">
                      <Approval />
                      <div className="font-semibold">{down}</div>
                    </div>
                  ))}
                </div>
              </div>
                    </div>
              
            </div>
          </div>
        )}
        <div className="flex w-full mb-10">
          <div style={{ backgroundImage: `url(${MaleDoctor})`, backgroundPosition: "center", backgroundRepeat:"no-repeat", backgroundSize:"cover"}} className={`max-w-[33rem] ${wid && 'hidden'} min-w-[25rem]`}></div>
          <div className="bg-[#080B4A] flex gap-7 flex-col px-14 py-10 text-white">
            <h1 className="font-bold text-4xl font-[sans Inter] text-center">
              Sets The Standard For Outstanding High QualityCare And Patient
              Safety!!
            </h1>
            <p className="text-[#D6D5D5]">
              Our doctors include highly qualified male and female practitioners
              who come from a range of backgrounds and bring with a diversity of
              skills and special interests.
            </p>
            <p className="text-[#D6D5D5] pt-5">
              Our administration and support staff all have exceptional people
              skills and trained to assist you with all medical enquires.
            </p>
            <div className="max-w-1/2 flex flex-col gap-4">
              {downs.map((down, index) => (
                <div key={index} className="flex gap-3 items-center">
                  <Approval />
                  <div className="font-semibold">{down}</div>
                </div>
              ))}

            </div>
            <div></div>
          </div>
        </div>
        <div className="w-full p-[2rem] items-center">
        <div className="flex justify-around w-full h-[10%] ">
                <div>
                  <h3 className="font-xl text-black font-bold" style={{fontSize:"1.5rem"}}>How can we <br /><span className="font-xl text-[#080B4A] font-bold" >help  you</span></h3>
                </div>
                <div>
                <Button variant="outlined" style={{ borderRadius:"20px", textTransform:"lowercase" }} className="m-10">Type your question here..</Button>
                </div>
        </div>
                
                <div className="p-5 flex flex-col gap-5 items-center">
                  {qns.map((qn,index)=>(
                    <div className="flex justify-between bg-white w-[60%] h-[10vh] rounded-[10px] px-8 pb-2 pt-4" style={{boxShadow:" 2px 2px 5px #aaaaaa"}}>
                    <div key={ index} className=" text-center">
                      {qn}
                      </div>
                      <div>+</div>
                      
                      </div>
                  ))}
                
        </div>
                </div>
        </div>
      </div>
      
      
      <Bottomer />

    
    </div>
  );
}
      
export default Ecosystem;
