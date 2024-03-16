const AboutValueCard = ({icon,title,description}) =>{
    return (
      <div className="w-1/3 flex flex-col justify-center items-center border border-[#1C1938] rounded-3xl m-3 p-10 shadow-xl hover:shadow-2xl duration-150 ease-in-out hover:scale-105 hover:shadow-black ">
        <h1 className="animate-bounce shadow-2xl">{icon}</h1>
        <h1 className="text-4xl m-2">{title}</h1>
        <p className="text-lg font-light m-2 text-center">{description}</p>
      </div>
    );
};

export default AboutValueCard;