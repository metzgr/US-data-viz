import React, { useEffect } from 'react';
import eagleDataCollage from '../assets/img/artwork/eagle-data@2x.jpg';
import dropdownIcon from '../assets/img/icon/dropdown-chevron.svg';
import menuIcon from '../assets/img/icon/hamburger-menu.svg';
import iphoneStatusBar from '../assets/img/icon/iphone-status-bar.svg';
import searchIcon from '../assets/img/icon/search.svg';
import seal from '../assets/img/logo/omb.png';
import pgovLogo from '../assets/img/logo/pgov.svg';

const Prototype = () => {
  useEffect(() => {
    const dropcapParagraph = document.querySelector('.dropcap-paragraph');
    const moreButton = document.createElement('span');
    moreButton.className = ' more';
    moreButton.textContent = ' more';
    dropcapParagraph.appendChild(moreButton);

    moreButton.addEventListener('click', function() {
      dropcapParagraph.classList.toggle('expanded');
      if (dropcapParagraph.classList.contains('expanded')) {
        moreButton.textContent = ' less';
      } else {
        moreButton.textContent = ' more';
      }
    });
  }, []);

  return (
    <div className="prototype-page">
      <div className="phone-container">
        <div className="prototype-body">
          <div className="text-center margin-top-1"><img src={iphoneStatusBar} alt="Seal" class=""></img></div>

        <div className="display-flex flex-justify flex-align-center padding-y-05 padding-x-1">
        <div className="display-flex flex-align-center">
<img src={menuIcon} alt="Seal" class="margin-right-05 width-4"></img>
<div><img src={searchIcon} alt="Seal" class="width-4"></img></div>
</div>
<img src={pgovLogo} alt="Performance.gov logo" class="width-5"></img>
<button className="radius-pill border-0 padding-y-1 padding-x-105 bg-pgov-red label-small-public-sans text-white text-semibold">
    Share
  </button>
</div>


<div className="display-flex flex-align-center padding-y-1 padding-x-1 border-top-3px">
<img src={seal} alt="Seal" class="seal-image margin-right-1 width-5 height-5 border radius-pill border-base"></img>
<div className="">  <p className="title label-small-public-sans text-ink margin-0"><span className="hyperlink">White House</span></p>
    <p className="text-gray-60 margin-0"><span className="label-xsmall-public-sans text-bold hyperlink">Plans</span><span className="text-gray-cool-20 margin-x-05">/</span><span className="label-small-public-sans text-base-dark hyperlink text-normal">National Drug Control Strategy</span></p></div>
</div>



      


          <div className="title-card bg-pgov-black padding-x-2 padding-y-3">
          <div className="display-flex flex-justify flex-align-center margin-bottom-2">
  <span className="object__type label-xmedium-public-sans bg-white padding-x-1 padding-y-2px text-bold radius-pill text-ink">GOAL</span>
  <span className="text-no-wrap label-small-public-sans text-gray-cool-30">1<span className="margin-x-2px">/</span>7</span>
</div>
            <h1 className="heading-xlarge-copernicus text-uppercase text-gray-cool-1 margin-bottom-105 margin-top-205">Illicit substance use is reduced in the United States</h1>
            <div className="title-card__footer paragraph-xsmall-public-sans text-gray-cool-20">
              <span>197K views</span> • <span>Updated 1 mo ago</span>
            </div>
          </div>

          <div className="cite-section padding-x-2 margin-y-2">
  <button className="width-full radius-pill border-0 padding-1 bg-base-lightest label-xmedium-public-sans text-ink">
    Cite
    <img src={dropdownIcon} alt="Dropdown Icon" className="margin-left-05 padding-left-2px icon-dropdown" />
  </button>
</div>

          <nav className="navbar margin-top-3">
            <ul className="navbar-list label-medium-public-sans">
              <li className="navbar-item active">
                <a href="#" className="navbar-link">Home</a>
              </li>
              <li className="navbar-item">
                <a href="#" className="navbar-link">Metrics</a>
              </li>
              <li className="navbar-item">
                <a href="#" className="navbar-link">Reports</a>
              </li>
              <li className="navbar-item">
                <a href="#" className="navbar-link">Stories</a>
              </li>
            </ul>
          </nav>

          <div className="artwork text-center margin-top-3">
            <img src={eagleDataCollage} alt="Eagle Data Collage" className="maxw-264px" />
          </div>

          <div className="introduction padding-x-2 padding-y-1">
            <p className="paragraph-medium-copernicus text-ink dropcap-paragraph truncate">
              <span className="dropcap">B</span>
              etween 2015 and 2020, overdose deaths grew 75 percent, reaching an all-time high of 91,799 deaths in 2023. During the same time period, the rate of untreated substance use disorders (SUD), which affect the health, social, and educational systems of our Nation, also grew ...
            </p>
            
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default Prototype;

<div className="display-flex flex-justify flex-align-center margin-bottom-2">
  <span className="object__type label-xmedium-public-sans bg-white padding-x-1 padding-y-2px text-bold radius-pill text-ink">GOAL</span>
  <span className="text-no-wrap label-small-public-sans text-gray-cool-30">1<span className="margin-x-2px">/</span>7</span>
</div>