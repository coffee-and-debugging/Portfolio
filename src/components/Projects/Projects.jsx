import React from 'react'
import './Projects.css'

const Projects = () => {
  return (
    <div className='pt-[4rem] md:pt-[8rem] pb-[5rem] w-[100%]'>
      <h1 className="heading">Pro
        <span className='text-yellow-400'>Jects</span></h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[1rem] lg:gap-[3rem] md:gap-[3rem] mt-[4rem]'>
        
          <div className="parent">
            <div className="card bg1">
              <div className="content-box">
                <h1 className="card-title">News Detection</h1>
                <p className="card-content">In this project i employed a logistic regression technique for analysis. Additionally, i used a (re) library to eliminate unnecessary elements from an article text, i used Tfidvectorization to convert the textual data into numerical representations.</p>
                <span className="see-more"><a href="https://github.com/coffee-and-debugging/Fake-News-Detection" target='_blank' rel='noopener noreferrer'> Visit <i class="fa-solid fa-arrow-up-right-from-square"></i></a></span>
              </div>
              <div className="date-box">
                <span className="month">May</span>
                <span className="date">07</span>
                <div className='tooltip'>May 07, 2024</div>
              </div>
            </div>
          </div>

          <div className="parent card1">
            <div className="card bg2">
              <div className="content-box">
                <h1 className="card-title">MRS</h1>
                <p className="card-content">Movie Recomendation System: it selects a movie from datasets and transformed them into vector representations using CountVectorizer. MRS calculates similarities with others in the dataset and recommends the top 5 matches.</p>
                <span className="see-more"><a href="https://github.com/coffee-and-debugging/MRS-Movie-Recommendation-System" target='_blank' rel='noopener noreferrer'> Visit <i class="fa-solid fa-arrow-up-right-from-square"></i></a></span>
              </div>
              <div className="date-box">
                <span className="month">May</span>
                <span className="date">16</span>
                <div className='tooltip'>May 16, 2024</div>
              </div>
            </div>
          </div>

          <div className="parent card2">
            <div className="card bg3">
              <div className="content-box">
                <h1 className="card-title">3ntry Counter</h1>
                <p className="card-content">It counts the number of students who enter from the gate. It first detects a person, and then when they enter the door, the counter is increased. This is done using YOLO object detection, providing real-time detection and precise counting of individuals.</p>
                <span className="see-more"><a href="https://github.com/coffee-and-debugging/3ntryc0unter" target='_blank' rel='noopener noreferrer'> Visit <i class="fa-solid fa-arrow-up-right-from-square"></i></a></span>
              </div>
              <div className="date-box">
                <span className="month">Jun</span>
                <span className="date">09</span>
                <div className='tooltip'>June 09, 2024</div>
              </div>
            </div>
          </div>
        
      </div>
    </div>

  )
}

export default Projects
