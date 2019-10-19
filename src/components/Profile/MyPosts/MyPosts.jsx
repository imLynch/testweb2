import React from 'react';
import Post from './Post/Post'


const MyPosts = (props) => {

    return (
        <div>
        <br/>
        <div align="justify"> <b>Lanzhou University</b> (simplified Chinese: 兰州大学; traditional Chinese: 蘭州大學; pinyin: Lánzhōu Dàxué) is a major
            research university in Lanzhou, Gansu, China. Founded in 1909, it is one of the key universities under
            China's Ministry of Education (Project 985 & Project 211). It is a Chinese Ministry of Education Class A
            Double First Class University.[5] It provides programs for undergraduate, graduate students on four
            campuses—three in Lanzhou city centre and one in Yuzhong County, about 30 miles away from the main campus.
            Total enrolment is approximately 20,000. Undergraduate students study at the Yuzhong campus. There are 6
            National Bases for the Training of Researching and Teaching personnel for Fundamental Disciplines. The
            University operates an additional 35 institutes along with 1 national key Laboratory of the Applied Organic
            and 3 key laboratories of Arid and Grassland Ecology, West China Environment, Magnetism and Magnetic
            Materials of the Ministry of Education, a key laboratory of Grassland Agro-ecosystem of the Ministry of
            Agriculture. Lanzhou University was one of the first universities entitled to enroll Bachelor Master’s and
            Doctoral degree candidates in 1981. Lanzhou University is one of the top ten universities in contributions
            to academic publications in international journals frequently cited by ongoing research from around the
            world.</div>
            <br/>
        <div> Reviews </div>
    <textarea></textarea>
    <button> Add post </button>
    <div>
        <Post message='review 1'/>
        <Post message='review 2'/>
        <Post message='review 3'/>

    </div>
        </div>
)
};

export default MyPosts;
