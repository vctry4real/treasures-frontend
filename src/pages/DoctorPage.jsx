import React from 'react';
import maleDoctor from '../assets/doc.png';
import femaleDoctor from '../assets/KathrynMurphy.jpg';
import helium from '../assets/Helium.jpg';
import GenerateData from '../components/temp/docData';
import starfull from '../assets/starfullsvg.svg';
import starEmpty from '../assets/starempty.svg';
import smile from '../assets/smile.svg';
import { FaFontAwesome } from 'react-icons/fa6';
import linda from '../assets/Linda.jpg';

// create the number of parameters as needed
// const [docReviews, doc, users, reviews] = GenerateData({

const data = GenerateData({
  numDocs: 4,
  numUsers: 4,
  numReviewedDocs: 4,
  numReviewsPerDoc: 4,
});
// console.log(doctors, reviews);
data ? console.log(data.docReviews[1]) : console.log('not loaded');
// Import Swiper styles
// import '../swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

// const doctors = #9E9E9E
const frown = () => {
  return (
    <svg viewBox="0 0 512 512" width="10" height="10" fill="#FF3333">
      <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM174.6 384.1c-4.5 12.5-18.2 18.9-30.7 14.4s-18.9-18.2-14.4-30.7C146.9 319.4 198.9 288 256 288s109.1 31.4 126.6 79.9c4.5 12.5-2 26.2-14.4 30.7s-26.2-2-30.7-14.4C328.2 358.5 297.2 336 256 336s-72.2 22.5-81.4 48.1zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </svg>
  );
};

const positiveStyle =
  ' flex flex-row justify-content text-[#003B3B] text-base bg-[#E7FFE7] rounded-xl';
const negativeStyle = 'text-[#FF3333] text-base bg-[#FFF5F5] rounded-xl';
const smallFont =
  'flex flex-row justify-content text-center items-center text-center text-[#212121] text-base font-outfit font-normal'; //was xs
const medFont = 'text-center text-[#212121] text-lg font-outfit font-medium'; //was base
const boldFont =
  'text-center text-[#212121] text-lg font-outfit font-semibold p-4'; // was base
const largeFont =
  'text-center text-[#212121] text-xl font-outfit font-semibold p-4'; //was xl
// const smallLabel = 'text-center text-[#212121] text-xs font-outfit font-normal';

// The card before this would pass the current logged-in userID (or email) and the docID (email) of the card clicked
// Here we make use of the userObj (key: userEmail), doctorObj (key: docEmail) and ReviewObj (key: uid or user&doc email)

