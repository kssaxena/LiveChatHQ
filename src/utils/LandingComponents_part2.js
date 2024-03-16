import { Images } from "./Images";

const LandingComponents_part2 = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 to-black">
      <section className="section1 mb-16">
        <div className="flex justify-around items-center w-full">
          <div className="w-1/2 flex justify-end pr-10 ">
            <img src={Images[2].url} className="w-3/4" />
          </div>
          <div className="w-1/2 flex flex-col text-white p-10 mr-10">
            <h1 className="text-3xl mb-5 font-medium">
              Chat with Random Strangers With Similar Interests
            </h1>
            <p className="text-lg font-normal">
              Talk to online strangers who love what you love, Chat about
              hobbies and enjoy fun conversations - all from one place! Making
              new friends based on interests is made easy .
            </p>
          </div>
        </div>
      </section>

      <section className="section2 mb-16">
        <div className="flex justify-around items-center w-full">
          <div className="w-1/2 flex flex-col text-white p-10 ml-10">
            <h1 className="text-3xl mb-5 font-medium">
              Chat with Random Strangers With Similar Interests
            </h1>
            <p className="text-lg font-normal">
              Talk to online strangers who love what you love, Chat about
              hobbies and enjoy fun conversations - all from one place! Making
              new friends based on interests is made easy .
            </p>
          </div>
          <div className="w-1/2 flex justify-start pl-10 ">
            <img src={Images[3].url} className="w-3/4" />
          </div>
        </div>
      </section>

      <section className="section3 mb-16">
        <div className="flex justify-around items-center w-full">
          <div className="w-1/2 flex justify-end pr-10">
            <img src={Images[4].url} className="w-3/4" />
          </div>
          <div className="w-1/2 flex flex-col text-white p-10 mr-10">
            <h1 className="text-3xl mb-5 font-medium">
              Chat with Random Strangers With Similar Interests
            </h1>
            <p className="text-lg font-normal">
              Talk to online strangers who love what you love, Chat about
              hobbies and enjoy fun conversations - all from one place! Making
              new friends based on interests is made easy .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingComponents_part2;
