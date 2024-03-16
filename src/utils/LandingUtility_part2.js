import { Images } from "./Images";

const LandingUtility_part2 = () => {
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
            <p className="text-lg font-light tracking-wider">
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
              Spam and Bot free chatrooms
            </h1>
            <p className="text-lg font-light tracking-wider">
              Unlike some other websites , we actually care about your chat
              experience and take the necessary steps to keep the bots at bay.
              So come on in, the conversation's lovely and bot-free!
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
              From Strangers to Friends
            </h1>
            <p className="text-lg font-light tracking-wider">
              Turn random online chats with strangers into lasting friendships,
              our features makes it easy to add someone you've hit it off with
              and catch up on past conversations.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingUtility_part2;