const DoctorPage = () => {
  return (
    <div className="flex flex-col w-screen h-screen items-center">
      <div className=" w-4/5    ">
        <div className="flex flex-col w-full">
          <div className="flex flex-col items-center">
            {/* // image container  */}
            <div className="p-4 flex flex-col items-center">
              <img
                className="h-30 w-30 rounded-full md:h-30 lg:h-30 md:w-30 lg:w-30"
                alt="feamalle doc"
                src={
                  data.selectedDoc.gender === 'Male' ? maleDoctor : femaleDoctor
                }
              ></img>

              <h1 className={boldFont}>{data.selectedDoc.fullName}</h1>

              {/* work info */}
              <div className="flex items-center pb-8">
                <p>
                  <img src={helium}></img>
                </p>
                <h3 className={`${smallFont} text-[#757575] `}>
                  {data.selectedDoc.position} at {data.selectedDoc.hospital}
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* data */}
        <div>
          <div className="p-8">
            <h3 className={medFont}>Bio</h3>
            <p className={`${smallFont} text-[#757575] `}>
              {data.selectedDoc.bio}
            </p>
          </div>

          {/* metricCard */}
          <div className="flex flex-row block w-full justify-between px-4">
            {metric({
              val: data.selectedDoc.totalMinutes,
              label: 'Total minutes',
              unit: 'mins',
            })}
            <div className="flex justify-center items-center align-center">
              <hr className="block bg-[#DDDDDD] h-10 w-0.5 text-center" />
            </div>
            {metric({
              val: data.selectedDoc.sessionsCompleted,
              label: 'Sessions completed',
              unit: '',
            })}
            <div className="flex justify-center items-center align-center">
              <hr className="block bg-[#DDDDDD] h-10 w-0.5 text-center" />
            </div>
            {metric({
              val: data.selectedDoc.averageAttendance,
              label: 'Avg attendance',
              unit: '%',
            })}
          </div>
          <div className="flex justify-between">
            <div className="flex flex-row items-center">
              <h3
                className={`${medFont} flex`}
              >{`Reviews (${data.docReviews.length})`}</h3>
              <div className="flex">
                {ratingDisplay(data.selectedDoc.rating)}
              </div>
            </div>
            <button className="flex box-border hover:box-content h-10 w-24 p-4 border-4 bg-secondary items-center">
              View all
            </button>
          </div>

          {/* comment card */}
          <div className="flex flex-row w-full overflow-x-auto">
            {data.docReviews.map((review, i) => (
              <div key={i} className="m-2 border bg-[#F5F5F5]">
                <p className={smallFont}>{review.createdAt.toDateString()}</p>
                <p className={smallFont}>{review.content}</p>
                <div>
                  {/* tag card */}
                  <div className="flex w-full overflow-x-auto">
                    {data.docReviews[1].reviewTags.map((tag, index) => (
                      <div className="p-4" key={index}>
                        {tag.positive ? (
                          <div className={positiveStyle}>
                            <img className="px-2" src={smile} />
                            <p>{tag.title}</p>
                          </div>
                        ) : (
                          <div className={positiveStyle}>
                            <div
                              className="px-2 flex justify-center items-center
                        align-center "
                            >
                              {frown()}
                            </div>
                            <p>{tag.title}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-row justify-between">
                  <div className="flex flex-row">
                    <div className="  h-8 w-8 rounded-full items-center align-center justify-center">
                      <img src={linda}></img>
                    </div>
                    <div className="flex flex-col items-center align-center justify-center">
                      <p>{review.userName}</p>
                      <p>
                        {
                          data.users.find(
                            (user, i) => user.email === review.userEmail
                          ).type
                          //   console.log(data.users[1].type)
                        }
                      </p>
                      {/* <p>
                          {
                            data.users.find(
                              (user, i) => user.email === review.userEmail
                            ).fullName
                          }
                        </p> */}
                    </div>
                  </div>
                  {ratingDisplay(review.rating)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <button
        type="submit"
        // onClick={handleNextStep}
        className="w-2/3 mt-4 bg-primary hover:bg-lightGreen text-white p-4 rounded-3xl hover:bg-blue-600"
      >
        Check Availability
      </button>
    </div>
  );
};

export default DoctorPage;

{
  /* Swiper for carousel */
}
{
  /* <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            // navigation
            pagination={{ clickable: true }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 50,
              },
            }}
            // scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            className="w-full"
          >
            {slides.map((slide, index) => {
              return (
                <SwiperSlide key={index} className="w-full h-auto mb-10">
                  <div className="w-full h-auto p-4 items-center justify-center bg-white rounded-xl">
                    <div className="w-full h-atuo mb-3">
                      <div>
                        <div className="w-5 h-5 rounded-full"></div>
                        <h3 className="flex items-center">
                          <span className="mr-4">{slide.icon}</span>
                          {slide.title}
                        </h3>
                      </div>
                      <div className="mt-2 bg-gray-300">
                        <img
                          src={slide.image}
                          alt="educational resources"
                          className="w-full h-full "
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-md my-2">
                          {slide.title2}
                        </h4>
                        <p>{slide.description}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper> */
}

function metric({ val, unit, label }) {
  return (
    <div className="flex flex-col items-center">
      <p className={`${smallFont} text-[#9E9E9E]`}>{label}</p>
      <p className={largeFont}>
        {val > 999 ? `${(val / 1000).toFixed(1)}k ${unit}` : `${val} ${unit}`}
      </p>
    </div>
  );
}

function ratingDisplay(rating) {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    rating - i > 1
      ? stars.push(
          <img
            className="pl-1 text-xl"
            key={i}
            src={starfull}
            alt={`Star ${i}`}
          />
        )
      : stars.push(
          <img className="pl-1" key={i} src={starEmpty} alt={`Star ${i} `} />
        );
  }
  return <div className="flex flex-row">{stars}</div>;
}
