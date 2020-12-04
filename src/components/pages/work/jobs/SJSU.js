import React, { Component } from 'react'
import { sjsu } from '../../../../utils/photos'
import PhotoGallery from '../../../misc/PhotoGallery'

export default class SJSU extends Component {
    render() {
        return (
            <>
            <div className="lg-container">
                <h2>Courses: </h2>
                <ul>
                    <li className="roboto-bold">Initial Credits:</li>
                    <ul>
                        <li>AP English Language &amp; Composition</li>
                        <li>AP Microeconomics</li>
                        <li>AP Psychology</li>
                    </ul>
                    <h3 className="heading-rule">
                        <span>Year 1</span>
                    </h3>      
                    <li className="roboto-bold">Fall 2013:</li>
                    <ul>
                        <li><a href={`https://catalog.sjsu.edu/preview_course_nopop.php?catoid=2&coid=6047`} target="_blank" rel="noopener noreferrer">MATH 30P - Cal I with Precalculus</a></li>
                        <li><a href={`https://catalog.sjsu.edu/preview_course_nopop.php?catoid=2&coid=9064`} target="_blank" rel="noopener noreferrer">MATH 30W - Calculus I Workshop</a></li>
                        <li><a href={`https://catalog.sjsu.edu/preview_course_nopop.php?catoid=2&coid=6493`} target="_blank" rel="noopener noreferrer">MUSC 10A - Music Appreciation</a></li>
                        <li><a href={`https://www.sjsu.edu/english/docs/syllabi/ENGL%20112A%2002%20F14%20Krishnaswamy%20.pdf`} target="_blank" rel="noopener noreferrer">UNVS 96GC - Global Citizenship: A	Humanities Perspective</a></li>
                    </ul>
                    <li className="roboto-bold">Spring 2014:</li>
                    <ul>
                        <li><a href={`https://sjsu.instructure.com/courses/943423/assignments/syllabus`} target="_blank" rel="noopener noreferrer">COMM 96PS - Public Speaking</a></li>
                        <li><a href={`https://www.sjsu.edu/english/frosh/course-descriptions/index.php`} target="_blank" rel="noopener noreferrer">ENGL 1B - Composition 2</a></li>
                        <li><a href={`https://catalog.sjsu.edu/preview_course_nopop.php?catoid=1&coid=2153`} target="_blank" rel="noopener noreferrer">ENGR 10 - Intro to Engineering</a></li>
                        <li><a href={`https://catalog.sjsu.edu/preview_course_nopop.php?catoid=1&coid=623`} target="_blank" rel="noopener noreferrer">MATH 31 - Calculus II</a></li>
                        <li><a href={`https://catalog.sjsu.edu/preview_course_nopop.php?catoid=1&coid=3630`} target="_blank" rel="noopener noreferrer">MATH 31W Calculus II Workshop</a></li>
                    </ul>
                    <h3 className="heading-rule">
                        <span>Year 2</span>
                    </h3>      
                    <li className="roboto-bold">Fall 2014:</li>
                    <ul>
                        <li><a href={`https://catalog.sjsu.edu/preview_course_nopop.php?catoid=1&coid=648`} target="_blank" rel="noopener noreferrer">MATH 32 - Calculus III</a></li>
                        <li><a href={`https://www.coursicle.com/sjsu/courses/MATH/42/`} target="_blank" rel="noopener noreferrer">MATH 42 - Discrete Math</a></li>
                        <li><a href={`https://catalog.sjsu.edu/preview_course_nopop.php?catoid=1&coid=1389`} target="_blank" rel="noopener noreferrer">PHIL 10 - Intro to Philosophy</a></li>
                        <li><a href={`https://catalog.sjsu.edu/preview_course_nopop.php?catoid=1&coid=333`} target="_blank" rel="noopener noreferrer">PHYS 50 - General Physics</a></li>
                    </ul>
                    <li className="roboto-bold">Spring 2015:</li>
                    <ul>
                        <li><a href={`https://catalog.sjsu.edu/preview_course_nopop.php?catoid=1&coid=1378`} target="_blank" rel="noopener noreferrer">CMPE 30 - Programming Concept</a></li>
                        <li><a href={`https://catalog.sjsu.edu/preview_course_nopop.php?catoid=1&coid=3014`} target="_blank" rel="noopener noreferrer">ISE 130 - Engineering Statistics</a></li>
                        <li><a href={`https://catalog.sjsu.edu/preview_course_nopop.php?catoid=2&coid=5780`} target="_blank" rel="noopener noreferrer">PHYS 51 - General Physics</a></li>
                        <li><a href={`https://catalog.sjsu.edu/preview_course_nopop.php?catoid=1&coid=31`} target="_blank" rel="noopener noreferrer">POLS 1 - American Government</a></li>
                    </ul>
                    <h3 className="heading-rule">
                        <span>Year 3</span>
                    </h3>      
                    <li className="roboto-bold">Fall 2015:</li>
                    <ul>
                        <li><a href={`https://catalog.sjsu.edu/preview_course_nopop.php?catoid=1&coid=1377`} target="_blank" rel="noopener noreferrer">CMPE 50 - Object Oriented Concepts</a></li>
                        <li><a href={`https://catalog.sjsu.edu/preview_course_nopop.php?catoid=1&coid=2041`} target="_blank" rel="noopener noreferrer">EE 97 - Intro Electrical Engineering Lab</a></li>
                        <li><a href={`https://catalog.sjsu.edu/preview_course_nopop.php?catoid=1&coid=5429`} target="_blank" rel="noopener noreferrer">MATH 129A - Linear Algebra I</a></li>
                        <li><a href={`https://catalog.sjsu.edu/preview_course_nopop.php?catoid=1&coid=5439`} target="_blank" rel="noopener noreferrer">MATH 133A - Ordinary Differential Equations</a></li>
                    </ul>
                    <li className="roboto-bold">Spring 2016:</li>
                    <ul>
                        <li><a href={`https://catalog.sjsu.edu/preview_course_nopop.php?catoid=2&coid=7477`} target="_blank" rel="noopener noreferrer">EE 98 - Intro Circuit Analysis</a></li>
                        <li><a href={`https://catalog.sjsu.edu/preview_course_nopop.php?catoid=2&coid=6400`} target="_blank" rel="noopener noreferrer">BUS5 181 - Intro to Entrepreneurship</a></li>
                        <li><a href={`https://catalog.sjsu.edu/preview_course_nopop.php?catoid=2&coid=1314`} target="_blank" rel="noopener noreferrer">CMPE 102 - Assembly Language</a></li>
                        <li><a href={`https://catalog.sjsu.edu/preview_course_nopop.php?catoid=2&coid=10400`} target="_blank" rel="noopener noreferrer">RTVF 121 - KSJS-FM Radio</a></li>
                    </ul>
                    <h3 className="heading-rule">
                        <span>Year 4</span>
                    </h3>      
                    <li className="roboto-bold">Fall 2016:</li>
                    <ul>
                        <li><a href={`https://catalog.sjsu.edu/preview_course_nopop.php?catoid=1&coid=923`} target="_blank" rel="noopener noreferrer">BUS3 160 - Fundamental Management and Organizational Behavior</a></li>
                        <li><a href={`https://catalog.sjsu.edu/preview_course_nopop.php?catoid=2&coid=6432`} target="_blank" rel="noopener noreferrer">BUS5 186V - Venture Lab</a></li>
                        <li><a href={`https://catalog.sjsu.edu/preview_course_nopop.php?catoid=2&coid=6753`} target="_blank" rel="noopener noreferrer">CMPE 126 - Algebra &amp; Data Structures</a></li>
                        <li><a href={`https://catalog.sjsu.edu/preview_course_nopop.php?catoid=1&coid=1329`} target="_blank" rel="noopener noreferrer">CMPE 148 - Computer Networks I</a></li>
                    </ul>
                    <li className="roboto-bold">Spring 2017:</li>
                    <ul>
                        <li><a href={`https://catalog.sjsu.edu/preview_course_nopop.php?catoid=1&coid=435`} target="_blank" rel="noopener noreferrer">BIOL 10 - The Living World</a></li>
                        <li><a href={`https://catalog.sjsu.edu/preview_course_nopop.php?catoid=2&coid=6315`} target="_blank" rel="noopener noreferrer">BUS2 130 - Intro to Marketing</a></li>
                        <li><a href={`https://catalog.sjsu.edu/preview_course_nopop.php?catoid=1&coid=1321`} target="_blank" rel="noopener noreferrer">CMPE 131 - Software Engineering I</a></li>
                        <li><a href={`https://catalog.sjsu.edu/preview_course_nopop.php?catoid=2&coid=6760`} target="_blank" rel="noopener noreferrer">CMPE 138 - Database System I</a></li>
                        <li><a href={`https://catalog.sjsu.edu/preview_course_nopop.php?catoid=2&coid=10764`} target="_blank" rel="noopener noreferrer">ENGR 100W - Engineering Reports</a></li>
                    </ul>
                    <h3 className="heading-rule">
                        <span>Year 5</span>
                    </h3>      
                    <li className="roboto-bold">Fall 2017:</li>
                    <ul>
                        <li><a href={`https://catalog.sjsu.edu/preview_course_nopop.php?catoid=2&coid=6798`} target="_blank" rel="noopener noreferrer">CMPE 110 - Electronics for Computing Systems</a></li>
                        <li><a href={`https://catalog.sjsu.edu/preview_course_nopop.php?catoid=2&coid=6755`} target="_blank" rel="noopener noreferrer">CMPE 130 - Advanced Algorithm Design</a></li>
                        <li><a href={`https://catalog.sjsu.edu/preview_course_nopop.php?catoid=2&coid=6762`} target="_blank" rel="noopener noreferrer">CMPE 142 - Operating Systems Design</a></li>
                        <li><a href={`https://catalog.sjsu.edu/preview_course_nopop.php?catoid=1&coid=1330`} target="_blank" rel="noopener noreferrer">CMPE 152 - Compiler Design</a></li>
                    </ul>
                    <li className="roboto-bold">Spring 2018:</li>
                    <ul>
                        <li><a href={`https://catalog.sjsu.edu/preview_course_nopop.php?catoid=2&coid=6271`} target="_blank" rel="noopener noreferrer">BUS1 20N - Survey of Accounting</a></li>
                        <li><a href={`https://catalog.sjsu.edu/preview_course_nopop.php?catoid=1&coid=1316`} target="_blank" rel="noopener noreferrer">CMPE 124 - Digital Design I</a></li>
                        <li><a href={`https://catalog.sjsu.edu/preview_course_nopop.php?catoid=2&coid=6810`} target="_blank" rel="noopener noreferrer">CMPE 137 - Mobile Software Engineering</a></li>
                        <li><a href={`https://catalog.sjsu.edu/preview_course_nopop.php?catoid=2&coid=9029`} target="_blank" rel="noopener noreferrer">MATH 179 - Intro Graph Theory</a></li>
                    </ul>
                    <h3 className="heading-rule">
                        <span>Year 6</span>
                    </h3>      
                    <li className="roboto-bold">Fall 2018:</li>
                    <ul>
                        <li><a href={`https://catalog.sjsu.edu/preview_course_nopop.php?catoid=1&coid=3466`} target="_blank" rel="noopener noreferrer">BIOL 140 - Human Sexuality</a></li>
                        <li><a href={`https://catalog.sjsu.edu/preview_course_nopop.php?catoid=1&coid=1317`} target="_blank" rel="noopener noreferrer">CMPE 125 - Digital Design II</a></li>
                        <li><a href={`https://catalog.sjsu.edu/preview_course_nopop.php?catoid=2&coid=7763`} target="_blank" rel="noopener noreferrer">ENGR 160SL - EPICS UD</a></li>
                    </ul>
                    <li className="roboto-bold">Spring 2019:</li>
                    <ul>
                        <li><a href={`https://catalog.sjsu.edu/preview_course_nopop.php?catoid=1&coid=1319`} target="_blank" rel="noopener noreferrer">CMPE 127 - Microprocessor Design I</a></li>
                        <li><a href={`https://catalog.sjsu.edu/preview_course_nopop.php?catoid=1&coid=1326`} target="_blank" rel="noopener noreferrer">CMPE 140 - Computer Architecture &amp; Design</a></li>
                        <li><a href={`https://catalog.sjsu.edu/preview_course_nopop.php?catoid=1&coid=4851`} target="_blank" rel="noopener noreferrer">POLS 150 - War and Peace</a></li>
                    </ul>
                    <h3 className="heading-rule">
                        <span>Year 7</span>
                    </h3>      
                    <li className="roboto-bold">Summer 2019:</li>
                    <ul>
                        <li><a href={`https://catalog.sjsu.edu/preview_course_nopop.php?catoid=2&coid=6843`} target="_blank" rel="noopener noreferrer">CMPE 195E - Senior Design I</a></li>
                    </ul>
                    <li className="roboto-bold">Fall 2019:</li>
                    <ul>
                        <li><a href={`https://catalog.sjsu.edu/preview_course_nopop.php?catoid=2&coid=6831`} target="_blank" rel="noopener noreferrer">CMPE 195F - Senior Design II</a></li>
                        <li><a href={`https://catalog.sjsu.edu/preview_course_nopop.php?catoid=1&coid=1328`} target="_blank" rel="noopener noreferrer">CMPE 146 - Real-Time Embedded System Co-Design</a></li>
                    </ul>
                </ul>

                
            </div>
            <PhotoGallery photos={sjsu} />
            </>
        )
    }
}
