import Header from "../components/Header";
import RegisterFormContainer from "../components/RegisterFormContainer";
import MeetTheDevsCard from "../components/MeetTheDevsCard";

const Final = () => {
  return (
    <header className="relative bg-midnightblue [filter:blur(0px)] w-full h-[18672px] overflow-hidden text-left text-109xl text-white font-h1-heading">
      <Header />
      <img
        className="absolute top-[calc(50%_-_9336px)] right-[-3510px] w-[8214px] h-[12819px]"
        alt=""
        src="/background-elipses.svg"
      />
      <section className="absolute top-[602px] left-[308px] w-[4484px] h-[4302px] text-left text-231xl text-white font-h1-heading">
        <div className="absolute top-[1974px] left-[2126px] w-[2322px] h-[2328px]">
          <img
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/objectother-03@2x.png"
          />
        </div>
        <div className="absolute top-[2414px] left-[0px] capitalize font-semibold whitespace-pre-wrap inline-block w-[1486px] h-[1012px]">
          <p className="m-0">Create or join an event that will bring</p>
          <p className="m-0">{`out the ‘fun’ you.  `}</p>
        </div>
        <img
          className="absolute top-[256px] left-[973px] w-[2214px] h-[2062px] object-cover"
          alt=""
          src="/logo1@2x.png"
        />
        <div className="absolute top-[0px] left-[592px] text-[200px] capitalize font-jacques-francois inline-block w-[3892px] h-[94px] [filter:blur(5px)]">
          Connecting Hearts, Part By Part.
        </div>
      </section>
      <div className="absolute top-[5506px] left-[201px] w-[4465px] h-[2577px]">
        <div className="absolute top-[315px] left-[2167px] w-[2298px] h-[2262px]">
          <img
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/objectother-19@2x.png"
          />
        </div>
        <div className="absolute top-[699px] left-[0px] inline-block w-[2167px] h-[1494px]">
          <p className="m-0">
            ConVene is a dynamic web platform designed to streamline the process
            of discovering, registering for, and managing events.
          </p>
          <p className="m-0">
            {" "}
            Whether you're an eager participant looking for your next challenge
            or an enthusiastic organizer aiming to attract a diverse audience,
            ConVene
          </p>
          <p className="m-0"> has you covered.</p>
        </div>
        <h1 className="m-0 absolute top-[0px] left-[1512px] text-231xl [text-decoration:underline] capitalize font-semibold font-inherit [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
          About Us
        </h1>
      </div>
      <RegisterFormContainer />
      <div className="absolute top-[9122px] left-[101px] rounded-131xl bg-white w-[658px] h-44" />
      <section className="absolute top-[9130px] left-[943px] rounded-131xl bg-white w-[3577px] h-40" />
      <div className="absolute top-[8529px] left-[1931px] text-231xl [text-decoration:underline] capitalize font-semibold inline-block w-[1254px] h-[163px]">
        Events
      </div>
      <div className="absolute top-[9152px] left-[253px] text-[80px] uppercase font-poppins text-black inline-block w-[354px] h-[115px]">
        CREATE
      </div>
      <div className="absolute top-[9168px] left-[2095px] text-45xl uppercase font-jacques-francois text-black">
        Search for an event....
      </div>
      <div className="absolute top-[17728px] left-[-80px] w-[4775px] h-[944px] font-poppins">
        <div className="absolute top-[0px] left-[80px] bg-black w-[4695px] h-[944px]" />
        <img
          className="absolute top-[1px] left-[80px] w-[670px] h-[602px] object-cover"
          alt=""
          src="/whatsapp-image-20230823-at-2027-2@2x.png"
        />
        <h1 className="m-0 absolute top-[69px] left-[949px] text-inherit font-normal font-inherit inline-block w-[2213px] h-[265px]">
          <p className="m-0">{`Thank you for visiting our website. `}</p>
          <p className="m-0">Wishing you a very happy day ahead.</p>
        </h1>
        <img
          className="absolute top-[171px] left-[4159px] rounded-[50px] w-[322px] h-[325px] object-cover"
          alt=""
          src="/open-source-1@2x.png"
        />
      </div>
      <MeetTheDevsCard />
      <h1 className="m-0 absolute top-[18503px] left-[1317px] text-inherit font-normal font-jacques-francois">
        @ConVene all rights reserved.
      </h1>
    </header>
  );
};

export default Final;
